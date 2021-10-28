// code for countdown timer
var deadline = new Date("Oct 11, 2021 22:52:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days ;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
  if (t < 0) {
    clearInterval(x);
      // make after text appear
    document.getElementById("timeOver").style.display = "block";
    document.getElementById("timeOver").innerHTML = "IT'S FINALLY YOUR BIRTHDAY!!!!!!";
      // put the clock at 0
    document.getElementById("day").innerHTML ='0';
    document.getElementById("hour").innerHTML ='0';
    document.getElementById("minute").innerHTML ='0' ;
    document.getElementById("second").innerHTML = '0';
      // make button appear
    document.getElementById("button").style.display = "block";
    document.getElementById("button").innerHTML = "YOU CAN CLICK ME NOW!!!!!!";
  }
}, 1000);

function fade_beginning() {
  document.getElementById('header').animate({opacity: '0'}, 2000);
  document.getElementById('clockdiv').animate({opacity: '0'}, 2000);
  document.getElementById('timeOver').animate({opacity: '0'}, 2000);
  document.getElementById('button').animate({opacity: '0'}, 2000);
  document.getElementById("button").style.cursor = 'default';
}

function hide_beginning() {
  header.style.display = 'none';
  clockdiv.style.display = 'none';
  timeOver.style.display = 'none';
  button.style.display = 'none';
}

function showGallery() {
  gallery.style.display = 'block';
}

function showBox() {
  presentBox.style.display = 'block';
}

function box_wobble() {
  cover.classList.add('fastWobble');
  box.classList.add('slowWobble');
  giftbox.style.cursor = 'default';
}

function box_fly() {
  cover.classList.remove('fastWobble');
  cover.classList.add('fly-up');
  box.classList.remove('slowWobble');
}

function hide_cover() {
  cover.classList.remove('fly-up');
  cover.style.display = 'none';
  box.classList.add('fly-down');
}

function hide_box() {
  box.classList.remove('slowWobble');
  box.classList.remove('fly-down');
  presentBox.style.display = 'none';
}

function displayBirthday() {
  document.getElementById('birthday').style.display = 'block';
}

function displayMessage() {
  document.getElementById('message').style.display = 'block';
  document.getElementById('heartsPart1').style.display = 'block';
  document.getElementById('heartsPart2').style.display = 'block';
  // setTimeout(function() {
  //   document.getElementById('message').style.display = 'block';
  // }, 4000);
}

  // create message with span tags
var id = document.getElementById("row1");
var msg = "I Love You";
var i = 0, length = msg.length;
for (i; i < length; i++) {
    id.innerHTML += "<span>" + msg[i] + "</span>";
}
var id = document.getElementById("row2");
var msg = "Donut!!!";
var i = 0, length = msg.length;
for (i; i < length; i++) {
  if (i == 0) {
    id.innerHTML += "<span>" + "&hearts;" + "</span>";
  }
  id.innerHTML += "<span>" + msg[i] + "</span>";
  if (i == length-1) {
    id.innerHTML += "<span>" + "&hearts;" + "</span>";
  }
}
var id = document.getElementById("row3");
var msg = "Happy Birthday";
var i = 0, length = msg.length;
for (i; i < length; i++) {
  id.innerHTML += "<span>" + msg[i] + "</span>";
}
var id = document.getElementById("row4");
var msg = "Hope You Have the Best Birthday Ever!!";
var i = 0, length = msg.length;
for (i; i < length; i++) {
  id.innerHTML += "<span>" + msg[i] + "</span>";
}
for (var i = 0; i < 6; i=i+2) {
  var id = document.getElementById("heartRow" + i);
  var msg = "&hearts;&nbsp;&nbsp;&#127849;&nbsp;&nbsp;"
  id.innerHTML += "<span>" + msg.repeat(20) + "</span>";
}
for (var i = 1; i < 6; i=i+2) {
  var id = document.getElementById("heartRow" + i);
  var msg = "&nbsp;&nbsp;&hearts;&nbsp;&nbsp;&#127849;"
  id.innerHTML += "<span>" + "&nbsp;" + msg.repeat(20) + "</span>";
}

setInterval(function() {
    // Gallery
  var check1 = document.getElementById("gallery");
  if (check1.style.display == 'block') {
    setTimeout(function() {
      gallery.animate({opacity: '0'}, 1000);
    }, 14000);
    setTimeout(function() {
      gallery.style.display = "none"
    }, 15000)
    setTimeout(function() {
      displayBirthday();
    }, 15500)
  }
    // Birthday message
  var check2 = document.getElementById("birthday");
  if (check2.style.display == 'block') {
    setTimeout(function() {
      row1.classList.add('textLeft');
      row2.classList.add('textRight');
    }, 5000);
    setTimeout(function() {
      row1.style.display = 'none';
      row2.style.display = 'none';
      row1.classList.remove('textLeft');
      row2.classList.remove('textRight');
      birthday.style.display = 'none';
    }, 7000);
    setTimeout(function() {
      displayMessage();
    }, 7500);
  }
    // Special message
  // var check3 = document.getElementById("message");
  // if (check3.style.display == 'block') {
  //   setTimeout(function() {
  //
  //   }, 2000);
  // }
}, 1000);
