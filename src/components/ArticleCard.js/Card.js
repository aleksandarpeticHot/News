import React from 'react'
import { CardStyled } from './style'

export const defaultUrlImage = 'https://pdsohio.com/wp-content/uploads/2017/04/default-image.jpg'

const Card = (props) => {

  const { title, urlToImage } = props

  return <CardStyled>
    <p>{title}</p>
    <img src={urlToImage || defaultUrlImage}></img>
    <a href={props.articlePage || ''}>{'More >'}</a>
  </CardStyled >
}
export default Card
