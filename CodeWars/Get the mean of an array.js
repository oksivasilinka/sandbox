function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
      let sum = 0; 
      for (let i = 0; i < marks.length; i++) { 
        sum += marks[i];
      }
      let value = sum / marks.length;
      return Math.floor(value);
  }