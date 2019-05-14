var calcButton = document.getElementById("calcButton");

function onButtonClick() {
	var wNum1 = parseFloat(document.getElementById("wNum1").value);
	var num1 = parseFloat(document.getElementById("num1").value);
	var den1 = parseFloat(document.getElementById("den1").value);
	var wNum2 = parseFloat(document.getElementById("wNum2").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var den2 = parseFloat(document.getElementById("den2").value);
	var operator = document.getElementById("operator").value;
	var result;

	if (!wNum1) {
		document.getElementById("eText").textContent = "Please insert value on whole number 1"; 
		return null;
	} else if (!num1) {
		document.getElementById("eText").textContent = "Please insert value on numerator 1"; 
		return null;
	} else if (!den1) {
		document.getElementById("eText").textContent = "Please insert value on denominator 1"; 
		return null;
	} else if (!wNum2) {
		document.getElementById("eText").textContent = "Please insert value on whole number 2"; 
		return null;
	} else if (!num2) {
		document.getElementById("eText").textContent = "Please insert value on numerator 2"; 
		return null;
	} else if (!den2) {
		document.getElementById("eText").textContent = "Please insert value on denominator 2"; 
		return null;
	} else if (!operator) {
		document.getElementById("eText").textContent = "Please pick an operator"; 
		return null;
	} else {
		if (operator === "plus") {
			document.getElementById("rText").innerHTML = "Question : " + wNum1 + " " + num1 + "/" + den1 + " + " + wNum2 + " " + num2 + "/" + den2 + "<br>";  
		    result = (wNum1 + (num1 / den1)) + (wNum2 + (num2 / den2));
		} else if (operator === "min") {
			document.getElementById("rText").innerHTML = "Question : " + wNum1 + " " + num1 + "/" + den1 + " - " + wNum2 + " " + num2 + "/" + den2 + "<br>";  
		    result = (wNum1 + (num1 / den1)) - (wNum2 + (num2 / den2));
		} else if (operator === "div") {
			document.getElementById("rText").innerHTML = "Question : " + wNum1 + " " + num1 + "/" + den1 + " / " + wNum2 + " " + num2 + "/" + den2 + "<br>";  
		    result = (wNum1 + (num1 / den1)) / (wNum2 + (num2 / den2));
		} else {
			document.getElementById("rText").innerHTML = "Question : " + wNum1 + " " + num1 + "/" + den1 + " * " + wNum2 + " " + num2 + "/" + den2 + "<br>";  
		    result = (wNum1 + (num1 / den1)) * (wNum2 + (num2 / den2));
		}
		document.getElementById("rText").innerHTML += "Result : " + result;  
	}
}
calcButton.addEventListener("click", onButtonClick);
