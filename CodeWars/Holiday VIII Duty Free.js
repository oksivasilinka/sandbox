function dutyFree(normPrice, discount, hol){
    let discountAmount = normPrice * discount / 100;
    let numberOfBottles = hol / discountAmount;
    return Math.floor(numberOfBottles);
  }