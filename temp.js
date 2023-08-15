function temperatureConverterf(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("Celsiusid").value=(valNum-32)/1.8;
    document.getElementById("Kelvinid").value=((valNum-32)/1.8)+273.15;
  }
function temperatureConverterc(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("Fahrenheitid").value=(valNum*1.8)+32;
    document.getElementById("Kelvinid").value=valNum+273.15;
  }
function temperatureConverterk(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("Fahrenheitid").value=((valNum-273.15)*1.8)+32;
    document.getElementById("Celsiusid").value=valNum-273.15;
  }
function clearall(){
    document.getElementById('Fahrenheitid').value ="" ;
    document.getElementById('Kelvinid').value ="" ;
    document.getElementById('Celsiusid').value ="" ;
  }