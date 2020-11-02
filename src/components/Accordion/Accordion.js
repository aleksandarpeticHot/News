import React, { useState, useRef } from "react";
import { AccordionWrapper, Slyder } from './style';
import { RouteTypes } from '../../Constants'
import Card from '../ArticleCard.js/Card'

export const widthOfSingleArticle = 290

const Accordion = (props) => {

  const accordionRef = useRef(null);

  const [x, setX] = useState(0)

  const goLeft = () => {
    const currentAvailableSpace = accordionRef.current.offsetWidth
    const numberOfCards = props.articles.length - 1
    const numOfCardsFit = accordionRef.current.offsetWidth / widthOfSingleArticle
    const positionOfLastCarad = currentAvailableSpace * ((numberOfCards) / (numOfCardsFit)) - 2 * widthOfSingleArticle
    Math.round(x) === 0 ? setX(-positionOfLastCarad) : setX(x + widthOfSingleArticle)
  }

  const goRight = () => {
    const currentAvailableSpace = accordionRef.current.offsetWidth
    const numberOfCards = props.articles.length - 1
    const numOfCardsFit = accordionRef.current.offsetWidth / widthOfSingleArticle
    const positionOfLastCarad = currentAvailableSpace * ((numberOfCards) / (numOfCardsFit)) - 2 * widthOfSingleArticle
    x === -Math.round(positionOfLastCarad) ? setX(0) : setX(x - widthOfSingleArticle)
  }

  const handleClickAccordion = () => {
    props.handleClick(props.index)
  }

  const composeUrl = (index) => {
    const { articleGroup, articleId } = props
    return RouteTypes.ARTICLE.replace(':articleGroup', articleGroup).replace(':articleId', articleId).replace(':index', index)
  }

  return (
    <AccordionWrapper>
      <button onClick={handleClickAccordion} ref={accordionRef} className="accordion">
        <p className="accordion_title">{props.categoryTitle}</p>
        <p className={`accordion_icon ${props.active ? 'rotate' : ''}`}>{'>'}</p>
      </button>
      <div
        style={{ display: props.active ? 'initial' : 'none' }}
        className="accordion_content"
      >
        <div style={{ padding: '14px' }} className="accordion_content_items">
          <Slyder>
            {props.articles.map((article, index) => {
              const url = composeUrl(index)
              return <div style={{ transform: `translateX(${x}px)` }} key={index} className="slide">
                <Card articlePage={url} {...article}></Card>
              </div>
            })}
            <button onClick={goLeft} className="goLeft">{'<'}</button>
            <button onClick={goRight} className="goRight">{'>'}</button>
          </Slyder>
        </div>
      </div>
    </AccordionWrapper>
  )
}
export default Accordion;
