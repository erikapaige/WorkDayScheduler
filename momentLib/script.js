// add the date below work day scheduler, that needs to update to current day
document.getElementById('currentDay').innerHTML = moment().format('dddd MMMM Do')

//variable establishing current time in military time
const currentTime = (moment().format('HH'))
console.log(currentTime)
// conditional statements checking each block of time and adding the relevant color
// const nineAM = document.getElementById('hr9')
if (currentTime == '09') {
  document.getElementById('hr9').style.background = 'rgb(255, 105, 97)'
} else if ('09' < currentTime) {
  document.getElementById('hr9').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr9').style.background = 'rgb(119, 221, 119)'
}

if (currentTime == '10') {
  document.getElementById('hr10').style.background = 'rgb(255, 105, 97)'
} else if ('10' < currentTime) {
  document.getElementById('hr10').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr10').style.background = 'rgb(119, 221, 119)'
}

if (currentTime == '11') {
  document.getElementById('hr11').style.background = 'rgb(255, 105, 97)'
} else if ('11' < currentTime) {
  document.getElementById('hr11').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr11').style.background = 'rgb(119, 221, 119)'
}

if (currentTime == '12') {
  document.getElementById('hr12').style.background = 'rgb(255, 105, 97)'
} else if ('12' < currentTime) {
  document.getElementById('hr12').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr12').style.background = 'rgb(119, 221, 119)'
}

if (currentTime == '13') {
  document.getElementById('hr13').style.background = 'rgb(255, 105, 97)'
} else if ('13' < currentTime) {
  document.getElementById('hr13').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr13').style.background = 'rgb(119, 221, 119)'
}

if (currentTime == '14') {
  document.getElementById('hr14').style.background = 'rgb(255, 105, 97)'
} else if ('14' < currentTime) {
  document.getElementById('hr14').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr14').style.background = 'rgb(119, 221, 119)'
}

if (currentTime == '15') {
  document.getElementById('hr15').style.background = 'rgb(255, 105, 97)'
} else if ('15' < currentTime) {
  document.getElementById('hr15').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr15').style.background = 'rgb(119, 221, 119)'
}

if (currentTime == '16') {
  document.getElementById('hr16').style.background = 'rgb(255, 105, 97)'
} else if ('16' < currentTime) {
  document.getElementById('hr16').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr16').style.background = 'rgb(119, 221, 119)'
}

if (currentTime == '17') {
  document.getElementById('hr17').style.background = 'rgb(255, 105, 97)'
} else if ('17' < currentTime) {
  document.getElementById('hr17').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr17').style.background = 'rgb(119, 221, 119)'
}

// add new meetings to each time block click on the box and add an input (textarea)
// save each timeblock to local storage, save by clicking on far right column

//input for 9 AM apppointment
document.getElementById("saveApptNine").addEventListener ("click", function() {
  let apptInputNine = document.getElementById("apptInputNine").value
  localStorage.setItem("apptInputNine", apptInputNine)
})
