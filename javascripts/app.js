var roverKata = {
  direction: "N",
  x: 0,
  y:0,
  travelLog: []
};

function moveRight(rover) {

  switch (rover.direction) {

    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
}

function moveLeft(rover) {

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;

    case "E":
      rover.direction = "N";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "W":
      rover.direction = "S";
      break;
  }
}

function moveForward(rover) {

    switch (rover.direction) {

    case "N":
      rover.y++;
      break;

    case "E":
      rover.x++;
      break;

    case "S":
      rover.y--;
      break;

    case "W":
      rover.x--;
      break;
  }
}

function instructions (directionCall) {

  var arr = directionCall.split('');
  var rover = roverKata;

    arr.forEach( function (directionCall) {

      if (directionCall === 'f' ) {
          moveForward(rover);
           rover.travelLog.push({x:rover.x, y:rover.y});

      } else if (directionCall === 'l' ) {
          moveLeft(rover);
            rover.travelLog.push({x:rover.x, y:rover.y});

      } else if (directionCall === 'r' ) {
          moveRight(rover);
            rover.travelLog.push({x:rover.x, y:rover.y});
      }

    });

  return rover;
}
