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
$("#saveApptNine").on("click", function (){
  let apptInputNine = $("#apptInputNine").val()
  localStorage.setItem("apptInputNine", apptInputNine)
})

//input for 10 AM apppointment
$("#saveApptTen").on("click", function () {
  let apptInputTen = $("#apptInputTen").val()
  localStorage.setItem("apptInputTen", apptInputTen)
})

//input for 11 AM apppointment
$("#saveApptEleven").on("click", function () {
  let apptInputEleven = $("#apptInputEleven").val()
  localStorage.setItem("apptInputEleven", apptInputEleven)
})

//input for 12 PM apppointment
$("#saveApptTwelve").on("click", function () {
  let apptInputTwelve = $("#apptInputTwelve").val()
  localStorage.setItem("apptInputTwelve", apptInputTwelve)
})

//input for 1 PM (13) apppointment
$("#saveApptThirt").on("click", function () {
  let apptInputThirt = $("#apptInputThirt").val()
  localStorage.setItem("apptInputThirt", apptInputThirt)
})

//input for 2 PM (14) apppointment
$("#saveApptFort").on("click", function () {
  let apptInputFort = $("#apptInputFort").val()
  localStorage.setItem("apptInputFort", apptInputFort)
})

//input for 3 PM (15) apppointment
$("#saveApptFift").on("click", function () {
  let apptInputFift = $("#apptInputFift").val()
  localStorage.setItem("apptInputFift", apptInputFift)
})

//input for 4 PM (16) apppointment
$("#saveApptSixt").on("click", function () {
  let apptInputSixt = $("#apptInputSixt").val()
  localStorage.setItem("apptInputSixt", apptInputSixt)
})

//input for 5 PM (17) apppointment
$("#saveApptSevent").on("click", function () {
  let apptInputSevent = $("#apptInputSevent").val()
  localStorage.setItem("apptInputSevent", apptInputSevent)
})

//saving 9 AM
$("#apptInputNine").html(localStorage.getItem("apptInputNine"))

//saving 10 AM
$("#apptInputTen").html(localStorage.getItem("apptInputTen"))

//saving 11 AM
$("#apptInputEleven").html(localStorage.getItem("apptInputEleven"))

//saving 12 PM 
$("#apptInputTwelve").html(localStorage.getItem("apptInputTwelve"))

//saving 1 PM (13)
$("#apptInputThirt").html(localStorage.getItem("apptInputThirt"))

//saving 2 PM (14)
$("#apptInputFort").html(localStorage.getItem("apptInputFort"))

//saving 3 PM (15)
$("#apptInputFift").html(localStorage.getItem("apptInputFift"))

//saving 4 PM (16)
$("#apptInputSixt").html(localStorage.getItem("apptInputSixt"))

//saving 5 PM (17)
$("#apptInputSevent").html(localStorage.getItem("apptInputSevent"))