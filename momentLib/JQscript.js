// add the date below work day scheduler, that needs to update to current day
// document.getElementById('currentDay').innerHTML = moment().format('dddd MMMM Do')
$("#currentDay").HTML = moment().format('dddd MMMM Do');

//variable establishing current time in military time
const currentTime = (moment().format('HH'))

// conditional statements checking each block of time and adding the relevant color
const nineAM = $("#hr9");
if (nineAM === currentTime) {
  $("#hr9").css("background-color", "rgb(255, 105, 97)");
} else if (nineAM < currentTime) {
  $("#hr9").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr9").css("background-color", "rgb(119, 221, 119)");
}

const tenAM = $("#hr10")
if (tenAM === currentTime) {
  $("#hr10").css("background-color", "rgb(255, 105, 97)");
} else if (tenAM < currentTime) {
  $("#hr10").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr10").css("background-color", "rgb(119, 221, 119)");
}

const elevenAM = $("#hr11")
if (elevenAM === currentTime) {
  $("#hr11").css("background-color", "rgb(255, 105, 97)");
} else if (elevenAM < currentTime) {
  $("#hr11").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr11").css("background-color", "rgb(119, 221, 119)");
}

const twelvePM = $("#hr12")
if (twelvePM === currentTime) {
  $("#hr12").css("background-color", "rgb(255, 105, 97)");
} else if (twelvePM < currentTime) {
  $("#hr12").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr12").css("background-color", "rgb(119, 221, 119)");
}

const onePM = $("#hr13")
if (onePM === currentTime) {
  $("#hr13").css("background-color", "rgb(255, 105, 97)");
} else if (onePM < currentTime) {
  $("#hr13").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr13").css("background-color", "rgb(119, 221, 119)");
}

const twoPM = $("#hr14")
if (twoPM === currentTime) {
  $("#hr14").css("background-color", "rgb(255, 105, 97)");
} else if (twoPM < currentTime) {
  $("#hr14").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr14").css("background-color", "rgb(119, 221, 119)");
}

const threePM = $("#hr15")
if (threePM === currentTime) {
  $("#hr15").css("background-color", "rgb(255, 105, 97)");
} else if (threePM < currentTime) {
  $("#hr15").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr15").css("background-color", "rgb(119, 221, 119)");
}

const fourPM = $("#hr16")
if (fourPM === currentTime) {
  $("#hr16").css("background-color", "rgb(255, 105, 97)");
} else if (fourPM < currentTime) {
  $("#hr16").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr16").css("background-color", "rgb(119, 221, 119)");
}

const fivePM = $('#hr17')
if (fivePM === currentTime) {
  $("#hr17").css("background-color", "rgb(255, 105, 97)");
} else if (fivePM < currentTime) {
  $("#hr17").css("background-color", "rgb(211, 211, 211)");
} else {
  $("#hr17").css("background-color", "rgb(119, 221, 119)");
}

// add new meetings to each time block (like the to do list)
// document.getElementById("in9").addEventListener("click", '')
// console.log(hi)


// save each timeblock to local storage, save by clicking on far right column

