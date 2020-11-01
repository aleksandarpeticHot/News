import React, { useState, useEffect, useContext } from "react"
import { Header, Icon, Image, Segment } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import articleApi from '../../../services/common/news'
import notify from '../../../services/common/notify'
import { LanguageContext } from "../../../LanguageContext"

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

  const displayContent = () => {
    const { content } = article
    if (content && content.length > 260) {
      return content.substring(0, 260)
    }
    return content
  }

  const handleBack = () => {
    props.history.goBack()
  }

  return <Segment loading={isBusy}>
    <Header style={{ margin: '10px 0' }}>{article.title}</Header>
    {article.urlToImage && <Image
      style={{
        maxWidth: '70vw',
        maxHeight: '50vh',
        margin: '20px auto'
      }}
      src={article.urlToImage}
    />
    }
    <p style={{ marginTop: '10px' }}>{displayContent()}</p>
    <a onClick={handleBack} style={{ display: 'flex', cursor: 'pointer' }}>
      <Icon name="angle left"></Icon>
      <p>{'Back to the list'}</p>
    </a >
  </Segment>
}
export default ArticlePage
