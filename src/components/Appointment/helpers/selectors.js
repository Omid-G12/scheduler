export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  let appointments = [];
  let arr = [];
  for (let d of state.days) {
    if (d.name === day) {
      arr = d.appointments;
    }
  }
  for (let ar of arr) {
    appointments.push(state.appointments[ar.toString()]);
  }
  return appointments;
}

export function getInterviewersForDay(state, day) {
  //... returns an array of interviewers for that day
  let interviewers = [];
  let arr = [];
  for (let d of state.days) {
    if (d.name === day) {
      arr = d.interviewers;
    }
  }
  for (let ar of arr) {
    interviewers.push(state.interviewers[ar.toString()]);
  }
  return interviewers;
}

export function getInterview(state, interview) {
  for (let int in state.interviewers) {
    if (interview && int.id === interview.id) {
      
      let result = {
        "student": interview.student,
        "interviewer": state.interviewers[int]
      };
      
      return result;
    } else {
      return null;
    }
  }
  
}