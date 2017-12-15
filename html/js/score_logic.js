// When the value in #roll changes
$('#roll').change(function() {
 // Get the result from the dropdown
 const rollResult = $(this).val();
 // Set the global variable A1?
});



// Variable for each ball where A/B/C refers to the frame #, and 1/2 refers to the ball #.
let A1 = 5;
let A2 = 5;
let B1 = 3;
let B2 = 2;
let C1 = '';
let C2 = '';
let D1 = '';
let D2 = '';
let E1 = '';
let E2 = '';
let F1 = '';
let F2 = '';
let G1 = '';
let G2 = '';
let H1 = '';
let H2 = '';
let I1 = '';
let I2 = '';
let J1 = '';
let J2 = '';
let K1 = '';
let K2 = '';



// Calculates results of frame one, taking into account strikes & spares.
function calcFrameOne() {
  if (A1===10 && B1===10 && C1) {
    return A1+B1+C1;
  } else if (A1===10 && B1 && B2) {
    return A1+B1+B2;
  } else if (A1+A2===10 && B1) {
    return A1+A2+B1;
  } else if (A1 && A2 && A1+A2<10) {
    return A1+A2;
  } else {
    return '';
  }
}



// Calculates results of frame two, taking into account strikes & spares.
function calcFrameTwo() {
  if (B1===10 && C1===10 && D1) {
    return B1+C1+D1;
  } else if (B1===10 && C1 && C2) {
    return B1+C1+C2;
  } else if (B1+B2===10 && C1) {
    return B1+B2+C1;
  } else if (B1 && B2 && B1+B2<10) {
    return B1+B2;
  } else {
    return '';
  }
}



// Calculates results of frame three, taking into account strikes & spares.
function calcFrameThree() {
  if (C1===10 && D1===10 && E1) {
    return C1+D1+E1;
  } else if (C1===10 && D1 && D2) {
    return C1+D1+D2;
  } else if (C1+C2===10 && D1) {
    return C1+C2+D1;
  } else if (C1 && C2 && C1+C2<10) {
    return C1 + C2;
  } else {
    return '';
  }
}



// Calculates results of frame four, taking into account strikes & spares.
function calcFrameFour() {
  if (D1===10 && E1===10 && F1) {
    return D1+E1+F1;
  } else if (D1===10 && E1 && E2) {
    return D1+E1+E2;
  } else if (D1+D2===10 && E1) {
    return D1+D2+E1;
  } else if (D1 && D2 && D1+D2) {
    return D1+D2<10;
  } else {
    return '';
  }
}



// Calculates results of frame five, taking into account strikes & spares.
function calcFrameFive() {
  if (E1===10 && F1===10 && G1) {
    return E1+F1+G1;
  } else if (E1===10 && F1 && F2) {
    return E1+F1+F2;
  } else if (E1+E2===10 && F1) {
    return E1+E2+F1;
  } else if (E1 && E2 && E1+E2) {
    return E1+E2<10;
  } else {
    return '';
  }
}



// Calculates results of frame six, taking into account strikes & spares.
function calcFrameSix() {
  if (F1===10 && G1===10 && H1) {
    return F1+G1+H1;
  } else if (F1===10 && G1 && G2) {
    return F1+G1+G2;
  } else if (F1+F2===10 && G1) {
    return F1+F2+G1;
  } else if (F1 && F2 && F1+F2<10) {
    return F1+F2;
  } else {
    return '';
  }
}



// Calculates results of frame seven, taking into account strikes & spares.
function calcFrameSeven() {
  if (G1===10 && H1===10 && I1) {
    return G1+H1+I1;
  } else if (G1===10 && H1 && H2) {
    return G1+H1+H2;
  } else if (G1+G2===10 && H1) {
    return G1+G2+H1;
  } else if (G1 && G2 && G1+G2<10) {
    return G1+G2;
  } else {
    return '';
  }
}



// Calculates results of frame eight, taking into account strikes & spares.
function calcFrameEight() {
  if (H1===10 && I1===10 && J1) {
    return H1+I1+J1;
  } else if (H1===10 && I1 && I2) {
    return H1+I1+I2;
  } else if (H1+H2===10 && I1) {
    return H1+H2+I1;
  } else if (H1 && H2 && H1+H2<10) {
    return H1+H2;
  } else {
    return '';
  }
}



// Calculates results of frame nine, taking into account strikes & spares.
function calcFrameNine() {
  if (I1===10 && J1===10 && K1) {
    return I1+J1+K1;
  } else if (I1===10 && J1 && J2) {
    return I1+J1+J2;
  } else if (I1+I2===10 && J1) {
    return I1+I2+J1;
  } else if (I1 && I2 && I1+I2<10) {
    return I1+I2;
  } else {
    return '';
  }
}


// Sets variable for each frame's score which equals the output of the calculate frame score function. 
let frameOneScore = calcFrameOne()
let frameTwoScore = calcFrameTwo()
let frameThreeScore = calcFrameThree()
let frameFourScore = calcFrameFour()
let frameFiveScore = calcFrameFive()
let frameSixScore = calcFrameSix()
let frameSevenScore = calcFrameSeven()
let frameEightScore = calcFrameEight()
let frameNineScore = calcFrameNine()
let totalScore = calcTotalScore()



// Calculates total score of completed frames.
function calcTotalScore() {
  if (frameNineScore) {
    return frameEightScore + frameSevenScore + frameSixScore + frameFiveScore + frameFourScore + frameThreeScore + frameTwoScore + frameOneScore;
  } else if (frameEightScore) {
    return frameSevenScore + frameSixScore + frameFiveScore + frameFourScore + frameThreeScore + frameTwoScore + frameOneScore;
  } else if (frameSevenScore) {
    return frameSixScore + frameFiveScore + frameFourScore + frameThreeScore + frameTwoScore + frameOneScore;
  } else if (frameSixScore) {
    return frameFiveScore + frameFourScore + frameThreeScore + frameTwoScore + frameOneScore;
  } else if (frameFiveScore) {
    return frameFourScore + frameThreeScore + frameTwoScore + frameOneScore;
  } else if (frameFourScore) {
    return frameThreeScore + frameTwoScore + frameOneScore;
  } else if (frameThreeScore) {
    return frameTwoScore + frameOneScore;
  } else if (frameTwoScore) {
    return frameOneScore;
  }
}


// Prints total score + frame score once frame score score exists.
function printFrameOne () {
  if (frameOneScore) {
      console.log (`Frame One: ` + frameOneScore);
  } else {
      console.log (`Frame One: Incomplete`);
  } 
}
function printFrameTwo () {
  if (frameTwoScore) {
      console.log (`Frame Two: ` + (frameTwoScore + totalScore));
  } else {
      console.log (`Frame Two: Incomplete`);
  } 
}
function printFrameThree () {
  if (frameThreeScore) {
      console.log (`Frame Three: ` + (frameThreeScore + totalScore));
  } else {
      console.log (`Frame Three: Incomplete`);
  } 
}
function printFrameFour () {
  if (frameFourScore) {
      console.log (`Frame Four: ` + (frameFourScore + totalScore));
  } else {
      console.log (`Frame Four: Incomplete`);
  } 
}
function printFrameFive () {
  if (frameFiveScore) {
      console.log (`Frame Five: ` + (frameFiveScore + totalScore));
  } else {
      console.log (`Frame Five: Incomplete`);
  } 
}
function printFrameSix () {
  if (frameSixScore) {
      console.log (`Frame Six: ` + (frameSixScore + totalScore));
  } else {
      console.log (`Frame Six: Incomplete`);
  } 
}
function printFrameSeven () {
  if (frameSevenScore) {
      console.log (`Frame Seven: ` + (frameSevenScore + totalScore));
  } else {
      console.log (`Frame Seven: Incomplete`);
  } 
}
function printFrameEight () {
  if (frameEightScore) {
      console.log (`Frame Eight: ` + (frameEightScore + totalScore));
  } else {
      console.log (`Frame Eight: Incomplete`);
  } 
}
function printFrameNine () {
  if (frameNineScore) {
      console.log (`Frame Nine: ` + (frameNineScore + totalScore));
  } else {
      console.log (`Frame Nine: Incomplete`);
  } 
}



// Prints scores to console.
printFrameOne()
printFrameTwo()
printFrameThree()
printFrameFour()
printFrameFive()
printFrameSix()
printFrameSeven()
printFrameEight()
printFrameNine()
