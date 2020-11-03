import React from 'react'
import { StyledHeader } from './style'

const HeaderComp = (props) => {
  return <StyledHeader style={props.style}>{props.title}</StyledHeader>
}
export default HeaderComp
