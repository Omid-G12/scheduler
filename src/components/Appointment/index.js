import React from "react";
import useVisualMode from "hooks/useVisualMode";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return(
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => {
        console.log("Clicked onAdd")
        transition(CREATE)
        }} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => console.log("clickedo on edit")}
          onDelete={() => console.log("clicked on delete")}
        />
      )}
      {mode === CREATE && 
        <Form
          interviewers={props.interviewers}
          onSave={() => console.log("clicked on save")}
          onCancel={() => {
            console.log("clicked on cancel")
            back()
          }}

        />
      }

    </article>
    

  );
}