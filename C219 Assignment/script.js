$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#6C88C4', '#6C88C4', '#6C88C4', '#6C88C4'],
        navigation: false,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3'],
    });
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
});


function getData() {
    var name = document.getElementById("name").value;
    document.getElementById("display").innerHTML = "Welcome " + name + "!";
}

function myFunction() {
  document.getElementById("wrong").innerHTML = "Try Again!";
}

function myCorrect() {
  document.getElementById("correct").innerHTML = "Correct!";
}

anime({
    targets: car,
    translateX: 250,
    direction: 'alternate',
    loop: true,
    easing: 'spring(1, 10, 10, 0)'
})

// Wrap every letter in a span
var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.title .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 15 * i
  }).add({
    targets: '.title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

var circleAnimation = anime({
    targets: button,
    scale: ["0.8", "1.4"],
    opacity: ["1", 0],
    easing: "easeOutCubic",
    duration: 2000,
    loop: true
});

anime({
    targets: stlevel,
    translateY: 20,
    direction: 'alternate',
    loop: true,
    duration: 1,
    easing: 'spring(1, 10, 10, 0)'
})

anime({
    targets: round,
    rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine',
    },
    scale: {
        value: 1,
        duration: 1700,
        delay: 1000,
        easing: 'easeInOutQuart'
      },
      delay: 900,
      loop:true
})

anime({
  targets: bicycle,
  translateX: 250,
  direction: 'alternate',
  loop: true,
  easing: 'spring(1, 10, 10, 0)'
})

var myQuestions = [{
  question: "What is the correct bicycle part?",
  answers: ["Engine", "Radiator", "Exhaust", "Alternator"],
  correct: "Pedal"
}, {
  question: "How many wheels on a bicycle?",
  answers: ["1", "10", "3", "4"],
  correct: "2"
}, {
  question: "Should you wear a bike helmet?",
  answers: ["Sometimes", "Never", "Seldom", "Depends"],
  correct: "Always"
}, {
  question: "What does a kickstand used for?",
  answers: ["Hang on the wall", "Do stuns", "Make your bike go faster", "Easier to pedal"],
  correct: "Bike to be kept upright"
}, {
  question: "What do you call when someone is riding a bike?",
  answers: ["Pedestrian", "Driver", "Skater", "Racer"],
  correct: "Cylist"
}];

var myQuiz = new ysQuiz(myQuestions);


















