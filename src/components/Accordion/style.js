import styled from 'styled-components'

export const AccordionWrapper = styled.div`
display: flex;
flex-direction: column;

.accordion_title{
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  }

.accordion_icon{
  margin-left: auto;
  transition: transform 0.6s ease;
  }

.rotate {
  transform: rotate(90deg);
  }
}
`
export const Slyder = styled.div`
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
  margin: 0 15px;
  transition: 0.3s;
  height: 100%;  
  min-width: 290px;
  min-height: 100px;

}

.goLeft{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 5%;
}

.goRight{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 5%;
}
`
export const AccordionStyled = styled.div`
background: #eee;
padding: 10px;
border-radius: ${props => props.active ? '7px 7px 0px 0px' : '7px'};;
margin-bottom: ${props => props.active ? 0 : '10px'};
cursor: pointer;
color: #444;
display: flex;
aligne-items: center !important;
box-shadow: 2px 3px #444;
border: none;
outline: none;
transition: background-color 0.6s ease;
&:hover{
  background-color: #ccc;
}
`

export const AccordionContent = styled.div`
background-color: #eee;
box-shadow: 2px 3px #888888;
overflow: auto;
transition: max-height 0.3s ease;
margin-bottom: ${props => props.active ? '10px' : 0};
}
`
