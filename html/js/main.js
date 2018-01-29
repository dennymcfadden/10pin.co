let activeInput = undefined;
let activePins = undefined;

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
 * When user taps a pin, toggle class .down 
 */

$('body').on("click", ".pin", function() {
  $(this).toggleClass('animated bounceIn down');
});
/**
 * Add pin to whichever input currently has .input-active 
 */

$('body').on("click", ".pin:not('.down')", function() {
  // Get text from active.Input
  let value = $('.input-active').text();
  // If text is '' then change it to 1, otherwise +1 to it
  if (value === "") {
    value = 1;
  } else {
    value = parseInt(value) + 1;  
  }
  // Print value back to active input
  $('.input-active').text(value);
});

/**
 * Subtract pin from whichever input currently has .input-active 
 */

 $('body').on("click", ".down", function() {
  // get text from active.Input
  let value = $('.input-active').text();
  // turn it into a number and +1
  let num = parseInt(value) - 1;
  // print it to active input
  $('.input-active').text(num);
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
 * Reset game when finished
 */

$('#newGame').click(function() {
  location.reload();
});