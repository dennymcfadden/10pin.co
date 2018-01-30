/**
 * Define global variables
 */

let activeInput = undefined;
let activePins = undefined;
let a1 = null;
let a2 = null;
let b1 = null;
let b2 = null;
let c1 = null;
let c2 = null;
let d1 = null;
let d2 = null;
let e1 = null;
let e2 = null;
let f1 = null;
let f2 = null;
let g1 = null;
let g2 = null;
let h1 = null;
let h2 = null;
let i1 = null;
let i2 = null;
let j1 = null;
let j2 = null;
let j3 = null;

/**
 * Update global variables on page load
 */

$(document).ready(function(){
  activeInput = $('.input-active');
  activePins = $(".pinset").not(".invisible");
});

/**
 * Toggle visibility of pinset when switching frames, and update variable
 */

$("#nextBtn").click(function() {
  // If activeInput is on ball 2, go to next frame
  if ($(activeInput).not('#j2').data('ball') === 2) {
    $(activePins).toggleClass("invisible").next().toggleClass("invisible");
    $(".frame.frame-active").removeClass("frame-active").next().addClass('frame-active');
  }
  activePins = $(".pinset").not(".invisible");
});

$("#prevBtn").click(function() {
  // If activeInput is on ball 1, go to previous frame
  if ($(activeInput).not('#a1').data('ball') === 1) {
    $(activePins).toggleClass("invisible").prev().toggleClass("invisible");
    $(".frame.frame-active").removeClass("frame-active").prev().addClass('frame-active');
  }
  activePins = $(".pinset").not(".invisible");
});

/**
 * Special pinset logic for 10th frame
 */

$("#nextBtn").click(function() {
  if (j1 === 10 && $('.input-active').is('#j1')) {
    $(activePins).toggleClass("visible invisible").next().toggleClass("visible invisible");
  } else if (j2 === 10 && $('.input-active').is('#j2')) {
    $(activePins).toggleClass("visible invisible").next().toggleClass("visible invisible");
  } else if (j1 + j2 === 10 && $('.input-active').is('#j2')) {
    $(activePins).toggleClass("visible invisible").next().toggleClass("visible invisible");
  }
  activePins = $(".pinset").not(".invisible");
});

$("#prevBtn").click(function() {
  if (j1 === 10 && $('.input-active').is('#j2')) {
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
  } else if (j2 === 10 && $('.input-active').is('#j3')) {
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
  } else if (j1 + j2 === 10 && $('.input-active').is('#j3')) {
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
  }
  activePins = $(".pinset").not(".invisible");
});

/**
 * Move input-active class
 */

$("#nextBtn").click(function() {
  if ($(activeInput).is('#j3')) {
    return;
  } 
  $(activeInput).removeClass("input-active").next().addClass('input-active');
  $(activeInput).next().next().next().scrollintoview();
  activeInput = $('.input-active');
  numberFrame = activeInput.data('frame');
  numberBall = activeInput.data('ball');
});

$("#prevBtn").click(function() {
  if ($(activeInput).is('#a1')) {
    return;
  }
  $(activeInput).removeClass("input-active").prev().addClass('input-active');
  $(activeInput).prev().prev().prev().scrollintoview();
  activeInput = $('.input-active');
  frame = activeInput.data('frame');
  numberBall = activeInput.data('ball');
});

/**
 * Print current frame & ball to nav bar
 */

$('#nextBtn, #prevBtn').click(function() {
  $('#currentFrame').html('Frame ' + activeInput.data('frame'));
  $('#currentBall').html('Ball ' + activeInput.data('ball'));
});

/**
 * Move frame-active class to the unused ball
 */

$("#nextBtn, #prevBtn").click(function() {
  if ($(activeInput).data('ball') === 1) {
    $(".ball.frame-active").removeClass("frame-active"); 
    $(activeInput).next().addClass("frame-active"); 
  } else if ($(activeInput).data('ball') === 2) {
    $(".ball.frame-active").removeClass("frame-active"); 
    $(activeInput).prev().addClass("frame-active"); 
  }
});

/**
 * Special frame-active rules for 10th frame
 */

$("#nextBtn, #prevBtn").click(function() {
  if ($(activeInput).is('#j3')) {
    $("#j3").removeClass("frame-active");
    $("#j1, #j2").addClass("frame-active"); 
  } else if ($(activeInput).is('#j2')) {
    $("#j2").removeClass("frame-active"); 
    $("#j1").addClass("frame-active");
  } else if ($(activeInput).is('#j1')) {
    $("#j1").removeClass("frame-active"); 
    $("#j2").addClass("frame-active"); 
  } else if ($(activeInput).is('#i2')) {
    $("#j3").removeClass("frame-active"); 
  }
});

/**
 * Add pin to whichever input currently has .input-active 
 */

$('body').on("click", ".pin", function() {
  // Get value from .active.Input data-score
  let value = $('.input-active').data('score');
  // If pin is down already, decrease score by 1
  if ($(this).hasClass('down')) {
    if (value === 1) {
      value = "";
    } else {
      value = parseInt(value) - 1;  
    }
  // If pin is up, increase score by 1
  } else { 
    if (value === "") {
      value = 1;
    } else {
      value = parseInt(value) + 1;  
    }
  }
  // Print value back to .active-input
  $('.input-active').data('score', value);
  $('.input-active').text(value);
  // Toggle class of tapped pin
  $(this).toggleClass('animated bounceIn down');
  // Update global variables
  a1 = parseInt($('#a1').data('score'));
  a2 = parseInt($('#a2').data('score'));
  b1 = parseInt($('#b1').data('score'));
  b2 = parseInt($('#b2').data('score'));
  c1 = parseInt($('#c1').data('score'));
  c2 = parseInt($('#c2').data('score'));
  d1 = parseInt($('#d1').data('score'));
  d2 = parseInt($('#d2').data('score'));
  e1 = parseInt($('#e1').data('score'));
  e2 = parseInt($('#e2').data('score'));
  f1 = parseInt($('#f1').data('score'));
  f2 = parseInt($('#f2').data('score'));
  g1 = parseInt($('#g1').data('score'));
  g2 = parseInt($('#g2').data('score'));
  h1 = parseInt($('#h1').data('score'));
  h2 = parseInt($('#h2').data('score'));
  i1 = parseInt($('#i1').data('score'));
  i2 = parseInt($('#i2').data('score'));
  j1 = parseInt($('#j1').data('score'));
  j2 = parseInt($('#j2').data('score'));
  j3 = parseInt($('#j3').data('score'));
});


/**
 * When gutterball is clicked, set .active-input to 0 
 */

$("#gutterBtn").click(function() {
  $('.input-active').data('score', 0);
  $('.input-active').text(0);
});

/**
 * Determine if bonus ball is earned
 */

$('body').on("click", ".pin, #gutterBtn, #nextBtn, #prevBtn", function() {
  if ($(activeInput).is('#j1, #j2') && j1 + j2 < 10) {
    $("#j3").removeClass("frame-active"); 
  } else if ($(activeInput).is('#j1, #j2') && j1 === 10) {
    $("#j3").addClass("frame-active");
  } else if ($(activeInput).is('#j1, #j2') && j1 + j2 === 10) {
    $("#j3").addClass("frame-active");
  }
});

/**
 * Highlight Finish button in 10th frame
 */

$('#nextBtn, #prevBtn').click(function() {
  if ($(activeInput).is('#j1, #j2, #j3')) {
    $("#finishBtn").css("color", "var(--blue)"); 
  } else if ($(activeInput).not('#j1, #j2, #j3')) {
    $("#finishBtn").css("color", "#18466f"); 
  }
});

/**
 * Calculate frame scores whenever prevBtn or nextBtn is clicked
 */

$("#nextBtn, #prevBtn, #finishBtn").click(function() {
  $('[data-ball="1"]').each(function(index, element) {
    let prev = $(element).prev().prev().data('total');
    let num1 = $(element).data('score');
    let num2 = $(element).next().data('score');
    let num3 = $(element).next().next().data('score');
    let num4 = $(element).next().next().next().data('score');
    let num5 = $(element).next().next().next().next().data('score');
    let result = "";
    let sum = "";
    if (num1 === "" && num3 === 10 && num5 !== "") {
      result = num1 + num2 + num5;
    } else if (num1 === 10 && num3 !== "" && num4 !== "") {
      result = num1 + num3 + num4;
    } else if (num1 !== "" && num2 !== "" && num1 + num2 === 10 && num3 !== "") {
      result = num1 + num2 + num3;
    } else if (num1 !== "" && num2 !== "" && num1 + num2 < 10) {
      result = num1 + num2;
    } else {
      result = "";
    }
    // Condition for first frame where undefined stops math
    if (prev === undefined) {
      prev = 0;
    }
    sum = parseInt(result) + parseInt(prev);
    $(element).data('total', sum);
  });
});


$("#nextBtn, #prevBtn, #finishBtn").click(function() {
  // Special logic for 10th frame. Test, then delete this.
  function calcFrameTen() {
    let num1 = $('#j1').data('score');
    let num2 = $('#j2').data('score');
    let num3 = $('#j3').data('score');
    let result = "";
    let sum = "";
    if (num1 === 10 && num2 === 10 && num3 !== "") {
      result = num1 + num2 + num3;
    } else if (num1 === 10 && num2 !== "" && num3 !== "") {
      result = num1 + num2 + num3;
    } else if (num1 !== "" && num2 !== "" && num1 + num2 === 10 && num3 !== "") {
      result = num1 + num2 + num3;
    } else if (num1 !== "" && num2 !== "" && num1 + num2 < 10) {
      result = num1 + j2;
    } else {
      result = "";
    }
    sum = parseInt(result) + parseInt(prev);
    $('#j1').data('total', sum);
  }
  // Store results of each frame in variables.
  let frameOneScore = $('#a1').data('total');
  let frameTwoScore = $('#b1').data('total');
  let frameThreeScore = $('#c1').data('total');
  let frameFourScore = $('#d1').data('total');
  let frameFiveScore = $('#e1').data('total');
  let frameSixScore = $('#f1').data('total');
  let frameSevenScore = $('#g1').data('total');
  let frameEightScore = $('#h1').data('total');
  let frameNineScore = $('#i1').data('total');
  let frameTenScore = $('#j1').data('total');
  // Calculate current score based on latest completed frame.
  function currentScore() {
    if (frameTenScore) {
      return frameTenScore;
    } else if (frameNineScore) {
      return frameNineScore;
    } else if (frameEightScore) {
      return frameEightScore;
    } else if (frameSevenScore) {
      return frameSevenScore;
    } else if (frameSixScore) {
      return frameSixScore;
    } else if (frameFiveScore) {
      return frameFiveScore;
    } else if (frameFourScore) {
      return frameFourScore;
    } else if (frameThreeScore) {
      return frameThreeScore;
    } else if (frameTwoScore) {
      return frameTwoScore;
    } else if (frameOneScore) {
      return frameOneScore;
    } else {
      return 0;
    }
  }
  // Calculate maximum potential score.
  function maxScore() {
    if (frameTenScore) {
      return frameTenScore;
    } else if (frameNineScore) {
      return frameNineScore + (30 * 1);
    } else if (frameEightScore) {
      return frameEightScore + (30 * 2);
    } else if (frameSevenScore) {
      return frameSevenScore + (30 * 3);
    } else if (frameSixScore) {
      return frameSixScore + (30 * 4);
    } else if (frameFiveScore) {
      return frameFiveScore + (30 * 5);
    } else if (frameFourScore) {
      return frameFourScore + (30 * 6);
    } else if (frameThreeScore) {
      return frameThreeScore + (30 * 7);
    } else if (frameTwoScore) {
      return frameTwoScore + (30 * 8);
    } else if (frameOneScore) {
      return frameOneScore + (30 * 9);
    } else {
      return 300;
    }
  }
  // Print frame scores.
  $("#frameOne").html(frameOneScore);
  $("#frameTwo").html(frameTwoScore);
  $("#frameThree").html(frameThreeScore);
  $("#frameFour").html(frameFourScore);
  $("#frameFive").html(frameFiveScore);
  $("#frameSix").html(frameSixScore);
  $("#frameSeven").html(frameSevenScore);
  $("#frameEight").html(frameEightScore);
  $("#frameNine").html(frameNineScore);
  $("#frameTen").html(frameTenScore);
  $(".currentScore").html(currentScore);
  $("#maxScore").html(maxScore);
});

/**
 * Update with 'X' & '/' for any strikes & spares.
 */

$('body').on("click", ".pin, #gutterBtn", function() {
  $('#a1, #b1, #c1, #d1, #e1, #f1, #g1, #h1, #i1').each(function(index, element) {
    let num1 = $(element).text();
    let num2 = $(element).next().text();
    if ($(element) && num1 === '10') {
      $(element).html('X')
      $(element).next().html('-')
    } else if ($(element) && parseInt(num1) + parseInt(num2) === 10) {
      $(element).next().html('/')
    }
  });
  // Special rules for 10th frame
  if (j1 === 10 && j2 === 10 && j3 === 10) {
    $("#j1").html('X');
    $("#j2").html('X');
    $("#j3").html('X');
  } else if (j3 === 10 && j1 === 10) {
    $("#j1").html('X');
    $("#j2").html('-');
    $("#j3").html('X');
  } else if (j3 === 10 && j1 + j2 === 10) {
    $("#j2").html('/');
    $("#j3").html('X');
  } else if (j1 === 10 && j2 === 10) {
    $("#j1").html('X');
    $("#j2").html('X');
  } else if (j1 === 10) {
    $("#j1").html('X');
  } else if (j1 + j2 === 10) {
    $("#j2").html('/');
  }
});

/**
 * Reset game
 */

$('#newGame').click(function() {
  location.reload();
});