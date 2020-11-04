import React from 'react'
import { StyledLoader } from './style'

type LoaderCompProps = {
  isBusy: boolean
}

const LoaderComp = (props: LoaderCompProps) => {

  return <StyledLoader style={{ display: props.isBusy ? 'block' : 'none' }} />
}
export default LoaderComp
