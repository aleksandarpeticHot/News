import React from 'react'
import { ErrorWrapper, StyledDivError } from './style'

const ErrorPage = (props) => {

  const handleGoBack = () => {
    props.history.goBack()
  }

  return (
    <ErrorWrapper>
      <h1>
        {'Error'}
        <StyledDivError>{'an error happend'}</StyledDivError>
      </h1>
      <a onClick={handleGoBack}>{'Go back'}</a>
    </ErrorWrapper>
  )

}
export default ErrorPage
