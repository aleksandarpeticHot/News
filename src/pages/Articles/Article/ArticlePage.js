import React, { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import articleApi from '../../../services/common/news'
import notify from '../../../services/common/notify'
import { LanguageContext } from "../../../LanguageContext"
import HeaderComp from '../../../components/Header/HeaderComp'
import { StyledWrapper } from './style'

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
  }, [props])

  const getArticle = async () => {
    setData(prevData => ({ ...prevData, isBusy: true }))
    try {
      const responseArticles = await articleApi.getArticle(language.id, articleGroup, articleId)
      setData({
        ...data,
        isBusy: false,
        article: responseArticles.data.articles[index]
      })
    } catch (error) {
      notify(error.response.data.message, 'error')
      setData(prevData => ({ ...prevData, isBusy: false }))
    }
  }

  const handleBack = () => {
    props.history.goBack()
  }

  return <StyledWrapper>
    <HeaderComp style={{ marginLeft: 0 }} title={article.title} />
    {article.urlToImage && <img
      style={{
        maxWidth: '70vw',
        maxHeight: '50vh',
        margin: '20px auto'
      }}
      src={article.urlToImage}
    />
    }
    <p style={{ marginTop: '10px' }}>{article.content}</p>
    <a onClick={handleBack} style={{ display: 'flex', cursor: 'pointer' }}>
      <p style={{ color: 'white' }}>{'< Back to the list'}</p>
    </a >
  </StyledWrapper>
}
export default ArticlePage
