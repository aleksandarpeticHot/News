import React from 'react'
import { ErrorWrapper, StyledDivError } from './style'
import { LabelsToTranslate } from '../../Constants'

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
        {LabelsToTranslate.ERROR}
        <StyledDivError>{LabelsToTranslate.ERROR_DESCRIPTION}</StyledDivError>
      </h1>
      <div onClick={handleGoBack}>{LabelsToTranslate.GO_BACK}</div>
    </ErrorWrapper>
  )

}
export default ErrorPage
