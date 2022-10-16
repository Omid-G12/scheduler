import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss"

export default function DayListItem(props) {
  const dayClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": props.selected === true,
    "day-list__item--full": props.spots === 0,
  })
  
  const formatSpots = (spots) => {
    if (spots === 0) {
      return "no spots remaining";
    } else if (spots === 1) {
      return "1 spot remaining";
    } else {
      return `${spots} spots remaining`;
    }

  }

  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}