import React from 'react'
import { StyledArticleGroup } from './style'
import Card from '../../components/ArticleCard.js/Card'
import { RouteTypes } from '../../Constants'

type SearchListProps = {
  articles: Array<Object>,
  urlData: Object
}

const SearchList = (props: SearchListProps) => {

  const { articles, urlData } = props

  const composeUrl = (urlData, index) => {
    const { articleGroup, articleId } = urlData
    return RouteTypes.ARTICLE.replace(':articleGroup', articleGroup).replace(':articleId', articleId).replace(':index', index)
  }

  return (
    <StyledArticleGroup>
      {articles.map((article, index) => {
        const urlData = props.urlData
        const url = composeUrl(urlData, index)
        return (
          <Card
            key={index}
            articlePage={url}
            {...article} />
        )
      })}
    </StyledArticleGroup>
  )
}
export default SearchList
