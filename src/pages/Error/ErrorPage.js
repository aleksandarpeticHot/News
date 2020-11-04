import React from 'react'
import { ErrorWrapper, StyledDivError } from './style'

type ErrorPageProps = {
  history: Object
}

const ErrorPage = (props: ErrorPageProps) => {

  const handleGoBack = () => {
    props.history.goBack()
  }

  return (
    <ErrorWrapper>
      <h1>
        {'Error'}
        <StyledDivError>{'an error happend'}</StyledDivError>
      </h1>
      <div onClick={handleGoBack}>{'Go back'}</div>
    </ErrorWrapper>
  )

}
export default ErrorPage
