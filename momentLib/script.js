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

//input for 10 AM apppointment
document.getElementById("saveApptTen").addEventListener("click", function () {
  let apptInputTen = document.getElementById("apptInputTen").value
  localStorage.setItem("apptInputTen", apptInputTen)
})

//input for 11 AM apppointment
document.getElementById("saveApptEleven").addEventListener("click", function () {
  let apptInputEleven = document.getElementById("apptInputEleven").value
  localStorage.setItem("apptInputEleven", apptInputEleven)
})

//input for 12PM apppointment
document.getElementById("saveApptTwelve").addEventListener("click", function () {
  let apptInputTwelve = document.getElementById("apptInputTwelve").value
  localStorage.setItem("apptInputTwelve", apptInputTwelve)
})

//input for 1PM (13) apppointment
document.getElementById("saveApptThirt").addEventListener("click", function () {
  let apptInputThirt = document.getElementById("apptInputThirt").value
  localStorage.setItem("apptInputThirt", apptInputThirt)
})

//input for 2PM (14) apppointment
document.getElementById("saveApptFort").addEventListener("click", function () {
  let apptInputFort = document.getElementById("apptInputFort").value
  localStorage.setItem("apptInputFort", apptInputFort)
})

//input for 3PM (15) apppointment
document.getElementById("saveApptFift").addEventListener("click", function () {
  let apptInputFift = document.getElementById("apptInputFift").value
  localStorage.setItem("apptInputFift", apptInputFift)
})

//input for 4PM (16) apppointment
document.getElementById("saveApptSixt").addEventListener("click", function () {
  let apptInputSixt = document.getElementById("apptInputSixt").value
  localStorage.setItem("apptInputSixt", apptInputSixt)
})

//input for 5PM (17) apppointment
document.getElementById("saveApptSevent").addEventListener("click", function () {
  let apptInputSevent = document.getElementById("apptInputSevent").value
  localStorage.setItem("apptInputSevent", apptInputSevent)
})

//saving inputs by the hour

//saving 9 AM
document.getElementById("apptInputNine").innerHTML = localStorage.getItem("apptInputNine")

//saving 10 AM
document.getElementById("apptInputTen").innerHTML = localStorage.getItem("apptInputTen")

//saving 11 AM
document.getElementById("apptInputEleven").innerHTML = localStorage.getItem("apptInputEleven")

//saving 12 PM
document.getElementById("apptInputTwelve").innerHTML = localStorage.getItem("apptInputTwelve")

//saving 1 PM (13)
document.getElementById("apptInputThirt").innerHTML = localStorage.getItem("apptInputThirt")

//saving 2 PM (14)
document.getElementById("apptInputFort").innerHTML = localStorage.getItem("apptInputFort")

//saving 3 PM (15)
document.getElementById("apptInputFift").innerHTML = localStorage.getItem("apptInputFift")

//saving 4 PM (16)
document.getElementById("apptInputSixt").innerHTML = localStorage.getItem("apptInputSixt")

//saving 5 PM (17)
document.getElementById("apptInputSevent").innerHTML = localStorage.getItem("apptInputSevent")