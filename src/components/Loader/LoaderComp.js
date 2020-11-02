import React from 'react'
import { StyledLoader } from './style'


const LoaderComp = (props) => {

  return <StyledLoader style={{ display: props.isBusy ? 'block' : 'none' }} />
}
export default LoaderComp
