import React, { Fragment, useEffect, useState } from 'react'
import { Accordion, Segment, Icon, Label } from 'semantic-ui-react'
import { categories } from '../../Constants'
import { StyledAccordionTittle } from './style'
import categorieApi from '../../services/common/categories'
import ArticlesList from '../Articles/ArticlesList'
import notify from '../../services/common/notify'
import entertainment from '../../mockups/entertainment.json'
import general from '../../mockups/general.json'
import health from '../../mockups/health.json'
import science from '../../mockups/science.json'
import sport from '../../mockups/sport.json'
import technology from '../../mockups/technology.json'


export const style = {
  background: '#e0e1e2 none',
  marginBottom: '10px'
}

export const activeStyle = {
  background: '#e0e1e2 none',
  background: 'none rgb(224, 225, 226)',
  borderBottom: 0,
  marginBottom: 0,
  borderRadius: '10px 10px 0 0'
}

export const pageSize = 5

const CategoriesList = (props) => {

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
      /*  const responseEntertainment = await categorieApi.getEntertainment(pageSize)
       const responseGeneral = await categorieApi.getGeneral(pageSize)
       const responseHealth = await categorieApi.getHealth(pageSize)
       const responseScience = await categorieApi.getScience(pageSize)
       const responseSport = await categorieApi.getSport(pageSize)
       const responseTechnology = await categorieApi.getTechnology(pageSize)
  */
      setArticlesData({
        ...articlesData,
        articles: {
          entertainment: entertainment.articles,
          general: general.articles,
          health: health.articles,
          science: science.articles,
          sport: sport.articles,
          technology: technology.articles

        },
        isBusy: false
      })
    } catch (error) {
      notify(error.response.data.message, 'error')
      setArticlesData(prevData => ({ ...prevData, isBusy: false }))
    }
  }

  const handleClick = (index) => {
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex)
  }

  const showTitleArticles = (category, index) => {
    return articles[category.id] && articles[category.id].length > 0 && activeIndex !== index
  }

  const renderCategories = () => {
    return <Accordion>
      {categories.map((category, index) => {
        const urlData = {
          articleGroup: 'category',
          articleId: category.id
        }
        return <Fragment key={index}>
          <StyledAccordionTittle
            key={index}
            style={activeIndex === index ? activeStyle : style}
            active={activeIndex === index}
            index={index}
          >
            <div>
              <div onClick={() => handleClick(index)} style={{ display: 'flex', padding: '10px', alignItems: 'baseline', color: 'black' }}>
                <h3 style={{ flexGrow: 1, marginBottom: 0 }}>{category.title}</h3>
                <Icon name='dropdown' size="big" />
              </div>
              {showTitleArticles(category, index) && <ArticlesList
                style={{ background: '#e0e1e2 none', boxShadow: '0 0 black', border: 0, cursor: 'default', marginTop: 0 }}
                styleCardsGroup={{ overflowX: 'hidden', flexWrap: 'nowrap' }}
                {...props}
                urlData={urlData}
                articles={articles[category.id]} />}
            </div>
          </StyledAccordionTittle>
          <Accordion.Content style={{ padding: 0 }} active={activeIndex === index}>
            {articles[category.id] && articles[category.id].length > 0 && <ArticlesList
              style={{ background: '#e0e1e2 none', borderRadius: '0 0 10px 10px', borderTopWidth: 0, marginBottom: '10px' }}
              {...props}
              urlData={urlData}
              articles={articles[category.id]} />}
          </Accordion.Content>
        </Fragment>
      })}
    </Accordion>
  }

  return <>
    <Label size="huge" style={{ margin: '1em 1em 0em 1em' }}>{'Top 5 news categories from GB'}</Label>
    <Segment loading={isBusy} style={{ margin: '10px', border: 0, boxShadow: '0 0 black' }}>
      {renderCategories()}
    </Segment>
  </>

}
export default CategoriesList
