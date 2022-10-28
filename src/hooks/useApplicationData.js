import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = (day) => setState({ ...state, day });

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    return interview;
  }

  // Takes in state and appointments, returns the number of spots availble
  // Based on number of appointments booked
  const updateSpots = function(state, appointments) {

    let updatedDays   = [...state.days]
    const arr = [];
    
  
    // eslint-disable-next-line array-callback-return
    updatedDays.map((day) => {
      
      let spots = day.appointments.length;
      for (let appt of day.appointments) {
        if (appointments[`${appt}`].interview) {
          spots -= 1;
        }
      }
      let days = {...day, spots}
      day = {...days}
      arr.push(day);
    })
    
    updatedDays = [...arr]
    return updatedDays
  }; 

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };


    return axios.put(`/api/appointments/${id}`, {interview})
      .then(() => {
        const days = updateSpots(state, appointments)
        setState({...state, appointments, days }) 
      })
      
  };

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`, {interview})
      .then(() => {
        const days = updateSpots(state, appointments)
        setState({...state, appointments, days})
      })
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, [])

  return {
    state,
    setDay,
    save,
    bookInterview,
    cancelInterview
  }
}