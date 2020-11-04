import React, { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import articleApi from '../../../services/common/news'
import notify from '../../../services/common/notify'
import { LanguageContext } from "../../../LanguageContext"
import HeaderComp from '../../../components/Header/HeaderComp'
import { StyledWrapper, StyledImage, StyledBackTo, StyledContent } from './style'
import Chevron from '../../../components/Chevron'
import LoaderComp from "../../../components/Loader/LoaderComp"

const ArticlePage = (props) => {

  const { language, setDisableButtons } = useContext(LanguageContext)

  const [data, setData] = useState({
    isBusy: false,
    article: {}
  })

  const { isBusy, article } = data
  const { articleGroup, articleId, index } = useParams();

  useEffect(() => {
    setDisableButtons(true)
    getArticle()
    return () => setDisableButtons(false)
  }, [])

  const getArticle = async () => {
    setData(prevData => ({ ...prevData, isBusy: true }))
    try {
      let responseArticles = {}
      if (articleGroup === 'country') {
        responseArticles = await articleApi.getTopNews(language.id)
      }
      responseArticles = await articleApi.getArticle(language.id, articleGroup, articleId)
      setData({
        ...data,
        isBusy: false,
        article: responseArticles.data.articles[index]
      })
    } catch (error) {
      if (error.response) {
        notify(error.response.data.message, 'error')
      }
      else {
        notify('General error.', 'error')
      }
      setData(prevData => ({ ...prevData, isBusy: false }))
    }
  }

  const handleBack = () => {
    props.history.goBack()
  }

  return (
    <StyledWrapper>
      {article && <>
        <HeaderComp style={{ marginLeft: 0 }} title={article.title || ''} />
        {article.urlToImage && <StyledImage src={article.urlToImage || ''} />}
        <StyledContent>{article.content || ''}</StyledContent>
        <StyledBackTo onClick={handleBack}>
          <Chevron position={'left'} fill={'#4183c4'} width={14}></Chevron>
          <p>{'Back to the list'}</p>
        </StyledBackTo >
        <LoaderComp isBusy={isBusy} />
      </>
      }
    </StyledWrapper>

  )
}
export default ArticlePage
