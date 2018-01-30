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
  if ($(activeInput).data('ball') === 2) {
    // Make next pinset visible
    $(activePins).toggleClass("invisible").next().toggleClass("invisible");
    // Move .fame-active to next frame
    $(".frame.frame-active").removeClass("frame-active").next().addClass('frame-active');
    activePins = $(".pinset").not(".invisible");
  }
});

$("#prevBtn").click(function() {
  if ($(activeInput).is('#a1')) {
  } else if ($(activeInput).data('ball') === 1) {
    // Make previous pinset visible
    $(activePins).toggleClass("invisible").prev().toggleClass("invisible");
    // Move .fame-active to prev frame
    $(".frame.frame-active").removeClass("frame-active").prev().addClass('frame-active');
    activePins = $(".pinset").not(".invisible");
  }
});

/**
 * Special pinset logic for 10th frame
 */

$("#nextBtn").click(function() {
  if (j1 === 10 && $('.input-active').is('#j1')) {
    $(activePins).toggleClass("visible invisible").next().toggleClass("visible invisible");
    activePins = $(".pinset").not(".invisible");
  } else if (j2 === 10 && $('.input-active').is('#j2')) {
    $(activePins).toggleClass("visible invisible").next().toggleClass("visible invisible");
    activePins = $(".pinset").not(".invisible");
  } else if (j1 + j2 === 10 && $('.input-active').is('#j2')) {
    $(activePins).toggleClass("visible invisible").next().toggleClass("visible invisible");
    activePins = $(".pinset").not(".invisible");
  }
});

$("#prevBtn").click(function() {
  if (j1 === 10 && $('.input-active').is('#j2')) {
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
    activePins = $(".pinset").not(".invisible");
  } else if (j2 === 10 && $('.input-active').is('#j3')) {
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
    activePins = $(".pinset").not(".invisible");
  } else if (j1 + j2 === 10 && $('.input-active').is('#j3')) {
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
    activePins = $(".pinset").not(".invisible");
  }
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
  // print it to active input
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
  // Calculate result of frame one. Consider strikes & spares.
  function calcFrameOne() {
    if (a1 === 10 && b1 === 10 && c1 !== null) {
      return a1 + b1 + c1;
    } else if (a1 === 10 && b1 !== null && b2 !== null) {
      return a1 + b1 + b2;
    } else if (a1 !== null && a2 !== null && a1 + a2 === 10 && b1 !== null) {
      return a1 + a2 + b1;
    } else if (a1 !== null && a2 !== null && a1 + a2 < 10) {
      return a1 + a2;
    } else {
      return null;
    }
  }
  // Calculate result of frame two. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameTwo() {
    if (b1 === 10 && c1 === 10 && d1 !== null) {
      const score = b1 + c1 + d1;
      return score + frameOneScore;
    } else if (b1 === 10 && c1 !== null && c2 !== null) {
      const score = b1 + c1 + c2;
      return score + frameOneScore;
    } else if (b1 !== null && b2 !== null && b1 + b2 === 10 && c1 !== null) {
      const score = b1 + b2 + c1;
      return score + frameOneScore;
    } else if (b1 !== null && b2 !== null && b1 + b2 < 10) {
      const score = b1 + b2;
      return score + frameOneScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame three. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameThree() {
    if (c1 === 10 && d1 === 10 && e1 !== null) {
      const score = c1 + d1 + e1;
      return score + frameTwoScore;
    } else if (c1 === 10 && d1 !== null && d2 !== null) {
      const score = c1 + d1 + d2;
      return score + frameTwoScore;
    } else if (c1 !== null && c2 !== null && c1 + c2 === 10 && d1 !== null) {
      const score = c1 + c2 + d1;
      return score + frameTwoScore;
    } else if (c1 !== null && c2 !== null && c1 + c2 < 10) {
      const score = c1 + c2;
      return score + frameTwoScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame four. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameFour() {
    if (d1 === 10 && e1 === 10 && f1 !== null) {
      const score = d1 + e1 + f1;
      return score + frameThreeScore;
    } else if (d1 === 10 && e1 !== null && e2 !== null) {
      const score = d1 + e1 + e2;
      return score + frameThreeScore;
    } else if (d1 !== null && d2 !== null && d1 + d2 === 10 && e1 !== null) {
      const score = d1 + d2 + e1;
      return score + frameThreeScore;
    } else if (d1 !== null && d2 !== null && d1 + d2 < 10) {
      const score = d1 + d2;
      return score + frameThreeScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame five. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameFive() {
    if (e1 === 10 && f1 === 10 && g1 !== null) {
      const score = e1 + f1 + g1;
      return score + frameFourScore;
    } else if (e1 === 10 && f1 !== null && f2 !== null) {
      const score = e1 + f1 + f2;
      return score + frameFourScore;
    } else if (e1 !== null && e2 !== null && e1 + e2 === 10 && f1 !== null) {
      const score = e1 + e2 + f1;
      return score + frameFourScore;
    } else if (e1 !== null && e2 !== null && e1 + e2 < 10) {
      const score = e1 + e2;
      return score + frameFourScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame six. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameSix() {
    if (f1 === 10 && g1 === 10 && h1 !== null) {
      const score = f1 + g1 + h1;
      return score + frameFiveScore;
    } else if (f1 === 10 && g1 !== null && g2 !== null) {
      const score = f1 + g1 + g2;
      return score + frameFiveScore;
    } else if (f1 !== null && f2 !== null && f1 + f2 === 10 && g1 !== null) {
      const score = f1 + f2 + g1;
      return score + frameFiveScore;
    } else if (f1 !== null && f2 !== null && f1 + f2 < 10) {
      const score = f1 + f2;
      return score + frameFiveScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame seven. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameSeven() {
    if (g1 === 10 && h1 === 10 && i1 !== null) {
      const score = g1 + h1 + i1;
      return score + frameSixScore;
    } else if (g1 === 10 && h1 !== null && h2 !== null) {
      const score = g1 + h1 + h2;
      return score + frameSixScore;
    } else if (g1 !== null && g2 !== null && g1 + g2 === 10 && h1 !== null) {
      const score = g1 + g2 + h1;
      return score + frameSixScore;
    } else if (g1 !== null && g2 !== null && g1 + g2 < 10) {
      const score = g1 + g2;
      return score + frameSixScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame eight. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameEight() {
    if (h1 === 10 && i1 === 10 && j1 !== null) {
      const score = h1 + i1 + j1;
      return score + frameSevenScore;
    } else if (h1 === 10 && i1 !== null && i2 !== null) {
      const score = h1 + i1 + i2;
      return score + frameSevenScore;
    } else if (h1 !== null && h2 !== null && h1 + h2 === 10 && i1 !== null) {
      const score = h1 + h2 + i1;
      return score + frameSevenScore;
    } else if (h1 !== null && h2 !== null && h1 + h2 < 10) {
      const score = h1 + h2;
      return score + frameSevenScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame nine. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameNine() {
    if (i1 === 10 && j1 === 10 && j3 !== null) {
      const score = i1 + j1 + j3;
      return score + frameEightScore;
    } else if (i1 === 10 && j1 !== null && j2 !== null) {
      const score = i1 + j1 + j2;
      return score + frameEightScore;
    } else if (i1 !== null && i2 !== null && i1 + i2 === 10 && j1 !== null) {
      const score = i1 + i2 + j1;
      return score + frameEightScore;
    } else if (i1 !== null && i2 !== null && i1 + i2 < 10) {
      const score = i1 + i2;
      return score + frameEightScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame ten. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameTen() {
    if (j1 === 10 && j2 === 10 && j3 !== null) {
      const score = j1 + j2 + j3;
      return score + frameNineScore;
    } else if (j1 === 10 && j2 !== null && j3 !== null) {
      const score = j1 + j2 + j3;
      return score + frameNineScore;
    } else if (j1 !== null && j2 !== null && j1 + j2 === 10 && j3 !== null) {
      const score = j1 + j2 + j3;
      return score + frameNineScore;
    } else if (j1 !== null && j2 !== null && j1 + j2 < 10) {
      const score = j1 + j2;
      return score + frameNineScore;
    } else {
      return null;
    }
  }
  // Store results of calcFrame{X} functions in variables.
  let frameOneScore = calcFrameOne();
  let frameTwoScore = calcFrameTwo();
  let frameThreeScore = calcFrameThree();
  let frameFourScore = calcFrameFour();
  let frameFiveScore = calcFrameFive();
  let frameSixScore = calcFrameSix();
  let frameSevenScore = calcFrameSeven();
  let frameEightScore = calcFrameEight();
  let frameNineScore = calcFrameNine();
  let frameTenScore = calcFrameTen();
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
});

/**
 * Special rules for 'X' & '/' in 10th frame
 */

$('body').on("click", ".pin, #gutterBtn", function() {
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
 * Reset game when finished
 */

$('#newGame').click(function() {
  location.reload();
});