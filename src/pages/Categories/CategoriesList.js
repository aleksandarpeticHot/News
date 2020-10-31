import React, { useEffect, useState } from 'react'
import { Accordion, Segment, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { categories } from '../../Constants'
import { StyledAccordionTittle } from './style'
import categorieApi from '../../services/common/categories'
import ArticlesList from '../Articles/ArticlesList'

export const style = {
  background: '#F08080'
}

export const pageSize = 5

const CategoriesList = () => {

  const [articlesData, setArticlesData] = useState({
    isBusy: false,
    articles: []
  })

  const [activeIndex, setActiveIndex] = useState(-1)

  const { articles, isBusy } = articlesData

  useEffect(() => {
    if (activeIndex >= 0) {
      fetchArticlesInCategorie(categories[activeIndex].id)
    }
  }, [activeIndex])

  const fetchArticlesInCategorie = async (id) => {
    setArticlesData(prevData => ({ ...prevData, isBusy: true }))
    try {
      const response = await categorieApi.getCategorie(id, pageSize)
      setArticlesData({
        ...articlesData,
        articles: response.data.articles,
        isBusy: false
      })
    } catch (error) {
      setArticlesData(prevData => ({ ...prevData, isBusy: false }))
    }
  }

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex)
  }

  const renderCategories = () => {
    return <Accordion>
      {categories.map((category, index) => {
        return < >
          <StyledAccordionTittle
            key={index}
            style={activeIndex === index ? style : null}
            key={index}
            active={activeIndex === index}
            index={index}
            onClick={handleClick}
          >
            <div style={{ display: 'flex', padding: '10px', alignItems: 'baseline', color: activeIndex === index ? 'white' : 'black' }}>
              <p style={{ flexGrow: 1, marginBottom: 0 }}>{category.title}</p>
              <Icon name='dropdown' size="big" />
            </div>
          </StyledAccordionTittle>
          <Accordion.Content active={activeIndex === index}>
            <Dimmer inverted active={isBusy}>
              <Loader />
            </Dimmer>
            {articles.length > 0 && <ArticlesList articles={articles} />}
          </Accordion.Content>
        </>
      })}
    </Accordion>
  }

  return <>
    <h3 style={{ margin: '10px', marginTop: '30px' }}>{'Top 5 news categories from GB'}</h3>
    <Segment style={{ margin: '10px' }}>
      {renderCategories()}
    </Segment>
  </>

}
export default CategoriesList
