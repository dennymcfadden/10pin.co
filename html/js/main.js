/**
 * Start the game!
 */
$(document).ready(function startGame() {
  // Write current frame & ball to the nav bar
  $("#currentFrame").html('Frame 1');
  $("#currentBall").html('Ball 1');
  // Add input-active class
  $("#a1").addClass('input-active');
  // Add frame-active class
  $("#a2").addClass('frame-active');
  $("#frameOne").addClass('frame-active');
  // Set first pinset to visible
  $("#pinset1").addClass('visible').removeClass('invisible');
});

/**
 * The following functions listen for clicks on prevBtn & nextBtn and moves the .input-active & .frame-acive classes accordingly.
 */

$("#nextBtn").click(function nextInput() {
  if ($('.input-active').is('#j3')) {
    // If on the last input of the game, don't allow next
  }
  else if ($('.input-active').hasClass('ball2')) {
    // Make next pinset visible
    $(".pinset.visible").toggleClass("visible invisible").next().toggleClass("visible invisible");
    // Move .fame-active to next frame
    $(".frame.frame-active").removeClass("frame-active").next().addClass('frame-active');
    // Move .input-active to next input
    $(".rollInput.input-active").removeClass("input-active").next().addClass('input-active');
    $(".rollInput.input-active").next().next().next().scrollintoview();
  }
  else {
    // Otherwise, only move .input-active
    $(".rollInput.input-active").removeClass("input-active").next().addClass('input-active');
    $(".rollInput.input-active").next().next().next().scrollintoview();
  }
});

$("#prevBtn").click(function prevInput() {
  if ($('.input-active').is('#a1')) {
    // If on the first input of the game, don't allow previous
  }
  else if ($('.input-active').hasClass('ball1')) {
    // Make previous pinset visible
    $(".pinset.visible").toggleClass("visible invisible").prev().toggleClass("visible invisible");
    // Move .fame-active to prev frame
    $(".frame.frame-active").removeClass("frame-active").prev().addClass('frame-active'); 
    // Move .input-active to prev input 
    $(".rollInput.input-active").removeClass("input-active").prev().addClass('input-active');
    $(".rollInput.input-active").prev().prev().prev().scrollintoview();
  }
  else {
    // Otherwise, only move .input-active 
    $(".rollInput.input-active").removeClass("input-active").prev().addClass('input-active');
    $(".rollInput.input-active").prev().prev().prev().scrollintoview();
  }
});

// Move active state on unused ball input
$("#nextBtn, #prevBtn").click(function setInputState() {
  if ($('.input-active').hasClass('ball1')) {
    $(".rollInput.frame-active").removeClass("frame-active"); 
    $(".input-active").next().addClass("frame-active"); 
  } else if ($('.input-active').hasClass('ball2')) {
    $(".rollInput.frame-active").removeClass("frame-active"); 
    $(".input-active").prev().addClass("frame-active"); 
  }
});

/**
 * The following function prints the current frame to the nav bar. 
 */

//  function getCapital(state) {
//   switch (state) {
//     case 'NY':
//         console.log('Albany');
//         break;
//     case 'MD':
//         console.log('Annapolis');
//         break;
//     default:
//         console.log('');
//   }
// }

// $('#nextBtn, #prevBtn').click(function printCurrentFrame() {
//  switch(expression) {
//     case n:
//         code block
//         break;
//     case n:
//         code block
//         break;
//     default:
//         code block
//  }
// });

$('#nextBtn, #prevBtn').click(function printCurrentFrame() {
  if ($("#a1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 1');
    $("#currentBall").html('Ball 1');
  } else if ($("#a2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 1');
    $("#currentBall").html('Ball 2');
  } else if ($("#b1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 2');
    $("#currentBall").html('Ball 1');
  } else if ($("#b2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 2');
    $("#currentBall").html('Ball 2');
  } else if ($("#c1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 3');
    $("#currentBall").html('Ball 1');
  } else if ($("#c2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 3');
    $("#currentBall").html('Ball 2');
  } else if ($("#d1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 4');
    $("#currentBall").html('Ball 1');
  } else if ($("#d2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 4');
    $("#currentBall").html('Ball 2');
  } else if ($("#e1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 5');
    $("#currentBall").html('Ball 1');
  } else if ($("#e2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 5');
    $("#currentBall").html('Ball 2');
  } else if ($("#f1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 6');
    $("#currentBall").html('Ball 1');
  } else if ($("#f2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 6');
    $("#currentBall").html('Ball 2');
  } else if ($("#g1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 7');
    $("#currentBall").html('Ball 1');
  } else if ($("#g2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 7');
    $("#currentBall").html('Ball 2');
  } else if ($("#h1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 8');
    $("#currentBall").html('Ball 1');
  } else if ($("#h2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 8');
    $("#currentBall").html('Ball 2');
  } else if ($("#i1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 9');
    $("#currentBall").html('Ball 1');
  } else if ($("#i2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 9');
    $("#currentBall").html('Ball 2');
  } else if ($("#j1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 10');
    $("#currentBall").html('Ball 1');
  } else if ($("#j2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 10');
    $("#currentBall").html('Ball 2');
  } else if ($("#j3").hasClass('input-active')) {
    $("#currentFrame").html('Frame 10');
    $("#currentBall").html('Ball 3');
  }
});

/**
 * When user clicks a pin toggle class .down 
 */

$('body').on("click", ".pin", function clickPin() {
  $(this).toggleClass('animated bounceIn down');
  // $(this).parent().toggleClass('down');
});

/**
 * The following two functions add / subtract pins from whichever rollInput currently has .input-active 
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

// When pin is picked up, -1 from active input
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

// $("#gutterBtn").click(function gutterBall() {
//  alert ('fail');
// });

//When gutterBtn is clicked, set active input to 0
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