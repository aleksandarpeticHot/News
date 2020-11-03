import styled from "styled-components"

export const CardStyled = styled.div`
width: 310px;
margin: 15px;
min-height: 0;
margin-bottom: 10px;
background: #fff;
padding: 10px;
border: none;
border-radius: .28571429rem;
box-shadow: 2px 3px #888888;
border: 1px solid  rgba(34, 36, 38, 0.1);
 &:hover {
  background-color: antiquewhite;
 }
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;  
  height: 100px;
  width: 150px;
}
p .title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 1em;
}
a{
  cursor: pointer;
  display: block;
  padding: 10px;
  text-align: end;
}
`
export const StyledDescription = styled.p`
text-overflow: ellipsis;
white-space: normal;
font-size: medium;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
min-height: 36px;
max-height: 36px;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
`
