import { Input, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

export const StyledInput = styled(Input)`
margin-top: 30px;
min-width: 50vw;
margin-left: 20%;
`
export const StyledSegment = styled(Segment)`
min-height: 90vh;
margin: 10px;
.wrapper{
  height: 15vh;
  display: inline-block;
}
.noResultsMessage{
  margin-left: 20%;
}
`
