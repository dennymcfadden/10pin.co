$(function(){
  //focus first input fields
  $(".rollInput:first").focus();
  var currentFocusedInput = $(".rollInput:first");

  // next button
  $("#nextBtn").click(function(){
     var nextInputToFocus = currentFocusedInput.next('.rollInput');
     if($(nextInputToFocus).length > 0)
      {
        currentFocusedInput = $(nextInputToFocus);
      }
      $(currentFocusedInput).focus();
  });

  // previous button
  $("#prevBtn").click(function(){
     var prevInputToFocus = currentFocusedInput.prev('.rollInput');
     if($(prevInputToFocus).length > 0)
      {
        currentFocusedInput = $(prevInputToFocus);
      }
      $(currentFocusedInput).focus();
  });
});



$("#submit").click(function() {
    // Set variable for each ball where A/B/C refers to the frame #, and 1/2 refers to the ball #.
    const a1 = parseInt($("#a1").val());
    const a2 = parseInt($("#a2").val());
    const b1 = parseInt($("#b1").val());
    const b2 = parseInt($("#b2").val());
    const c1 = parseInt($("#c1").val());
    const c2 = parseInt($("#c2").val());
    const d1 = parseInt($("#d1").val());
    const d2 = parseInt($("#d2").val());
    const e1 = parseInt($("#e1").val());
    const e2 = parseInt($("#e2").val());
    const f1 = parseInt($("#f1").val());
    const f2 = parseInt($("#f2").val());
    const g1 = parseInt($("#g1").val());
    const g2 = parseInt($("#g2").val());
    const h1 = parseInt($("#h1").val());
    const h2 = parseInt($("#h2").val());
    const i1 = parseInt($("#i1").val());
    const i2 = parseInt($("#i2").val());
    const j1 = parseInt($("#j1").val());
    const j2 = parseInt($("#j2").val());
    const j3 = parseInt($("#j3").val());

    // Calculate result of frame one. Consider strikes & spares.
    function calcFrameOne() {
      if (a1===10 && b1===10 && c1) {
        return a1+b1+c1;
      } else if (a1===10 && b1 && b2) {
        return a1+b1+b2;
      } else if (a1+a2===10 && b1) {
        return a1+a2+b1;
      } else if (a1 && a2 && a1+a2<10) {
        return a1+a2;
      } else {
        return '';
      }
    }

    // Calculate result of frame two. Consider strikes & spares. Add to sum of previous frames.
    function calcFrameTwo() {
      if (b1===10 && c1===10 && d1) {
        const score = b1+c1+d1;
        return score + frameOneScore;
      } else if (b1===10 && c1 && c2) {
        const score = b1+c1+c2;
        return score + frameOneScore;
      } else if (b1+b2===10 && c1) {
        const score = b1+b2+c1;
        return score + frameOneScore;
      } else if (b1 && b2 && b1+b2<10) {
        const score = b1+b2;
        return score + frameOneScore;
      } else {
        return '';
      }
    }

    // Calculate result of frame three. Consider strikes & spares. Add to sum of previous frames.
    function calcFrameThree() {
      if (c1===10 && d1===10 && e1) {
        const score = c1+d1+e1;
        return score + frameTwoScore;
      } else if (c1===10 && d1 && d2) {
        const score = c1+d1+d2;
        return score + frameTwoScore;
      } else if (c1+c2===10 && d1) {
        const score = c1+c2+d1;
        return score + frameTwoScore;
      } else if (c1 && c2 && c1+c2<10) {
        const score = c1 + c2;
        return score + frameTwoScore;
      } else {
        return '';
      }
    }

    // Calculate result of frame four. Consider strikes & spares. Add to sum of previous frames.
    function calcFrameFour() {
      if (d1===10 && e1===10 && f1) {
        const score = d1+e1+f1;
        return score + frameThreeScore;
      } else if (d1===10 && e1 && e2) {
        const score = d1+e1+e2;
        return score + frameThreeScore;
      } else if (d1+d2===10 && e1) {
        const score = d1+d2+e1;
        return score + frameThreeScore;
      } else if (d1 && d2 && d1+d2<10) {
        const score = d1+d2;
        return score + frameThreeScore;
      } else {
        return '';
      }
    }

    // Calculate result of frame five. Consider strikes & spares. Add to sum of previous frames.
    function calcFrameFive() {
      if (e1===10 && f1===10 && g1) {
        const score = e1+f1+g1;
        return score + frameFourScore;
      } else if (e1===10 && f1 && f2) {
        const score = e1+f1+f2;
        return score + frameFourScore;
      } else if (e1+e2===10 && f1) {
        const score = e1+e2+f1;
        return score + frameFourScore;
      } else if (e1 && e2 && e1+e2<10) {
        const score = e1+e2;
        return score + frameFourScore;
      } else {
        return '';
      }
    }

    // Calculate result of frame six. Consider strikes & spares. Add to sum of previous frames.
    function calcFrameSix() {
      if (f1===10 && g1===10 && h1) {
        const score = f1+g1+h1;
        return score + frameFiveScore;
      } else if (f1===10 && g1 && g2) {
        const score = f1+g1+g2;
        return score + frameFiveScore;
      } else if (f1+f2===10 && g1) {
        const score = f1+f2+g1;
        return score + frameFiveScore;
      } else if (f1 && f2 && f1+f2<10) {
        const score = f1+f2;
        return score + frameFiveScore;
      } else {
        return '';
      }
    }

    // Calculate result of frame seven. Consider strikes & spares. Add to sum of previous frames.
    function calcFrameSeven() {
      if (g1===10 && h1===10 && i1) {
        const score = g1+h1+i1;
        return score + frameSixScore;
      } else if (h1===10 && h1 && h2) {
        const score = g1+h1+h2;
        return score + frameSixScore;
      } else if (g1+g2===10 && h1) {
        const score = g1+g2+h1;
        return score + frameSixScore;
      } else if (g1 && g2 && g1+g2<10) {
        const score = g1+g2;
        return score + frameSixScore;
      } else {
        return '';
      }
    }

    // Calculate result of frame eight. Consider strikes & spares. Add to sum of previous frames.
    function calcFrameEight() {
      if (h1===10 && i1===10 && j1) {
        const score = h1+i1+j1;
        return score + frameSevenScore;
      } else if (h1===10 && i1 && i2) {
        const score = h1+i1+i2;
        return score + frameSevenScore;
      } else if (h1+h2===10 && i1) {
        const score = h1+h2+i1;
        return score + frameSevenScore;
      } else if (h1 && h2 && h1+h2<10) {
        const score = h1+h2;
        return score + frameSevenScore;
      } else {
        return '';
      }
    }

    // Calculate result of frame nine. Consider strikes & spares. Add to sum of previous frames.
    function calcFrameNine() {
      if (i1===10 && j1===10 && j3) {
        const score = i1+j1+j3;
        return score + frameEightScore;
      } else if (i1===10 && j1 && j2) {
        const score = i1+j1+j2;
        return score + frameEightScore;
      } else if (i1+i2===10 && j1) {
        const score = i1+i2+j1;
        return score + frameEightScore;
      } else if (i1 && i2 && i1+i2<10) {
        const score = i1+i2;
        return score + frameEightScore;
      } else {
        return '';
      }
    }

    // Calculate result of frame ten. Consider strikes & spares. Add to sum of previous frames.
    function calcFrameTen() {
      if (j1===10 && j2===10 && j3) {
        const score = j1+j2+j3;
        return score + frameNineScore;
      } else if (j1===10 && j2 && j3) {
        const score = j1+j2+j3;
        return score + frameNineScore;
      } else if (j1+j2===10 && j3) {
        const score = j1+j2+j3;
        return score + frameNineScore;
      } else if (j1 && j2 && j1+j2<10) {
        const score = j1+j2;
        return score + frameNineScore;
      } else {
        return '';
      }
    }

    // Store results of calcFrame{X} functions in variables.
    var frameOneScore = calcFrameOne();
    var frameTwoScore = calcFrameTwo();
    var frameThreeScore = calcFrameThree();
    var frameFourScore = calcFrameFour();
    var frameFiveScore = calcFrameFive();
    var frameSixScore = calcFrameSix();
    var frameSevenScore = calcFrameSeven();
    var frameEightScore = calcFrameEight();
    var frameNineScore = calcFrameNine();
    var frameTenScore = calcFrameTen();

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
        return '0';
      }
    }

    // Calculate maximum potential score.
    function maxScore() {
      if (frameTenScore) {
        return frameTenScore;
      } else if (frameNineScore) {
        return frameNineScore + (30*1);
      } else if (frameEightScore) {
        return frameEightScore + (30*2);
      } else if (frameSevenScore) {
        return frameSevenScore + (30*3);
      } else if (frameSixScore) {
        return frameSixScore + (30*4);
      } else if (frameFiveScore) {
        return frameFiveScore + (30*5);
      } else if (frameFourScore) {
        return frameFourScore + (30*6);
      } else if (frameThreeScore) {
        return frameThreeScore + (30*7);
      } else if (frameTwoScore) {
        return frameTwoScore + (30*8);
      } else if (frameOneScore) {
        return frameOneScore + (30*9);
      } else {
        return '300';
      }
    }

    // Print results to page.
    $("#frameOneScore").html(frameOneScore);
    $("#frameTwoScore").html(frameTwoScore);
    $("#frameThreeScore").html(frameThreeScore);
    $("#frameFourScore").html(frameFourScore);
    $("#frameFiveScore").html(frameFiveScore);
    $("#frameSixScore").html(frameSixScore);
    $("#frameSevenScore").html(frameSevenScore);
    $("#frameEightScore").html(frameEightScore);
    $("#frameNineScore").html(frameNineScore);
    $("#frameTenScore").html(frameTenScore);
    $("#currentScore").html(currentScore);
    $("#maxScore").html(maxScore);

});