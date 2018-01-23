/**
 * Switch pinset when switching frames
 */

$("#nextBtn").click(function nextPinSet() {
  if ($('.input-active').hasClass('ball2')) {
    // Make next pinset visible
    $(".pinset.visible").toggleClass("visible invisible").next().toggleClass("visible invisible");
    // Move .fame-active to next frame
    $(".frame.frame-active").removeClass("frame-active").next().addClass('frame-active');
  }
});

$("#prevBtn").click(function prevPinset() {
  if ($('.input-active').hasClass('ball1')) {
    // Make previous pinset visible
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
    // Move .fame-active to prev frame
    $(".frame.frame-active").removeClass("frame-active").prev().addClass('frame-active'); 
  }
});

/**
 * Special pinset rules for 10th frame
 */

$("#nextBtn").click(function nextInput10thFrame() {
  if (j1 === 10 && $('.input-active').is('#j1')) {
    $(".pinset.visible").toggleClass("visible invisible").next().toggleClass("visible invisible");
  } else if (j2 === 10 && $('.input-active').is('#j2')) {
    $(".pinset.visible").toggleClass("visible invisible").next().toggleClass("visible invisible");
  } else if (j1 + j2 === 10 && $('.input-active').is('#j2')) {
    $(".pinset.visible").toggleClass("visible invisible").next().toggleClass("visible invisible");
  }
});

$("#prevBtn").click(function prevInput10thFrame() {
  if (j1 === 10 && $('.input-active').is('#j2')) {
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
  } else if (j2 === 10 && $('.input-active').is('#j3')) {
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
  } else if (j1 + j2 === 10 && $('.input-active').is('#j3')) {
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
  }
});

/**
 * Move input-active class
 */

$("#nextBtn").click(function moveInputActiveNext() {
  if ($('.input-active').is('#j3')) {
  }
  else {  
    $(".rollInput.input-active").removeClass("input-active").next().addClass('input-active');
    $(".rollInput.input-active").next().next().next().scrollintoview();
  }
});

$("#prevBtn").click(function moveInputActivePrev() {
  if ($('.input-active').is('#a1')) {
  }
  else {
    $(".rollInput.input-active").removeClass("input-active").prev().addClass('input-active');
    $(".rollInput.input-active").prev().prev().prev().scrollintoview();
  }
});

/**
 * Print current frame & ball to nav bar
 */

$('#nextBtn, #prevBtn').click(function printStatus() {
  // Store data in variables
  const activeInput = $('.input-active');
  const currentFrame = activeInput.data('frame');
  const currentBall = activeInput.data('ball');
  // Print the current frame & ball to nav bar
  $('#currentFrame').html('Frame ' + currentFrame);
  $('#currentBall').html('Ball ' + currentBall);
});

/**
 * Move frame-active class to the unused ball
 */

$("#nextBtn, #prevBtn").click(function setFrameActive() {
  if ($('.input-active').hasClass('ball1')) {
    $(".rollInput.frame-active").removeClass("frame-active"); 
    $(".input-active").next().addClass("frame-active"); 
  } else if ($('.input-active').hasClass('ball2')) {
    $(".rollInput.frame-active").removeClass("frame-active"); 
    $(".input-active").prev().addClass("frame-active"); 
  }
});

/**
 * Special frame-active rules for 10th frame
 */

$("#nextBtn, #prevBtn").click(function setFrameActive10thFrame() {
  if ($('.input-active').is('#j3')) {
    $("#j3").removeClass("frame-active");
    $("#j1, #j2").addClass("frame-active"); 
  } else if ($('.input-active').is('#j2')) {
    $("#j2").removeClass("frame-active"); 
    $("#j1").addClass("frame-active");
  } else if ($('.input-active').is('#j1')) {
    $("#j1").removeClass("frame-active"); 
    $("#j2").addClass("frame-active"); 
  } else if ($('.input-active').is('#i2')) {
    $("#j3").removeClass("frame-active"); 
  }
});

/**
 * When user taps a pin, toggle class .down 
 */

$('body').on("click", ".pin", function clickPin() {
  $(this).toggleClass('animated bounceIn down');
});

/**
 * Add pin to whichever input currently has .input-active 
 */

$('body').on("click", ".pin:not('.down')", function addPin() {
 if ($("#a1").hasClass('input-active')) {
   a1 = a1 + 1;
 } else if ($("#a2").hasClass('input-active')) {
   a2 = a2 + 1;
 } else if ($("#b1").hasClass('input-active')) {
   b1 = b1 + 1;
 } else if ($("#b2").hasClass('input-active')) {
   b2 = b2 + 1;
 } else if ($("#c1").hasClass('input-active')) {
   c1 = c1 + 1;
 } else if ($("#c2").hasClass('input-active')) {
   c2 = c2 + 1;
 } else if ($("#d1").hasClass('input-active')) {
   d1 = d1 + 1;
 } else if ($("#d2").hasClass('input-active')) {
   d2 = d2 + 1;
 } else if ($("#e1").hasClass('input-active')) {
   e1 = e1 + 1;
 } else if ($("#e2").hasClass('input-active')) {
   e2 = e2 + 1;
 } else if ($("#f1").hasClass('input-active')) {
   f1 = f1 + 1;
 } else if ($("#f2").hasClass('input-active')) {
   f2 = f2 + 1;
 } else if ($("#g1").hasClass('input-active')) {
   g1 = g1 + 1;
 } else if ($("#g2").hasClass('input-active')) {
   g2 = g2 + 1;
 } else if ($("#h1").hasClass('input-active')) {
   h1 = h1 + 1;
 } else if ($("#h2").hasClass('input-active')) {
   h2 = h2 + 1;
 } else if ($("#i1").hasClass('input-active')) {
   i1 = i1 + 1;
 } else if ($("#i2").hasClass('input-active')) {
   i2 = i2 + 1;
 } else if ($("#j1").hasClass('input-active')) {
   j1 = j1 + 1;
 } else if ($("#j2").hasClass('input-active')) {
   j2 = j2 + 1;
 } else if ($("#j3").hasClass('input-active')) {
   j3 = j3 + 1;
 }
});

/**
 * Subtract pin from whichever input currently has .input-active 
 */

$('body').on("click", ".down", function subtractPin() {
 if ($("#a1").hasClass('input-active')) {
   a1 = a1 - 1;
 } else if ($("#a2").hasClass('input-active')) {
   a2 = a2 - 1;
 } else if ($("#b1").hasClass('input-active')) {
   b1 = b1 - 1;
 } else if ($("#b2").hasClass('input-active')) {
   b2 = b2 - 1;
 } else if ($("#c1").hasClass('input-active')) {
   c1 = c1 - 1;
 } else if ($("#c2").hasClass('input-active')) {
   c2 = c2 - 1;
 } else if ($("#d1").hasClass('input-active')) {
   d1 = d1 - 1;
 } else if ($("#d2").hasClass('input-active')) {
   d2 = d2 - 1;
 } else if ($("#e1").hasClass('input-active')) {
   e1 = e1 - 1;
 } else if ($("#e2").hasClass('input-active')) {
   e2 = e2 - 1;
 } else if ($("#f1").hasClass('input-active')) {
   f1 = f1 - 1;
 } else if ($("#f2").hasClass('input-active')) {
   f2 = f2 - 1;
 } else if ($("#g1").hasClass('input-active')) {
   g1 = g1 - 1;
 } else if ($("#g2").hasClass('input-active')) {
   g2 = g2 - 1;
 } else if ($("#h1").hasClass('input-active')) {
   h1 = h1 - 1;
 } else if ($("#h2").hasClass('input-active')) {
   h2 = h2 - 1;
 } else if ($("#i1").hasClass('input-active')) {
   i1 = i1 - 1;
 } else if ($("#i2").hasClass('input-active')) {
   i2 = i2 - 1;
 } else if ($("#j1").hasClass('input-active')) {
   j1 = j1 - 1;
 } else if ($("#j2").hasClass('input-active')) {
   j2 = j2 - 1;
 } else if ($("#j3").hasClass('input-active')) {
   j3 = j3 - 1;
 }
});

/**
 * When gutterball is clicked, set .active-input to 0 
 */

$("#gutterBtn").click(function gutterBall() {
 if ($("#a1").hasClass('input-active')) {
   a1 = 0;
 } else if ($("#a2").hasClass('input-active')) {
   a2 = 0;
 } else if ($("#b1").hasClass('input-active')) {
   b1 = 0;
 } else if ($("#b2").hasClass('input-active')) {
   b2 = 0;
 } else if ($("#c1").hasClass('input-active')) {
   c1 = 0;
 } else if ($("#c2").hasClass('input-active')) {
   c2 = 0;
 } else if ($("#d1").hasClass('input-active')) {
   d1 = 0;
 } else if ($("#d2").hasClass('input-active')) {
   d2 = 0;
 } else if ($("#e1").hasClass('input-active')) {
   e1 = 0;
 } else if ($("#e2").hasClass('input-active')) {
   e2 = 0;
 } else if ($("#f1").hasClass('input-active')) {
   f1 = 0;
 } else if ($("#f2").hasClass('input-active')) {
   f2 = 0;
 } else if ($("#g1").hasClass('input-active')) {
   g1 = 0;
 } else if ($("#g2").hasClass('input-active')) {
   g2 = 0;
 } else if ($("#h1").hasClass('input-active')) {
   h1 = 0;
 } else if ($("#h2").hasClass('input-active')) {
   h2 = 0;
 } else if ($("#i1").hasClass('input-active')) {
   i1 = 0;
 } else if ($("#i2").hasClass('input-active')) {
   i2 = 0;
 } else if ($("#j1").hasClass('input-active')) {
   j1 = 0;
 } else if ($("#j2").hasClass('input-active')) {
   j2 = 0;
 } else if ($("#j3").hasClass('input-active')) {
   j3 = 0;
 }
});

/**
 * Determine if bonus ball is earned
 */

$('body').on("click", ".pin, #gutterBtn, #nextBtn, #prevBtn", function addBonusBall() {
  if ($('.input-active').is('#j1, #j2') && j1 + j2 < 10) {
    $("#j3").removeClass("frame-active"); 
  } else if ($('.input-active').is('#j1, #j2') && j1 === 10) {
    $("#j3").addClass("frame-active");
  } else if ($('.input-active').is('#j1, #j2') && j1 + j2 === 10) {
    $("#j3").addClass("frame-active");
  }
});