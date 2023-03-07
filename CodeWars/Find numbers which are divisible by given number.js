function divisibleBy(numbers, divisor){
    let numbers2 = [];
    for (let i = 0; i < numbers.length; i++) {
      if ((numbers[i] % divisor) == 0) {
        numbers2.push(numbers[i]);
      }
    }
    return numbers2;
  }