import React from 'react'
import { CardStyled, StyledDescription } from './style'

export const defaultUrlImage = 'https://pdsohio.com/wp-content/uploads/2017/04/default-image.jpg'

const Card = (props) => {

  const { title, urlToImage, description } = props

  return <CardStyled style={props.style}>
    <StyledDescription>{title}</StyledDescription>
    <img src={urlToImage || defaultUrlImage}></img>
    <StyledDescription >{description}</StyledDescription>
    <a href={props.articlePage || ''}>{'More >'}</a>
  </CardStyled >
}
export default Card
