import React, { Fragment, useEffect, useState, useContext } from 'react'
import { categories } from '../../Constants'
import { CategoryWrapper, CategoryContent } from './style'
import categorieApi from '../../services/common/categories'
import ArticlesList from '../Articles/ArticlesList'
import notify from '../../services/common/notify'
import entertainment from '../../mockups/entertainment.json'
import general from '../../mockups/general.json'
import health from '../../mockups/health.json'
import science from '../../mockups/science.json'
import sport from '../../mockups/sport.json'
import technology from '../../mockups/technology.json'
import { LanguageContext } from '../../LanguageContext'
import Accordion from '../../components/Accordion/Accordion'
import HeaderComp from '../../components/Header/HeaderComp'
import LoaderComp from '../../components/Loader/LoaderComp'


export const pageSize = 5

const CategoriesList = (props) => {

  const { language } = useContext(LanguageContext)

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
      /*  const responseEntertainment = await categorieApi.getEntertainment(language.id, pageSize)
       const responseGeneral = await categorieApi.getGeneral(language.id, pageSize)
       const responseHealth = await categorieApi.getHealth(language.id, pageSize)
       const responseScience = await categorieApi.getScience(language.id, pageSize)
       const responseSport = await categorieApi.getSport(language.id, pageSize)
       const responseTechnology = await categorieApi.getTechnology(language.id, pageSize)
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
    console.log(index)
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex)
  }

  const renderCategories = () => {
    return <div>
      {categories.map((category, index) => {
        const urlData = {
          articleGroup: 'category',
          articleId: category.id
        }
        return <Accordion
          {...urlData}
          active={activeIndex === index}
          index={index}
          handleClick={handleClick}
          categoryTitle={category.title}
          articles={articles[category.id]}
          key={index}
        />
      })}
    </div>
  }

  return <CategoryWrapper>
    <HeaderComp title={`Top 5 news categories from ${language.country}:`} />
    <CategoryContent>
      <LoaderComp isBusy={isBusy} />
      {Object.keys(articles).length > 0 && renderCategories()}
    </CategoryContent>
  </CategoryWrapper>

}
export default CategoriesList
