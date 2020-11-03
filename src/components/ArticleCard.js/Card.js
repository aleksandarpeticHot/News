import React from 'react'
import { CardStyled, StyledDescription } from './style'
import Chevron from '../Chevron'

export const defaultUrlImage = 'https://pdsohio.com/wp-content/uploads/2017/04/default-image.jpg'

const Card = (props) => {

  const { title, urlToImage, description } = props

  return (
    <CardStyled style={props.style}>
      <StyledDescription>{title}</StyledDescription>
      <img src={urlToImage || defaultUrlImage} />
      <StyledDescription >{description}</StyledDescription>
      <a href={props.articlePage || ''} style={{ display: 'flex' }}>
        <p style={{ margin: '5px 0px 5px 5px' }}>{'More'}</p>
        <Chevron position={'right'} fill={'#4183c4'} width={10}></Chevron>
      </a>
    </CardStyled>
  );
}
export default Card
