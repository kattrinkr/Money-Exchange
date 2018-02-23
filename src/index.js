// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var Hdollars = 50;
  var Qdollars = 25;
  var Ddollars = 10;
  var Ndollars = 5;
  var Penie = 1;
  var h = 0, q = 0, d = 0, p = 0, n= 0;
  if (currency > 10000)
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  else if (currency <= 0)
    return {};
  else {
    if (currency >= Hdollars){
      h = Math.floor(currency / Hdollars);
      var temp = h * Hdollars;
      currency = currency - temp;
    }

    if (currency >= Qdollars){
      q = Math.floor(currency / Qdollars);
      temp = q * Qdollars;
      currency = currency - temp;
    }

    if (currency >= Ddollars){
      d = Math.floor(currency / Ddollars);
      temp = d * Ddollars;
      currency = currency - temp;
    }

    if (currency >= Ndollars){
      n = Math.floor(currency / Ndollars);
      temp = n * Ndollars;
      currency = currency - temp;
    }

    if (currency >= Penie){
      p = currency;
    }
    var temp = [];
    temp.push(h);
    temp.push(q);
    temp.push(d);
    temp.push(n);
    temp.push(p);

    var answer = {};
    var coins = ["H", "Q", "D", "N", "P"]
    for (var i = 0; i < coins.length; i++){
      if (temp[i] > 0)
        answer[coins[i]] = temp[i];
    }

  return answer;
  }
}
