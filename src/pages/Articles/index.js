import React, { useEffect, useState } from 'react'
import newsApi from '../../services/common/news'
import { Card, Popup, Segment, Image, Icon } from 'semantic-ui-react'
import { StyledNewsTitle, StyledCardContent } from './index.style'

const TopNews = () => {

  const [newsData, setNewsData] = useState({
    isBusy: false,
    articles: []
  })

  const { isBusy, articles } = newsData

  useEffect(() => {
    fetchNews()
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
      console.log(error)
    }
  }

  const renderNews = () => {
    return <Card.Group >
      {articles.map((article, index) => {
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
            <StyledCardContent target="_blank" rel="noopener noreferrer" href={article.url} style={{ float: 'right', cursor: 'pointer' }}>
              {'More'}
              <Icon name='angle right' />
            </StyledCardContent>
          </Card.Content >
        </Card>
      })}
    </Card.Group>
  }

  return <Segment loading={isBusy}>
    {renderNews()}
  </Segment>
}
export default TopNews
