import React from 'react'
import { CardStyled } from './style'

const Card = (props) => {

  const { title, urlToImage } = props

  return <CardStyled>
    <p>{title}</p>
    <img src={urlToImage}></img>
    <a href={props.articlePage || ''}>{'More >'}</a>
  </CardStyled >
}
export default Card
