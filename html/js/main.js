// Start the game
$(document).ready(function() {
    // Write current frame & ball to the nav bar
    $("#currentFrame").html('Frame 1');
    $("#currentBall").html('Ball 1');
    // Add input-active class
    $("#a1").addClass('input-active');
    // Add frame-active class
    $("#frameOne").addClass('frame-active');
    // Set first pinset to visible
    $("#pinset1").addClass('visible').removeClass('invisible');
});

// Frame Changer - Next
$("#nextBtn").click(function () {
  if ($('.input-active').hasClass('ball2')) {
    // If ball2 has input-active, then make next pinset visible
    $(".pinset.visible").removeClass("visible").addClass('invisible').next().removeClass("invisible").addClass('visible');
    // If ball2 has input-active, then switch .fame-active to next frame
    $(".frame.frame-active").removeClass("frame-active").next().addClass('frame-active');  
  }
});

// Frame Changer - Prev
$("#prevBtn").click(function () {
  if ($('.input-active').hasClass('ball1')) {
    // If ball1 has input-active, then make previous pinset visible
    $(".pinset.visible").removeClass("visible").addClass('invisible').prev().removeClass("invisible").addClass('visible');
    // If ball1 has input-active, then switch .fame-active to prev frame
    $(".frame.frame-active").removeClass("frame-active").prev().addClass('frame-active');  
  }
});

// Input Changer - Next
$("#nextBtn").click(function () {
  $(".rollInput.input-active").removeClass("input-active").next().addClass('input-active');
});

// Input Changer - Prev
$("#prevBtn").click(function () {
  $(".rollInput.input-active").removeClass("input-active").prev().addClass('input-active');
});

// Active state on unused ball input
$("#nextBtn, #prevBtn").click(function () {
  if ($('.input-active').hasClass('ball1')) {
    $(".rollInput.frame-active").removeClass("frame-active"); 
    $(".input-active").next().addClass("frame-active"); 
  }
  else if ($('.input-active').hasClass('ball2')) {
    $(".rollInput.frame-active").removeClass("frame-active"); 
    $(".input-active").prev().addClass("frame-active"); 
  }
});



//Print current frame & ball number to the nav bar
$('#nextBtn, #prevBtn').click(function() {
  if ($("#a1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 1');
    $("#currentBall").html('Ball 1');
  }
  else if ($("#a2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 1');
    $("#currentBall").html('Ball 2');
  }
  else if ($("#b1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 2');
    $("#currentBall").html('Ball 1');
  }
  else if ($("#b2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 2');
    $("#currentBall").html('Ball 2');
  }
  else if ($("#c1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 3');
    $("#currentBall").html('Ball 1');
  }
  else if ($("#c2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 3');
    $("#currentBall").html('Ball 2');
  }
  else if ($("#d1").hasClass('input-active')) {
    $("#currentFrame").html('Frame 4');
    $("#currentBall").html('Ball 1');
  }
  else if ($("#d2").hasClass('input-active')) {
    $("#currentFrame").html('Frame 4');
    $("#currentBall").html('Ball 2');
  }
});

//When user clicks a pin toggle class .down
$('body').on("click", ".pin", function() {
  $(this).toggleClass('down');
});

//When pin is knocked down, add +1 to active input
$('body').on("click", ".pin:not('.down')", function() {
 if ($("#a1").hasClass('input-active')) {
  a1 = a1+1;
 }
 else if ($("#a2").hasClass('input-active')) {
  a2 = a2+1;
 }
 else if ($("#b1").hasClass('input-active')) {
  b1 = b1+1;
 }
 else if ($("#b2").hasClass('input-active')) {
  b2 = b2+1;
 }
 else if ($("#c1").hasClass('input-active')) {
  c1 = c1+1;
 }
 else if ($("#c2").hasClass('input-active')) {
  c2 = c2+1;
 }
 else if ($("#d1").hasClass('input-active')) {
  d1 = d1+1;
 }
 else if ($("#d2").hasClass('input-active')) {
  d2 = d2+1;
 }
});

// When pin is picked up, -1 from active input
$('body').on("click", ".down", function() {
 if ($("#a1").hasClass('input-active')) {
  a1 = a1-1;
 }
 else if ($("#a2").hasClass('input-active')) {
  a2 = a2-1;
 }
 else if ($("#b1").hasClass('input-active')) {
  b1 = b1-1;
 }
 else if ($("#b2").hasClass('input-active')) {
  b2 = b2-1;
 }
 else if ($("#c1").hasClass('input-active')) {
  c1 = c1-1;
 }
 else if ($("#c2").hasClass('input-active')) {
  c2 = c2-1;
 }
 else if ($("#d1").hasClass('input-active')) {
  d1 = d1-1;
 }
 else if ($("#d2").hasClass('input-active')) {
  d2 = d2-1;
 }
});