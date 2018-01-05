/**
 * Set variables for each ball
 */

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
 * Print value of variables whenever a pin is clicked
 */

// Note: must use .on approach so this runs after the other pin functions in main.js
$('body').on("click", ".pin, #gutterBtn", function updateInputs() {
  $("#a1-input").html(a1);
  $("#a2-input").html(a2);
  $("#b1-input").html(b1);
  $("#b2-input").html(b2);
  $("#c1-input").html(c1);
  $("#c2-input").html(c2);
  $("#d1-input").html(d1);
  $("#d2-input").html(d2);
  $("#e1-input").html(e1);
  $("#e2-input").html(e2);
  $("#f1-input").html(f1);
  $("#f2-input").html(f2);
  $("#g1-input").html(g1);
  $("#g2-input").html(g2);
  $("#h1-input").html(h1);
  $("#h2-input").html(h2);
  $("#i1-input").html(i1);
  $("#i2-input").html(i2);
  $("#j1-input").html(j1);
  $("#j2-input").html(j2);
  $("#j3-input").html(j3);
});

/**
 * Calculate frame scores whenever prevBtn or nextBtn is clicked
 */

$("#nextBtn, #prevBtn").click(function calcAllScores() {
  // Calculate result of frame one. Consider strikes & spares.
  function calcFrameOne() {
    if (a1 === 10 && b1 === 10 && c1) {
      return a1 !== null + b1 !== null + c1 !== null;
    } else if (a1 === 10 && b1 && b2) {
      return a1 + b1 + b2;
    } else if (a1 !== null && a2 !== null && a1 + a2 === 10 && b1) {
      return a1 + a2 + b1;
    } else if (a1 !== null && a2 !== null && a1 + a2 < 10) {
      return a1 + a2;
    } else {
      return null;
    }
  }
  // Calculate result of frame two. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameTwo() {
    if (b1 === 10 && c1 === 10 && d1) {
      const score = b1 + c1 + d1;
      return score + frameOneScore;
    } else if (b1 === 10 && c1 && c2) {
      const score = b1 + c1 + c2;
      return score + frameOneScore;
    } else if (b1 && b2 && b1 + b2 === 10 && c1) {
      const score = b1 + b2 + c1;
      return score + frameOneScore;
    } else if (b1 && b2 && b1 + b2 < 10) {
      const score = b1 + b2;
      return score + frameOneScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame three. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameThree() {
    if (c1 === 10 && d1 === 10 && e1) {
      const score = c1 + d1 + e1;
      return score + frameTwoScore;
    } else if (c1 === 10 && d1 && d2) {
      const score = c1 + d1 + d2;
      return score + frameTwoScore;
    } else if (c1 && c2 && c1 + c2 === 10 && d1) {
      const score = c1 + c2 + d1;
      return score + frameTwoScore;
    } else if (c1 && c2 && c1 + c2 < 10) {
      const score = c1 + c2;
      return score + frameTwoScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame four. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameFour() {
    if (d1 === 10 && e1 === 10 && f1) {
      const score = d1 + e1 + f1;
      return score + frameThreeScore;
    } else if (d1 === 10 && e1 && e2) {
      const score = d1 + e1 + e2;
      return score + frameThreeScore;
    } else if (d1 && d2 && d1 + d2 === 10 && e1) {
      const score = d1 + d2 + e1;
      return score + frameThreeScore;
    } else if (d1 && d2 && d1 + d2 < 10) {
      const score = d1 + d2;
      return score + frameThreeScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame five. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameFive() {
    if (e1 === 10 && f1 === 10 && g1) {
      const score = e1 + f1 + g1;
      return score + frameFourScore;
    } else if (e1 === 10 && f1 && f2) {
      const score = e1 + f1 + f2;
      return score + frameFourScore;
    } else if (e1 && e2 && e1 + e2 === 10 && f1) {
      const score = e1 + e2 + f1;
      return score + frameFourScore;
    } else if (e1 && e2 && e1 + e2 < 10) {
      const score = e1 + e2;
      return score + frameFourScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame six. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameSix() {
    if (f1 === 10 && g1 === 10 && h1) {
      const score = f1 + g1 + h1;
      return score + frameFiveScore;
    } else if (f1 === 10 && g1 && g2) {
      const score = f1 + g1 + g2;
      return score + frameFiveScore;
    } else if (f1 && f2 && f1 + f2 === 10 && g1) {
      const score = f1 + f2 + g1;
      return score + frameFiveScore;
    } else if (f1 && f2 && f1 + f2 < 10) {
      const score = f1 + f2;
      return score + frameFiveScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame seven. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameSeven() {
    if (g1 === 10 && h1 === 10 && i1) {
      const score = g1 + h1 + i1;
      return score + frameSixScore;
    } else if (g1 === 10 && h1 && h2) {
      const score = g1 + h1 + h2;
      return score + frameSixScore;
    } else if (g1 && g2 && g1 + g2 === 10 && h1) {
      const score = g1 + g2 + h1;
      return score + frameSixScore;
    } else if (g1 && g2 && g1 + g2 < 10) {
      const score = g1 + g2;
      return score + frameSixScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame eight. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameEight() {
    if (h1 === 10 && i1 === 10 && j1) {
      const score = h1 + i1 + j1;
      return score + frameSevenScore;
    } else if (h1 === 10 && i1 && i2) {
      const score = h1 + i1 + i2;
      return score + frameSevenScore;
    } else if (h1 && h2 && h1 + h2 === 10 && i1) {
      const score = h1 + h2 + i1;
      return score + frameSevenScore;
    } else if (h1 && h2 && h1 + h2 < 10) {
      const score = h1 + h2;
      return score + frameSevenScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame nine. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameNine() {
    if (i1 === 10 && j1 === 10 && j3) {
      const score = i1 + j1 + j3;
      return score + frameEightScore;
    } else if (i1 === 10 && j1 && j2) {
      const score = i1 + j1 + j2;
      return score + frameEightScore;
    } else if (i1 && i2 && i1 + i2 === 10 && j1) {
      const score = i1 + i2 + j1;
      return score + frameEightScore;
    } else if (i1 && i2 && i1 + i2 < 10) {
      const score = i1 + i2;
      return score + frameEightScore;
    } else {
      return null;
    }
  }
  // Calculate result of frame ten. Consider strikes & spares. Add to sum of previous frames.
  function calcFrameTen() {
    if (j1 === 10 && j2 === 10 && j3) {
      const score = j1 + j2 + j3;
      return score + frameNineScore;
    } else if (j1 === 10 && j2 && j3) {
      const score = j1 + j2 + j3;
      return score + frameNineScore;
    } else if (j1 && j2 && j1 + j2 === 10 && j3) {
      const score = j1 + j2 + j3;
      return score + frameNineScore;
    } else if (j1 && j2 && j1 + j2 < 10) {
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











