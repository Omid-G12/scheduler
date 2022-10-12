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
  const interviewer = Object.values(state.interviewers)

  for (let int of interviewer) {
    
    if (interview === null) {
      
      return null
    } else if (int.id === interview.interviewer) {

      let result = {
        "student": interview.student,
        "interviewer": int
      };
      return result;
    }
    
  }
  
}