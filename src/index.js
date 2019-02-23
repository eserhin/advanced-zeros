module.exports = function getZerosCount(number, base) {
  var zeros=9999999999, currently;
  for (var g = 2; g <= base; g++){
      var degree = 0
      while (base % g === 0){
        base /= g;
        degree++;
      } 
      var kolvo = 0;
      p=g;
      while (number / p > 0){
        kolvo += Math.floor(number / p);
        p*=g; 
      }
      currently=Math.floor(kolvo/degree);
      if(zeros>currently) zeros=currently;     	
}
  return zeros;
}
