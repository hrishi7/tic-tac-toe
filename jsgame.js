let options = ["x", "o"];

//0 machine
//1 human

function getRandomSign() {
  return Math.round(Math.random());
}
let index = getRandomSign();
let turn = index;

let sign = options[index];
let disp = document.getElementById("player");
let isko = "";

if (turn == 0) {
  playmachine();
}
function playmachine() {
  let num = Math.floor(Math.random() * 9) + 1;
  printx(num);
}

function printx(number) {
  console.log(turn);
  let isko = document.getElementById("r" + number);

  if (isko.innerText == "") {
    isko.innerText = sign;
    winner();
    checksign();
    turn == 1 ? (turn = 0) : (turn = 1);
    let user = turn?"User":"Computer";
    disp.innerHTML = "<center>" + "turn of "+user + " sign " + sign + "</center>";

    if (turn == 0) {
      playmachine();
    }
  } else {
    if (turn == 0) {
      playmachine();
    }
  }
}
function checksign() {
  if (sign == "x") sign = "o";
  else sign = "x";
}
function getbox(no) {
  return document.getElementById("r" + no).innerHTML;
}
function checkmove(a, b, c, m) {
  if (getbox(a) == m && getbox(b) == m && getbox(c) == m) return true;
  else return false;
}

function winner() {
  if (
    checkmove(1, 2, 3, sign) ||
    checkmove(4, 5, 6, sign) ||
    checkmove(7, 8, 9, sign) ||
    checkmove(1, 4, 7, sign) ||
    checkmove(2, 5, 8, sign) ||
    checkmove(3, 6, 9, sign) ||
    checkmove(1, 5, 9, sign) ||
    checkmove(7, 5, 3, sign)
  ) {
    let user = turn?"User":"Computer";
    alert('winner is ' + user);
    // disp.innerHTML = "<center> winner is " +  + sign + " jit gya" + "</center>";
    for (let i = 1; i <= 9; i++) {
      document.getElementById("r" + i).innerHTML = "";
    }
    resetPage();
  } else {
    if (
      getbox(1) != "" &&
      getbox(2) != "" &&
      getbox(3) != "" &&
      getbox(4) != "" &&
      getbox(5) != "" &&
      getbox(6) != "" &&
      getbox(7) != "" &&
      getbox(8) != "" &&
      getbox(9) != ""
    ) {
      disp.innerHTML = "<center> its a tie </center>";
    //   resetPage();
    }
  }
}

function resetPage() {
  disp.innerHTML = "<center> lets play </center>";
  for (let i = 1; i <= 9; i++) {
    document.getElementById("r" + i).innerHTML = "";
  }
  let index = getRandomSign();
  sign = options[index];
}
