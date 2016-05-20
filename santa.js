'use strict';
var fs = require('fs');
var directions = fs.readFileSync('./input.txt');
var houseCount = 1; //for spot he's at
var houseMap = {};
var location = {x:0,y:0}
var hash;
for (var iter = 0; iter < directions.length; ++iter) {
  switch(dir) {
    case '>':
      location.x++;
      break;
    case '<':
      location.x--;
      break;
    case 'v':
      location.y--;
      break; 
    case '^':
      location.y++;
      break;
  }
  hash = location.y+','+location.x;
  if(!houseMap[hash]) {
    houseMap[hash]=true;    
    houseCount++;
  }
}
return houseCount;
