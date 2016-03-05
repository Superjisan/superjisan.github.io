angular.module('happyBirthdayApp', [
    'ngCookies',
    'ngResource',
    'ui.router'
])

if (document.cookie == "initanimate=false") {
  $("span.name").css("display", "inline-block");
  showEverything();
} else {
  setTimeout(function() {
    $("span.name").css("display", "inline-block");
    showEverything();
  }, 15000);
}



var rockyAudio = new Audio('./media/audio/roackytheme.mp3');
var windowWidth = $(window).width();
if (windowWidth > 320 && windowWidth < 480) {
  $(".rockyfa").removeClass("hidden");
} else {
  playRocky();
  setTimeout(function() {
    if (rockyAudio.currentTime === 0) {
      pauseRocky();
    }
  }, 2000);
}


var fireworkAudio = new Audio('./media/audio/firework.mp3');
fireworkAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

rockyAudio.ontimeupdate = function() {
  if (document.cookie == "initanimate=false") {
    showFireworks();
  } else {
    var intTime = Math.floor(this.currentTime);
    if (intTime >= 30) {
      this.pause();
      showFireworks();
      $(".rockyfa").addClass("hidden");
      $(".rockyfapause").addClass("hidden");
    }
  }
}

function playRocky() {
  rockyAudio.play();
  $(".rockyfa").addClass("hidden");
  $(".rockyfapause").removeClass("hidden");
}

function pauseRocky() {
  rockyAudio.pause();
  $(".rockyfa").removeClass("hidden");
  $(".rockyfapause").addClass("hidden");
}

function showFireworks() {
  startFireworks();

  setTimeout(function() {
    fireworkAudio.play();
    display("pauseFireworks");
  }, 1000);
}


function showEverything() {
  display("greetChoice");
  display("choices");
}


function display(className) {
  $("." + className).css("display", "block");
}

function fireworksPause() {
  $(".pauseFireworks .fa-pause").addClass("hidden");
  $(".pauseFireworks .fa-play").removeClass("hidden");
  fireworkAudio.pause();
}

function fireworksPlay() {
  $(".pauseFireworks .fa-play").addClass("hidden");
  $(".pauseFireworks .fa-pause").removeClass("hidden");
  fireworkAudio.play();
}


var randomstuffs = [{
  type: "video",
  url: "https://www.youtube.com/embed/TPXWZxtDooY?html5=1",
  snippet: "The greatest rendition of holiday spirit I've ever seen"
}, {
  type: "picture",
  url: "http://s3-ec.buzzfed.com/static/2013-11/enhanced/webdr03/21/11/anigif_enhanced-buzz-27249-1385051166-6.gif",
  snippet: "This fella took not going to heaven with stride"
}, {
  type: "picture",
  url: "http://i.giphy.com/V8oqg8niJIYFO.gif",
  snippet: "Inappropriate for children much?"
}];


var currentRandomSelection = 0;

function randomtry() {
  var randomUrlArray = _.pluck(randomstuffs, "url");
  var currentUrl = randomstuffs[currentRandomSelection].url;
  var currentType = randomstuffs[currentRandomSelection].type;

  if (currentRandomSelection !== randomstuffs.length - 1) {
    currentRandomSelection++;
  } else {
    currentRandomSelection = 0;
  }

  var replacedType = randomstuffs[currentRandomSelection].type;
  var replacedUrl = randomstuffs[currentRandomSelection].url;
  var replacedSnippet = randomstuffs[currentRandomSelection].snippet;

  if (currentType !== replacedType) {
    $(".randomContent ." + currentType).addClass("hidden");
    $(".randomContent ." + replacedType).removeClass("hidden");
  }

  switch (replacedType) {
    case "video":
      $(".randomContent .youtube").attr('src', replacedUrl);
      $(".randomContent .video p.snippet").text(replacedSnippet);
      break;
    case "picture":
      $(".randomContent .picture img").attr("src", replacedUrl);
      $(".randomContent .picture p.snippet").text(replacedSnippet);
      break;
    case "audio":
      $(".randomContent audio source").attr("src", replacedUrl);
      $(".randomContent .audio p.snippet").text(replacedSnippet);
      break
    default:
      console.error("replacedType is not defined properly")
      break
  }

  //TODO: backend call to get random funny video/audio/image/link
}

var quotes = [{
  quote: "Rule #1 : It's going to be alright. There are really no other options.",
  author: "Anonymous"
}, {
  quote: "Violence is the last refuge of incompetence",
  author: "Isaac Asimov"
}, {
  quote: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
  author: "Margaret Meade"
}, {
  quote: " Don’t wait for something to be fully formed in your head to start on it. Just start, and then work it out as you go.",
  author: "Brendon Stanton"
}, {
  quote: "Your work doesn't stress over you. Therefore, there's no point in stressing over it. It just needs you to do it",
  author: "Anonymous"
}];

function quotetry() {
  var quoteArray = _.pluck(quotes, "quote");
  var parElem = $("blockquote p");
  var currentQuote = parElem.text();
  var currentQuoteIndex = quoteArray.indexOf(currentQuote);
  if (currentQuoteIndex !== quotes.length - 1) {
    var quoteToReplace = quotes[currentQuoteIndex + 1].quote;
    var authorToReplace = quotes[currentQuoteIndex + 1].author;
  } else {
    var quoteToReplace = quotes[0].quote;
    var authorToReplace = quotes[0].author;
  }
  var footerElem = $("blockquote footer")
  parElem.fadeTo("slow", 0);
  footerElem.fadeTo("slow", 0);
  setTimeout(function() {
    parElem.text(quoteToReplace);
    parElem.fadeTo("slow", 1);
    footerElem.text(authorToReplace);
    footerElem.fadeTo("slow", 1);
  }, 1000);
}

$('.carousel').carousel({
  interval: false
})

if (document.cookie == "initanimate=false") {
  $("span.name").css("display", "inline-block");
  showEverything();
} else {
  setTimeout(function() {
    $("span.name").css("display", "inline-block");
    showEverything();
  }, 15000);
}



var rockyAudio = new Audio('/media/audio/roackytheme.mp3');
var windowWidth = $(window).width();
if (windowWidth > 320 && windowWidth < 480) {
  $(".rockyfa").removeClass("hidden");
} else {
  playRocky();
  setTimeout(function() {
    if (rockyAudio.currentTime === 0) {
      pauseRocky();
    }
  }, 2000);
}


var fireworkAudio = new Audio('/media/audio/firework.mp3');
fireworkAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

rockyAudio.ontimeupdate = function() {
  if (document.cookie == "initanimate=false") {
    showFireworks();
  } else {
    var intTime = Math.floor(this.currentTime);
    if (intTime >= 30) {
      this.pause();
      showFireworks();
      $(".rockyfa").addClass("hidden");
      $(".rockyfapause").addClass("hidden");
    }
  }
}

function playRocky() {
  rockyAudio.play();
  $(".rockyfa").addClass("hidden");
  $(".rockyfapause").removeClass("hidden");
}

function pauseRocky() {
  rockyAudio.pause();
  $(".rockyfa").removeClass("hidden");
  $(".rockyfapause").addClass("hidden");
}

function showFireworks() {
  startFireworks();

  setTimeout(function() {
    fireworkAudio.play();
    display("pauseFireworks");
  }, 1000);
}


function showEverything() {
  display("greetChoice");
  display("choices");
}


function display(className) {
  $("." + className).css("display", "block");
}

function fireworksPause() {
  $(".pauseFireworks .fa-pause").addClass("hidden");
  $(".pauseFireworks .fa-play").removeClass("hidden");
  fireworkAudio.pause();
}

function fireworksPlay() {
  $(".pauseFireworks .fa-play").addClass("hidden");
  $(".pauseFireworks .fa-pause").removeClass("hidden");
  fireworkAudio.play();
}


var randomstuffs = [{
  type: "video",
  url: "https://www.youtube.com/embed/TPXWZxtDooY?html5=1",
  snippet: "The greatest rendition of holiday spirit I've ever seen"
}, {
  type: "picture",
  url: "http://s3-ec.buzzfed.com/static/2013-11/enhanced/webdr03/21/11/anigif_enhanced-buzz-27249-1385051166-6.gif",
  snippet: "This fella took not going to heaven with stride"
}, {
  type: "picture",
  url: "http://i.giphy.com/V8oqg8niJIYFO.gif",
  snippet: "Inappropriate for children much?"
}];


var currentRandomSelection = 0;

function randomtry() {
  var randomUrlArray = _.pluck(randomstuffs, "url");
  var currentUrl = randomstuffs[currentRandomSelection].url;
  var currentType = randomstuffs[currentRandomSelection].type;

  if (currentRandomSelection !== randomstuffs.length - 1) {
    currentRandomSelection++;
  } else {
    currentRandomSelection = 0;
  }

  var replacedType = randomstuffs[currentRandomSelection].type;
  var replacedUrl = randomstuffs[currentRandomSelection].url;
  var replacedSnippet = randomstuffs[currentRandomSelection].snippet;

  if (currentType !== replacedType) {
    $(".randomContent ." + currentType).addClass("hidden");
    $(".randomContent ." + replacedType).removeClass("hidden");
  }

  switch (replacedType) {
    case "video":
      $(".randomContent .youtube").attr('src', replacedUrl);
      $(".randomContent .video p.snippet").text(replacedSnippet);
      break;
    case "picture":
      $(".randomContent .picture img").attr("src", replacedUrl);
      $(".randomContent .picture p.snippet").text(replacedSnippet);
      break;
    case "audio":
      $(".randomContent audio source").attr("src", replacedUrl);
      $(".randomContent .audio p.snippet").text(replacedSnippet);
      break
    default:
      console.error("replacedType is not defined properly")
      break
  }

  //TODO: backend call to get random funny video/audio/image/link
}

var quotes = [{
  quote: "Rule #1 : It's going to be alright. There are really no other options.",
  author: "Anonymous"
}, {
  quote: "Violence is the last refuge of incompetence",
  author: "Isaac Asimov"
}, {
  quote: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
  author: "Margaret Meade"
}, {
  quote: " Don’t wait for something to be fully formed in your head to start on it. Just start, and then work it out as you go.",
  author: "Brendon Stanton"
}, {
  quote: "Your work doesn't stress over you. Therefore, there's no point in stressing over it. It just needs you to do it",
  author: "Anonymous"
}];

function quotetry() {
  var quoteArray = _.pluck(quotes, "quote");
  var parElem = $("blockquote p");
  var currentQuote = parElem.text();
  var currentQuoteIndex = quoteArray.indexOf(currentQuote);
  if (currentQuoteIndex !== quotes.length - 1) {
    var quoteToReplace = quotes[currentQuoteIndex + 1].quote;
    var authorToReplace = quotes[currentQuoteIndex + 1].author;
  } else {
    var quoteToReplace = quotes[0].quote;
    var authorToReplace = quotes[0].author;
  }
  var footerElem = $("blockquote footer")
  parElem.fadeTo("slow", 0);
  footerElem.fadeTo("slow", 0);
  setTimeout(function() {
    parElem.text(quoteToReplace);
    parElem.fadeTo("slow", 1);
    footerElem.text(authorToReplace);
    footerElem.fadeTo("slow", 1);
  }, 1000);
}

$('.carousel').carousel({
  interval: false
})
