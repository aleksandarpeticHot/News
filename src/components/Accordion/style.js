import styled from 'styled-components'

export const AccordionWrapper = styled.div`
display: flex;
flex-direction: column;

.accordion_title{
  font-weight: 600;
  text-align: left;
  flex-grow: 1;
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
border-radius: 0 0 7px 7px;
box-shadow: 2px 3px #444;
overflow: auto;
transition: max-height 0.3s ease;
margin-bottom: ${props => props.active ? '10px' : 0};
}
`
