function calcuateFinalYear(years) {
  let currentYear = new Date().getFullYear();
  let nYears = parseInt(years);

  return(currentYear + nYears);
}

function calcuateInterest(principal, rate, years) {
  let principalInt = parseInt(principal),
      rateFloat    = parseFloat(rate),
      yearsInt     = parseInt(years);

  return(principalInt + (principalInt * rateFloat * yearsInt) / 100);
}

function composeResultPane(principal, rate, result, finalYear) {
  let resultPane = new String;
 
  resultPane="<p>If you deposit " + principal + "</br>at an interest rate of " + rate + "%</br>You will receive an amount of " + result + "</br>in the year " + finalYear + "</p>";
  return(resultPane);
}

function compute() {
  let principalValue = document.getElementById("principal").value,
      rateValue = document.getElementById("rate").value,
      yearsValue = document.getElementById("years").value;

  if(principalValue && rateValue && yearsValue ) {
    let finalResult = calcuateInterest(principalValue, rateValue, yearsValue),
        finalYear = calcuateFinalYear(yearsValue),
        resultPane = composeResultPane(principalValue, rateValue, finalResult, finalYear)
    document.getElementById("result").innerHTML=resultPane;
  }
}
  
function showRate() {
  let rateValue = document.getElementById("rate").value;

  if(rateValue) {
    document.getElementById("ratevalue").innerHTML=`${rateValue}%`;
  }
}