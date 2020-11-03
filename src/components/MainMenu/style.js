import styled from 'styled-components'

export const StyledMenu = styled.div`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: #34495e;
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #3498db;
}
`

export const LanguageButton = styled.button`
display: block;
color: black;
text-align: center;
border-radius: 5px;
padding: 14px 16px;
text-decoration: none;
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
&:hover {
  background-color: ${props => props.disabled ? '' : '#4183c4'} ;
 }
background-color: ${props => props.active ? 'antiquewhite' : '-internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));'};
`
