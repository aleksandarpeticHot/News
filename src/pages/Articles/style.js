import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

export const StyledNewsTitle = styled.div`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
color: black;
`
export const StyledCardContent = styled.a`
color: #4183c4 !important;
`
export const StyledArrow = styled(Icon)`
position: absolute;
z-index: 10;
top: 40%;
cursor: pointer;
${props => props.right ? 'right: 0' : ''}
`
