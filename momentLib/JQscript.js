// add the date below work day scheduler, that needs to update to current day
document.getElementById('currentDay').innerHTML = moment().format('dddd MMMM Do')
// $("#currentDay").text = moment().format('dddd MMMM Do')

//variable establishing current time in military time
const currentTime = (moment().format('HH'))
console.log(currentTime)

// conditional statements checking each block of time and adding the relevant color
if (currentTime == '09') {
  $("#hr9").css("background-color", "rgb(255, 105, 97)");
} else if ('09' < currentTime) {
  $("#hr9").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr9").css("background-color", "rgb(119, 221, 119)");
}

if (currentTime == '10') {
  $("#hr10").css("background-color", "rgb(255, 105, 97)");
} else if ('10' < currentTime) {
  $("#hr10").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr10").css("background-color", "rgb(119, 221, 119)");
}

if (currentTime == '11') {
  $("#hr11").css("background-color", "rgb(255, 105, 97)");
} else if ('11' < currentTime) {
  $("#hr11").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr11").css("background-color", "rgb(119, 221, 119)");
}

if (currentTime == '12') {
  $("#hr12").css("background-color", "rgb(255, 105, 97)");
} else if ('12' < currentTime) {
  $("#hr12").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr12").css("background-color", "rgb(119, 221, 119)");
}

if (currentTime == '13') {
  $("#hr13").css("background-color", "rgb(255, 105, 97)");
} else if ('13' < currentTime) {
  $("#hr13").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr13").css("background-color", "rgb(119, 221, 119)");
}

if (currentTime == '14') {
  $("#hr14").css("background-color", "rgb(255, 105, 97)");
} else if ('14' < currentTime) {
  $("#hr14").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr14").css("background-color", "rgb(119, 221, 119)");
}

if (currentTime == '15') {
  $("#hr15").css("background-color", "rgb(255, 105, 97)");
} else if ('15' < currentTime) {
  $("#hr15").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr15").css("background-color", "rgb(119, 221, 119)");
}

if (currentTime == '16') {
  $("#hr16").css("background-color", "rgb(255, 105, 97)");
} else if ('16' < currentTime) {
  $("#hr16").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr16").css("background-color", "rgb(119, 221, 119)");
}

if (currentTime == '17') {
  $("#hr17").css("background-color", "rgb(255, 105, 97)");
} else if ('17' < currentTime) {
  $("#hr17").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr17").css("background-color", "rgb(119, 221, 119)");
}

// add new meetings to each time block click on the box and add an input (achieved via textarea in HTML)
// save each timeblock to local storage, save by clicking on far right column, see individual commands by time below

//input for 9 AM apppointment
document.getElementById("saveApptNine").
$("#saveApptNine").addEventListener("click")
addEventListener("click", function () {
  let apptInputNine = document.getElementById("apptInputNine").value
  localStorage.setItem("apptInputNine", apptInputNine)
})

