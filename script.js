function calcuateFinalYear(years) {
  let currentYear = new Date().getFullYear();
  let nYears = parseInt(years);

  return(currentYear + nYears);
}

function calcuateInterest(principal, rate, years) {
  let principalInt = parseInt(principal),
      rateFloat    = parseFloat(rate),
      yearsInt     = parseInt(years);

  return((principalInt * rateFloat * yearsInt) / 100);
}

function composeResultPane(principal, rate, result, finalYear) {
  let resultPane = new String;
 
  return `<p>If you deposit <span class="highlight">${principal}</span><br/>
             at an interest rate of <span class="highlight">${rate} %</span><br/>
             You will receive an amount of <span class="highlight">${result}</span><br/>
             in the year <span class="highlight">${finalYear}</span>
          </p>`;
}


function validatePrincipal(principal) {
  if(!principal || principal <= 0) {
    return false;
  }

  return true;
}


function validateRate(rate) {
  if(!rate || rate <=0) {
    return false;
  }

  return true;
}

function validateYears(years) {
  if(!years || years <=0) {
    return false;
  }

  return true;
}

function compute() {
  let principal = document.getElementById("principal").value,
      rate      = document.getElementById("rate").value,
      years     = document.getElementById("years").value;

  if(!validatePrincipal(principal)) {
    alert("Please, enter a valid number greather than 0!");
    document.getElementById("principal").focus();
    return
  }

  if(!validateRate(rate)) {
    alert("Please, enter a valid rate number");
    document.getElementById("rate").focus();
    return
  }

  if(!validateYears(years)) {
    alert("Please, enter a valid number of years");
    document.getElementById("years").focus();
    return
  }

  let finalResult = calcuateInterest(principal, rate, years),
      finalYear   = calcuateFinalYear(years),
      resultPane  = composeResultPane(principal, rate, finalResult, finalYear)
  document.getElementById("result").innerHTML=resultPane;
}
  
function showRate() {
  let rateValue = document.getElementById("rate").value;

  if(rateValue) {
    document.getElementById("ratevalue").innerHTML=`${rateValue}%`;
  }
}
