import React from 'react'
import { StyledHeader } from './style'

type HeaderCompProps = {
  style?: Object,
  title: string
}

const HeaderComp = (props: HeaderCompProps) => {
  return <StyledHeader style={props.style}>{props.title}</StyledHeader>
}
export default HeaderComp
