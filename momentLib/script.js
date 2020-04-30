// add the date below work day scheduler, that needs to update to current day
document.getElementById('currentDay').innerHTML = moment().format('dddd MMMM Do')

//variable establishing current time in military time
const currentTime = (moment().format('HH'))

// conditional statements checking each block of time and adding the relevant color
const nineAM = document.getElementById('hr9')
if (nineAM === currentTime) {
  document.getElementById('hr9').style.background = 'rgb(255, 105, 97)'
} else if (nineAM < currentTime) {
  document.getElementById('hr9').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr9').style.background = 'rgb(119, 221, 119)'
}

const tenAM = document.getElementById('hr10')
if (tenAM === currentTime) {
  document.getElementById('hr10').style.background = 'rgb(255, 105, 97)'
} else if (tenAM < currentTime) {
  document.getElementById('hr10').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr10').style.background = 'rgb(119, 221, 119)'
}

const elevenAM = document.getElementById('hr11')
if (elevenAM === currentTime) {
  document.getElementById('hr11').style.background = 'rgb(255, 105, 97)'
} else if (elevenAM < currentTime) {
  document.getElementById('hr11').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr11').style.background = 'rgb(119, 221, 119)'
}

const twelvePM = document.getElementById('hr12')
if (twelvePM === currentTime) {
  document.getElementById('hr12').style.background = 'rgb(255, 105, 97)'
} else if (twelvePM < currentTime) {
  document.getElementById('hr12').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr12').style.background = 'rgb(119, 221, 119)'
}

const onePM = document.getElementById('hr13')
if (onePM === currentTime) {
  document.getElementById('hr13').style.background = 'rgb(255, 105, 97)'
} else if (onePM < currentTime) {
  document.getElementById('hr13').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr13').style.background = 'rgb(119, 221, 119)'
}

const twoPM = document.getElementById('hr14')
if (twoPM === currentTime) {
  document.getElementById('hr14').style.background = 'rgb(255, 105, 97)'
} else if (twoPM < currentTime) {
  document.getElementById('hr14').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr14').style.background = 'rgb(119, 221, 119)'
}

const threePM = document.getElementById('hr15')
if (threePM === currentTime) {
  document.getElementById('hr15').style.background = 'rgb(255, 105, 97)'
} else if (threePM < currentTime) {
  document.getElementById('hr15').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr15').style.background = 'rgb(119, 221, 119)'
}

const fourPM = document.getElementById('hr16')
if (fourPM === currentTime) {
  document.getElementById('hr16').style.background = 'rgb(255, 105, 97)'
} else if (fourPM < currentTime) {
  document.getElementById('hr16').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr16').style.background = 'rgb(119, 221, 119)'
}

const fivePM = document.getElementById('hr17')
if (fivePM === currentTime) {
  document.getElementById('hr17').style.background = 'rgb(255, 105, 97)'
} else if (fivePM < currentTime) {
  document.getElementById('hr17').style.background = 'rgb(211, 211, 211)'
} else {
  document.getElementById('hr17').style.background = 'rgb(119, 221, 119)'
}

// add new meetings to each time block (like the to do list)
document.getElementById("in9").addEventListener("click", '')
console.log(hi)


// save each timeblock to local storage, save by clicking on far right column
