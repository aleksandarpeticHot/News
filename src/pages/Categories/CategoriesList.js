import React, { useEffect, useState, useContext } from 'react'
import { LanguageContext } from '../../LanguageContext'

/* Components */
import Accordion from '../../components/Accordion/Accordion'
import HeaderComp from '../../components/Header/HeaderComp'
import CarouselComp from '../../components/Carousel/CarouselComp'
import LoaderComp from '../../components/Loader/LoaderComp'
import Layout from '../Layout'

/* Styles */
import { CategoryWrapper, CategoryContent } from './style'

/* Services */
import { getAllCategories } from '../../services/common/categories'
import notify from '../../services/common/notify'

/* Constants */
import { categories, LabelsToTranslate, ArticleGroups } from '../../Constants'

export const pageSize = 5

const CategoriesList = () => {

  const { language } = useContext(LanguageContext)

  const [articlesData, setArticlesData] = useState({
    isBusy: false,
    articles: {},
    activeIndex: -1
  })

  const { articles, isBusy, activeIndex } = articlesData

  useEffect(() => {
    fetchArticlesInCategorie()
  }, [language])

  const fetchArticlesInCategorie = async () => {
    setArticlesData(prevData => ({ ...prevData, isBusy: true }))
    try {
      const articles = {}
      const response = await getAllCategories(language.id, pageSize)

      categories.forEach((category, index) => {
        articles[category.id] = response[index].data.articles
      })

      setArticlesData({
        ...articlesData,
        articles,
        isBusy: false,
        activeIndex: -1
      })

    } catch (error) {
      if (error.response) {
        notify(error.response.data.message, 'error')
      }
      else {
        notify('General error.', 'error')
      }
      setArticlesData(prevData => ({ ...prevData, isBusy: false }))
    }
  }

  const handleClick = (index) => {
    const newIndex = activeIndex === index ? -1 : index
    setArticlesData({ ...articlesData, activeIndex: newIndex })
  }

  const renderCategories = () => {
    return (
      <div>
        {categories.map((category, index) => {
          const urlData = {
            articleGroup: ArticleGroups.category,
            articleId: category.id
          }
          return (
            <Accordion
              active={activeIndex === index}
              index={index}
              handleClick={handleClick}
              categoryTitle={category.title}
              key={index}
            >
              <CarouselComp
                slides={articles[category.id]}
                {...urlData}
              />
            </Accordion>
          )
        })}
      </div>
    )
  }

  return (
    <Layout>
      <LoaderComp isBusy={isBusy} />
      <CategoryWrapper>
        <CategoryContent>
          <HeaderComp title={`${LabelsToTranslate.CATEGORIE_HEADER} ${language.country}:`} />
          {Object.keys(articles).length > 0 && renderCategories()}
        </CategoryContent>
      </CategoryWrapper>
    </Layout>
  )

}
export default CategoriesList
