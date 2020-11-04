import styled from 'styled-components'

export const StyledCarousel = styled.div`
width: 100%;
height: 100%;
box-sizing: border-box;
margin: 0;
padding: 0;
display: flex;
align-items: center;
position: relative;
overflow: hidden;
.slide{   
  margin: 10px 15px;
  transition: 0.3s;
  height: 100%;  
  min-height: 100px;
}

.goLeft{
  position: absolute;
  top: 45%;
  cursor: pointer;
  transform: translateY(-45%);
  left: 0;
  padding: inherit;
  &:hover {
    background-color: #3498db;
  }
  text-align: center;
}

.goRight{
  position: absolute;
  padding: inherit;
  cursor: pointer;
  text-align: center;
  top: 43%;  
  &:hover {
    background-color: #3498db;
  }
  transform: translateY(-45%);
  right: 0;
}
`
