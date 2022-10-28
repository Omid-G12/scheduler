//Takes in state and day and returns the appointments for that selected day
export function getAppointmentsForDay(state, day) {
  
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

//Takes in state and day and return the interviewers available for that selected day
export function getInterviewersForDay(state, day) {
  
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

// Takes in state and an interview object, returns null if interview is null 
// Returns an object with the student and interviewer object inside
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