import React from "react";
import { AccordionWrapper, AccordionContent, AccordionStyled } from './style';
import Chevron from '../Chevron'

const Accordion = (props) => {

  const { index, active, handleClick, categoryTitle } = props


  const handleClickAccordion = () => {
    handleClick(index)
  }

  return (
    <AccordionWrapper>
      <AccordionStyled active={active} onClick={handleClickAccordion}>
        <p className="accordion_title">{categoryTitle}</p>
        <Chevron className={`accordion_icon ${active ? 'rotate' : ''}`} width={25} fill={"#777"} />
      </AccordionStyled>
      <AccordionContent
        active={active}
        style={{ display: active ? 'initial' : 'none' }}
      >
        {props.children}
      </AccordionContent>
    </AccordionWrapper>
  )
}
export default Accordion;
