import React, { useState, useRef, useEffect } from "react";
import { AccordionWrapper, Slyder, AccordionContent, AccordionStyled } from './style';
import { RouteTypes } from '../../Constants'
import Card from '../ArticleCard.js/Card'

export const defaultCardWidth = 362
export const articleMarginAnPadding = 52

const Accordion = (props) => {

  const accordionRef = useRef(null);

  const [cardData, setCardData] = useState({
    cardWidth: 0,
    disableSlider: false,
    cardsFit: 0
  })

  const { cardWidth, disableSlider, cardsFit } = cardData

  const { articles, index, active, handleClick, categoryTitle } = props

  const [x, setX] = useState(0)

  const handleResize = () => {
    const currentAvailableSpace = accordionRef.current.offsetWidth
    const cardsFit = Math.round(currentAvailableSpace / defaultCardWidth)
    const disableSlider = cardsFit >= articles.length
    const cardWidth = Math.floor((currentAvailableSpace / cardsFit) - articleMarginAnPadding)
    setCardData({
      ...cardData,
      cardWidth,
      cardsFit,
      disableSlider
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    const currentAvailableSpace = accordionRef.current.offsetWidth
    const cardsFit = Math.round(currentAvailableSpace / defaultCardWidth)
    const disableSlider = cardsFit >= articles.length
    const cardWidth = Math.floor((currentAvailableSpace / cardsFit) - articleMarginAnPadding)
    setCardData({
      ...cardData,
      cardWidth,
      cardsFit,
      disableSlider
    })
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [props])

  const goLeft = () => {
    const widthSlide = cardWidth + 52
    const availableSpace = widthSlide * (articles.length - cardsFit)
    Math.round(x) === 0 ? setX(-availableSpace) : setX(x + widthSlide)
  }

  const goRight = () => {
    const widthSlide = cardWidth + 52
    const availableSpace = widthSlide * (articles.length - cardsFit)
    x === -Math.round(availableSpace) ? setX(0) : setX(x - widthSlide)
  }

  const handleClickAccordion = () => {
    handleClick(index)
  }

  const composeUrl = (index) => {
    const { articleGroup, articleId } = props
    return RouteTypes.ARTICLE.replace(':articleGroup', articleGroup).replace(':articleId', articleId).replace(':index', index)
  }

  return (
    <AccordionWrapper>
      <AccordionStyled active={active} onClick={handleClickAccordion} ref={accordionRef} className="accordion">
        <p className="accordion_title">{categoryTitle}</p>
        <p className={`accordion_icon ${active ? 'rotate' : ''}`}>{'>'}</p>
      </AccordionStyled>
      <AccordionContent
        active={active}
        style={{ display: active ? 'initial' : 'none' }}
      >
        <Slyder>
          {props.articles.map((article, index) => {
            const url = composeUrl(index)
            return <div style={{ transform: `translateX(${x}px)` }} key={index} className="slide">
              <Card style={{ width: `${cardWidth}px`, margin: 0, marginBottom: '10px', }} articlePage={url} {...article}></Card>
            </div>
          })}
          {!disableSlider && <>
            <button onClick={goLeft} className="goLeft">{'<'}</button>
            <button onClick={goRight} className="goRight">{'>'}</button>
          </>
          }
        </Slyder>
      </AccordionContent>
    </AccordionWrapper>
  )
}
export default Accordion;
