function pointsPer48(ppg, mpg) {
    if (ppg !== 0 || mpg !== 0) {
      let points = ppg / mpg * 48;
      return Number(points.toFixed(1));
    } else {
      return 0;
    }
  }