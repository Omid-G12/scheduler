import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {

  const InterviewerClass = classNames({
    "interviewers__item": true,
    "interviewers__item--selected": props.selected === true,
  })

  return(
    <li className={InterviewerClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      {props.selected && props.name}
    </li>
  );
}