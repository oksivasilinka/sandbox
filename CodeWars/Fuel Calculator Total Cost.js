function fuelPrice(litres, pricePerLitre) {
    // your code here
    // Good luck with it!
    let price;
    if (litres < 2) {
      price = pricePerLitre;
    } else if (litres >= 2 && litres < 4) {
      price = pricePerLitre - 0.05;
    } else if (litres >= 4 && litres < 6) {
      price = pricePerLitre - 0.10;
    } else if (litres >= 6 && litres < 8) {
      price = pricePerLitre - 0.15;
    } else if (litres >= 8 && litres < 10) {
      price = pricePerLitre - 0.20;
    } else if (litres >= 10) {
      price = pricePerLitre - 0.25;
    }
    let total = litres * price;
    return Number(total.toFixed(2));
  }