/*
 * Nodesoccer.js
 */
var five = require("johnny-five");
var Spark = require("spark-io");
var board = new five.Board({
  io: new Spark({
    token: "7550da40ccf9ac697211eb17c031bbe7ac16a20a",
    deviceId: "53ff72066667574837422067"
  })
});


board.on("ready", function() {
  var led = new five.Led("D7");
  led.blink();
});


