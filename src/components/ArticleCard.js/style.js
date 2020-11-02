import styled from "styled-components"

export const CardStyled = styled.div`
width: 290px;
margin: 15px;
min-height: 0;
background: #fff;
padding: 0;
border: none;
border-radius: .28571429rem;
border: 1px solid  rgba(34, 36, 38, 0.1);
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;  
  height: 100px;
  width: 150px;
}
p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 1em;
}
a{
  cursor: pointer;
  display: block;
  margin-left: 80%;
}
`
