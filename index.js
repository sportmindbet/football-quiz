function solo() {
  var z = document.getElementById('ctgrs');
  if (z.style.display === "none") {
    z.style.display = "flex";
  } else {
    z.style.display = "none";
  }
}

function play(number, btn) {
  var x = document.getElementById(number);
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  document.getElementById(btn).disabled = 'true';
  solo();
}

function play1(number, btn) {
  var x = document.getElementById(number);
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  document.getElementById(btn).disabled = 'true';
}

function next(num) {
  var z = document.getElementById('ctgrs');
  if (z.style.display === "none") {
    z.style.display = "flex";
  } else {
    z.style.display = "none";
  }
  var x = document.getElementById(num);
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

var i = 0;
var score1 = document.getElementById('s1');
var score2 = document.getElementById('s2');
score1 = 0;
score2 = 0;
var winner = '';

function correct(btn1, btn2, btn3, nq, ca, s) {
  document.getElementById(btn1).disabled = true;
  document.getElementById(btn2).disabled = true;
  document.getElementById(btn3).disabled = true;
  document.getElementById(ca).style.backgroundColor = 'rgb(46, 204, 64)';
  var x = document.getElementById(nq);
  x.style.display = "block";
  i++;
  
  if (i % 2 !== 0) {
    score1 += s;
    document.getElementById('s1').innerHTML = "ΠΑΙΚΤΗΣ 1: " + score1;
    document.getElementById('turn').innerHTML = 'ΠΑΙΖΕΙ Ο ΠΑΙΚΤΗΣ 2';
  } else {
    score2 += s;
    document.getElementById('s2').innerHTML = "ΠΑΙΚΤΗΣ 2: " + score2;
    document.getElementById('turn').innerHTML = 'ΠΑΙΖΕΙ Ο ΠΑΙΚΤΗΣ 1';
  }
  
  if (i >= 16) {
    if (score1 > score2) {
      winner = 'ΝΙΚΗΤΗΣ: ΠΑΙΚΤΗΣ 1';
    } else if (score2 > score1) {
      winner = 'ΝΙΚΗΤΗΣ: ΠΑΙΚΤΗΣ 2';
    } else {
      winner = 'ΙΣΟΠΑΛΙΑ';
    }
    document.getElementById('result').innerHTML = winner;
    document.getElementById('result').style.display = "flex";
    document.getElementById('quiz').style.display = "none";
  }
}

function changeButtonText(newText, btn) {
  
  var button = document.getElementById(btn);

  button.innerHTML = newText;
}

function resetPage() {
  location.reload();
}




