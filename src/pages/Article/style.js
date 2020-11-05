import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
padding: 10px;
min-height: calc(100vh - 67px)
`
export const StyledImage = styled.img`
max-width: 70vw;
max-height: 50vh;
margin: 20px auto;
`
export const StyledContent = styled.p`
margin-top: 10px;
`
export const StyledBackTo = styled(Link)`
display: flex;
cursor: pointer;
`
