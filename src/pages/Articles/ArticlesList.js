import React, { useContext, useEffect, useState } from 'react'
import newsApi from '../../services/common/news'
import { RouteTypes } from '../../Constants'
import notify from '../../services/common/notify'
import { LanguageContext } from '../../LanguageContext'
import Card from '../../components/ArticleCard.js/Card'
import HeaderComp from '../../components/Header/HeaderComp'
import LoaderComp from '../../components/Loader/LoaderComp'
import { StyledArticleGroup } from './style'


const ArticlesList = (props) => {

  const { language } = useContext(LanguageContext)

  const [newsData, setNewsData] = useState({
    isBusy: false,
    articles: props.articles || []
  })

  const { isBusy, articles } = newsData

  useEffect(() => {
    if (!props.articles) {
      fetchNews()
    }
  }, [])

  const fetchNews = async () => {
    setNewsData(prevData => ({ ...prevData, isBusy: true }))
    try {
      const newsResponse = await newsApi.getTopNews(props.language.id)
      setNewsData(prevData => ({
        ...prevData,
        articles: newsResponse.data.articles,
        isBusy: false
      }))
    } catch (error) {
      notify(error.response.data.message, 'error')
      setNewsData(prevData => ({ ...prevData, isBusy: true }))
    }
  }

  const composeUrl = (urlData, index) => {
    const { articleGroup, articleId } = urlData
    return RouteTypes.ARTICLE.replace(':articleGroup', articleGroup).replace(':articleId', articleId).replace(':index', index)
  }

  const renderArticles = () => {
    return <StyledArticleGroup style={props.style}>
      {articles.map((article, index) => {
        const urlData = props.urlData || { articleGroup: 'country', articleId: 'gb', index: index }
        const url = composeUrl(urlData, index)
        return <Card key={index} articlePage={url} {...article}></Card>
      })}
    </StyledArticleGroup>
  }

  return (
    <div>
      {!props.hideTitle && <HeaderComp style={{ display: 'flex', justifyContent: 'center' }} title={`Top 5 news from ${language.country}:`} />}
      <LoaderComp isBusy={isBusy} />
      {articles.length > 0 && renderArticles()}
    </div>
  )
}
export default ArticlesList
