import React from 'react'
import { StyledLoader, StyledWrapper } from './style'

type LoaderCompProps = {
  isBusy: boolean
}

const LoaderComp = (props: LoaderCompProps) => {

  return (
    <StyledWrapper style={{ display: props.isBusy ? 'block' : 'none' }}>
      <StyledLoader />
    </StyledWrapper>
  )
}
export default LoaderComp
