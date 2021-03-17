const hqLocationSt = 42;

function blocksAway(street){
  let blocksCount;
  if (street >= hqLocationSt){
   blocksCount = street - hqLocationSt;
  } else {
    blocksCount = hqLocationSt - street;
  }
  return blocksCount;
}

function distanceFromHqInBlocks(pickedUp) {
 
 let blocksBelowFortySecond= blocksAway(pickedUp);

return blocksBelowFortySecond;

}

function distanceFromHqInFeet(street){
  let feetCalc = blocksAway(street);

  feetCalc *=264;
  return feetCalc;
}

function distanceTravelledInFeet(begin, end){
  let blocksTravelled;
  if (begin > end){
    blocksTravelled = begin - end;
  } else {
    blocksTravelled = end - begin;
  }
  return blocksTravelled *=264;
}

function calculatesFarePrice (start, destination) {
  let fareCharge = 0;
  let feetTravelled = distanceTravelledInFeet(start, destination)

  if (feetTravelled <= 400){
    fareCharge = 0;
    
  } else if (feetTravelled <= 2000 && feetTravelled > 400){
      feetTravelled -= 400;
      fareCharge = parseFloat(feetTravelled*=.02)
      
  } else if (feetTravelled > 2000 && feetTravelled < 2500){
      fareCharge = 25;
      
  } else if (feetTravelled > 2500){
      fareCharge = "cannot travel that far"
        }
  return fareCharge;
} 
  



