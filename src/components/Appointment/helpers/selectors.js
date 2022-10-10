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
  console.log(appointments);
  return appointments;
}