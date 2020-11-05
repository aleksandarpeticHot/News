import React from "react";
import { AccordionWrapper, AccordionContent, AccordionStyled, AccordionTitle } from './style';
import Chevron from '../Chevron'

type AccordionProps = {
  index: number,
  active: boolean,
  handleClick: (index: number) => void,
  categoryTitle: string,
  children: *
}

const Accordion = (props: AccordionProps) => {

  const { index, active, handleClick, categoryTitle } = props


  const handleClickAccordion = () => {
    handleClick(index)
  }

  return (
    <AccordionWrapper>
      <AccordionStyled active={active} onClick={handleClickAccordion}>
        <AccordionTitle>{categoryTitle}</AccordionTitle>
        <Chevron className={`accordion-icon ${active ? 'rotate' : ''}`} width={25} fill={"#777"} />
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
