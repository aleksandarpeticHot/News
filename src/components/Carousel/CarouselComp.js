import React, { useEffect, useState, useRef } from 'react'

/* Components */
import Card from '../ArticleCard.js/Card'
import Chevron from '../Chevron'

/* Styles */
import { StyledCarousel } from './style'

/* Constants */
import { RouteTypes, DEFAULT_ARTICLE_CARD_WIDTH } from '../../Constants'


export const articleMarginAnPadding = 52
export const defaultCardWidth = DEFAULT_ARTICLE_CARD_WIDTH + articleMarginAnPadding

type CarouselCompProps = {
  slides: Array<Object>,
  articleGroup: string,
  articleId: string
}

const CarouselComp = (props: CarouselCompProps) => {

  const carouselRef = useRef(null);

  const [cardData, setCardData] = useState({
    slideWidth: 0,
    disableSlider: false,
    slideFit: 0
  })

  const { slides } = props

  const [carouselTranslateX, setCarouselTranslateX] = useState(0)

  const { slideWidth, disableSlider, slideFit } = cardData

  const calculateCardsData = () => {
    const currentAvailableSpace = carouselRef.current.offsetWidth
    const slideFit = Math.round(currentAvailableSpace / defaultCardWidth)
    const disableSlider = slideFit >= slides.length
    const slideWidth = Math.floor((currentAvailableSpace / slideFit) - articleMarginAnPadding)
    setCardData({
      ...cardData,
      slideWidth,
      slideFit,
      disableSlider
    })
    setCarouselTranslateX(0)
  }

  const handleResize = () => {
    calculateCardsData()
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    calculateCardsData()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [props])

  const composeUrl = (index) => {
    const { articleGroup, articleId } = props
    return RouteTypes.ARTICLE.replace(':articleGroup', articleGroup).replace(':articleId', articleId).replace(':index', index)
  }

  const slideToLeft = () => {
    const widthSlide = slideWidth + articleMarginAnPadding
    const availableSpace = widthSlide * (slides.length - slideFit)
    Math.round(carouselTranslateX) === 0 ? setCarouselTranslateX(-availableSpace) : setCarouselTranslateX(carouselTranslateX + widthSlide)
  }

  const slideToRight = () => {
    const widthSlide = slideWidth + articleMarginAnPadding
    const availableSpace = widthSlide * (slides.length - slideFit)
    carouselTranslateX === -Math.round(availableSpace) ? setCarouselTranslateX(0) : setCarouselTranslateX(carouselTranslateX - widthSlide)
  }

  return (
    <StyledCarousel ref={carouselRef}>
      {slides.map((article, index) => {
        const url = composeUrl(index)
        return <div style={{ transform: `translateX(${carouselTranslateX}px)` }} key={index} className="slide">
          <Card
            style={{ width: `${slideWidth}px`, margin: 0, marginBottom: '10px' }}
            articlePage={url}
            {...article}
          />
        </div>
      })}
      {!disableSlider && <>
        <p onClick={slideToLeft} className="leftChevron">
          <Chevron position={'left'} width={30} />
        </p>
        <p onClick={slideToRight} className="rightChevron">
          <Chevron position={'right'} width={30}></Chevron>
        </p>
      </>
      }
    </StyledCarousel>
  )
}
export default CarouselComp
