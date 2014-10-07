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

  servo1 = new five.Servo({
    pin: 'A0',    
    type: "continuous"
  });

  servo2 = new five.Servo({
    pin: 'A4',    
    type: "continuous"
  });

  board.repl.inject({
    servo1: servo1,
    servo2: servo2
  });

  /* keypress, se ejecuta cuando se presiona una tecla */
  process.stdin.on('keypress', function (ch, key) {
    if ( key ){
      switch ( key.name ){
        case 'up':
          console.log('=> Up:');
          break;
        case 'down':          
          console.log('=> Down:');
          break;
        case 'left':
          console.log('=> Left:');
          break;
        case 'right':
          console.log('=>right');
          break;
        case 's':
          console.log('=> Stoping...');
          break;
        case 'e':
          process.exit(0);
          break;          
      }
    }
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();

});


