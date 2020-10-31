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
    articles: {}
  })

  const [activeIndex, setActiveIndex] = useState(-1)

  const { articles, isBusy } = articlesData

  useEffect(() => {
    fetchArticlesInCategorie()
  }, [])

  const fetchArticlesInCategorie = async () => {
    setArticlesData(prevData => ({ ...prevData, isBusy: true }))
    try {
      const responseEntertainment = await categorieApi.getEntertainment(pageSize)
      const responseGeneral = await categorieApi.getGeneral(pageSize)
      const responseHealth = await categorieApi.getHealth(pageSize)
      const responseScience = await categorieApi.getScience(pageSize)
      const responseSport = await categorieApi.getSport(pageSize)
      const responseTechnology = await categorieApi.getTechnology(pageSize)

      setArticlesData({
        ...articlesData,
        articles: {
          entertainment: responseEntertainment.data.articles,
          general: responseGeneral.data.articles,
          health: responseHealth.data.articles,
          science: responseScience.data.articles,
          sport: responseSport.data.articles,
          technology: responseTechnology.data.articles

        },
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
            <div>
              <div style={{ display: 'flex', padding: '10px', alignItems: 'baseline', color: activeIndex === index ? 'white' : 'black' }}>
                <p style={{ flexGrow: 1, marginBottom: 0 }}>{category.title}</p>
                <Icon name='dropdown' size="big" />
              </div>
              {articles[category.id] && articles[category.id].length > 0 && activeIndex !== index && <ArticlesList itemsPerRow={pageSize} articles={articles[category.id]} />}
            </div>
          </StyledAccordionTittle>
          <Accordion.Content active={activeIndex === index}>
            <Dimmer inverted active={isBusy}>
              <Loader />
            </Dimmer>
            {articles[category.id] && articles[category.id].length > 0 && <ArticlesList articles={articles[category.id]} />}
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
