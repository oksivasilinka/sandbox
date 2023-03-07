function getGrade (s1, s2, s3) {
    // Code here
    let averageValue = (s1 + s2 + s3) / 3;
    if (averageValue <= 100 && averageValue >= 90) {
      return 'A';
    } else if (averageValue < 90 && averageValue >= 80) {
      return 'B';
    } else if (averageValue < 80 && averageValue >= 70) {
      return 'C';
    } else if (averageValue < 70 && averageValue >= 60) {
      return 'D';
    } else if (averageValue < 60) {
      return 'F';
    }
  }