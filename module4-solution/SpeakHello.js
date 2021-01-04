(function (window) {
  var helloSpeaker = {};
  helloSpeaker.name = "Hello";
  helloSpeaker.speak = function () {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
