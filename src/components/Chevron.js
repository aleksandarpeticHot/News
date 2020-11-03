import React from "react";
import { leftChevron, rightChevron } from '../Constants'

function Chevron(props) {
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
