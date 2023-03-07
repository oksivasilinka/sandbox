var min = function(list){
    for (let i = 0; i < list.length; i++)
      x =  Math.min.apply(null, list);
     return x;
  }
  
  var max = function(list){
      for (let i = 0; i < list.length; i++)
      return Math.max.apply(null, list);
  }