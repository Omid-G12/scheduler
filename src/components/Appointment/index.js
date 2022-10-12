import React from "react";
import useVisualMode from "hooks/useVisualMode";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form"; 
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVE = "SAVE";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_DELETE = "ERROR_DELETE";
const ERROR_SAVE = "ERROR_SAVE";

export default function Appointment(props) {
  //console.log(props.interview)
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
          onEdit={() => {
            console.log("clicked on edit")
            transition(EDIT)
          }}
          onDelete={() => {
            console.log("clicked on delete")
            transition(CONFIRM)
            
          }}
        />
      )}
      {mode === CREATE && 
        <Form
          interviewers={props.interviewers}
          onSave={(name, interviewer) => {
            console.log("clicked on save")
            transition(SAVE)
            props.bookInterview(props.id, props.save(name, interviewer))
              .then (() => transition(SHOW))
              .catch(() => {
                transition(ERROR_SAVE, true)
              })
          }}
          onCancel={() => {
            console.log("clicked on cancel")
            back()
          }}

        />
      }
      {mode === SAVE && <Status message={'Saving'} />}
      {mode === DELETE && <Status message={'Deleting'} />}
      {mode === CONFIRM && <Confirm 
        message={"Are you sure you would like to delete?"}
        onCancel={ () => back()} 
        onConfirm={ () => {
          transition(DELETE)
          props.cancelInterview(props.id, props.interview)
            .then(() => {transition(EMPTY)})
            .catch(() => {transition(ERROR_DELETE, true)})
        }}
      />}
      {mode === EDIT && <Form
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        interviewers={props.interviewers}
          onSave={(name, interviewer) => {
            console.log("clicked on save")
            transition(SAVE)
            props.bookInterview(props.id, props.save(name, interviewer))
              .then (() => transition(SHOW))
              .catch(() => transition(ERROR_SAVE, true))
              
          }}
          onCancel={() => {
            console.log("clicked on cancel")
            transition(SHOW)
          }}
      />}
      {mode === ERROR_DELETE && <Error 
        message={"Can not delete!"}
        onClose={() => back()}
      />}
      {mode === ERROR_SAVE && <Error
        message={"Can not save!"}
        onClose={() => back()}
      />}

    </article>
    

  );
}