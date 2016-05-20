function start(directions, location) {    
  var houseCount = 1; //for spot he's at
  var houseMap = {};
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
}
