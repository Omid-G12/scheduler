import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {

  const InterviewerClass = classNames({
    "interviewers__item": true,
    "interviewers__item--selected": props.selected === true,
  })
  
  return(
    <li className={InterviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}