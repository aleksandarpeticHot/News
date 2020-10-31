import React, { useEffect, useState } from 'react'
import newsApi from '../../services/common/news'
import { Card, Popup, Segment, Image, Icon } from 'semantic-ui-react'
import { StyledNewsTitle, StyledCardContent } from './index.style'
import { RouteTypes } from '../../Constants'
import notify from '../../services/common/notify'

const ArticlesList = (props) => {

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
      const newsResponse = await newsApi.getTopNews('gb')
      setNewsData(prevData => ({
        ...prevData,
        articles: newsResponse.data.articles,
        isBusy: false
      }))
    } catch (error) {
      notify(error.response.data.message, 'error')
      setNewsData(prevData => ({ ...prevData, isBusy: false }))
    }
  }

  const renderArticles = () => {

    return <Card.Group itemsPerRow={props.itemsPerRow || null} centered>
      {articles.map((article, index) => {
        const location = RouteTypes.ARTICLE.replace(':id', index)
        return <Card key={index}>
          <Card.Content>
            <div>
              <p style={{ marginBottom: 0 }}>{'Title'}</p>
              <div style={{ marginBottom: '5px' }}>
                <Popup
                  trigger={<StyledNewsTitle>{article.title}</StyledNewsTitle>}
                  content={article.title} />
              </div>
            </div>
            {article.urlToImage && <Image
              size='small'
              src={article.urlToImage}
            />
            }
          </Card.Content>
          <Card.Content extra>
            <StyledCardContent onClick={() => props.history.push(location)} style={{ float: 'right', cursor: 'pointer' }}>
              {'More'}
              <Icon name='angle right' />
            </StyledCardContent>
          </Card.Content >
        </Card>
      })}
    </Card.Group>
  }


  return <Segment loading={isBusy}>
    {renderArticles()}
  </Segment>
}
export default ArticlesList
