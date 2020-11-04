import React from "react";
import { leftChevron, rightChevron } from '../Constants'

type ChevronProps = {
  className?: string,
  height?: string,
  width: number,
  fill?: string,
  position: string,
}

function Chevron(props: ChevronProps) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.position === 'left' ? leftChevron.viewbox : rightChevron.viewbox}
    >
      <path
        fill={props.fill}
        d={props.position === 'left' ? leftChevron.path : rightChevron.path}
      />
    </svg>
  );
}

export default Chevron;
