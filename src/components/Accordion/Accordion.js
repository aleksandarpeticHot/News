import React, { useState, useRef, useEffect } from "react";
import { AccordionWrapper, Slyder, AccordionContent, AccordionStyled } from './style';
import { RouteTypes } from '../../Constants'
import Card from '../ArticleCard.js/Card'

export const widthOfSingleArticle = 305

const Accordion = (props) => {

  const accordionRef = useRef(null);

  const [disableSlider, setDisableSlider] = useState(false)

  const { articles, index, active, handleClick, categoryTitle } = props

  useEffect(() => {
    const currentAvailableSpace = accordionRef.current.offsetWidth
    const disableSlider = Math.round(currentAvailableSpace / articles.length) > widthOfSingleArticle
    setDisableSlider(disableSlider)
  }, [props])

  const [x, setX] = useState(0)

  const goLeft = () => {
    const currentAvailableSpace = accordionRef.current.offsetWidth
    const numberOfCards = articles.length - 1
    const numOfCardsFit = currentAvailableSpace / widthOfSingleArticle
    const positionOfLastCarad = currentAvailableSpace * ((numberOfCards) / (numOfCardsFit)) - 2 * widthOfSingleArticle
    Math.round(x) === 0 ? setX(-positionOfLastCarad) : setX(x + widthOfSingleArticle)
  }

  const goRight = () => {
    const currentAvailableSpace = accordionRef.current.offsetWidth
    const numberOfCards = articles.length - 1
    const numOfCardsFit = accordionRef.current.offsetWidth / widthOfSingleArticle
    const positionOfLastCarad = currentAvailableSpace * ((numberOfCards) / (numOfCardsFit)) - 2 * widthOfSingleArticle
    x === -Math.round(positionOfLastCarad) ? setX(0) : setX(x - widthOfSingleArticle)
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
              <Card articlePage={url} {...article}></Card>
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
