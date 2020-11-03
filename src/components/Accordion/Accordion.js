import React, { useState, useRef, useEffect } from "react";
import { AccordionWrapper, Slyder, AccordionContent, AccordionStyled } from './style';
import { RouteTypes } from '../../Constants'
import Card from '../ArticleCard.js/Card'

export const widthOfSingleArticle = 362
export const articleMarginAnPadding = 52

const Accordion = (props) => {

  const accordionRef = useRef(null);

  const [disableSlider, setDisableSlider] = useState(false)

  const [cardWidth, setCardWidth] = useState(0)

  const { articles, index, active, handleClick, categoryTitle } = props

  const handleResize = () => {
    const currentAvailableSpace = accordionRef.current.offsetWidth
    const cardsFit = Math.round(currentAvailableSpace / widthOfSingleArticle)
    const disableSlider = Math.round(currentAvailableSpace / articles.length) > widthOfSingleArticle
    setCardWidth(Math.floor((currentAvailableSpace / cardsFit) - articleMarginAnPadding))
    setDisableSlider(disableSlider)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    const currentAvailableSpace = accordionRef.current.offsetWidth
    const cardsFit = Math.round(currentAvailableSpace / widthOfSingleArticle)
    const disableSlider = Math.round(currentAvailableSpace / articles.length) > widthOfSingleArticle
    setCardWidth(Math.floor((currentAvailableSpace / cardsFit) - articleMarginAnPadding))
    setDisableSlider(disableSlider)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [props])

  const [x, setX] = useState(0)

  const goLeft = () => {
    const widthSlide = cardWidth + 52
    const availableSpace = widthSlide * (articles.length - 3)
    Math.round(x) === 0 ? setX(-availableSpace) : setX(x + widthSlide)
  }

  const goRight = () => {
    const widthSlide = cardWidth + 52
    const availableSpace = widthSlide * (articles.length - 3)
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
