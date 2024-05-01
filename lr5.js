function calculateRoots() {
	var a = document.forms["quadratic"]["a"].value;
	var b = document.forms["quadratic"]["b"].value;
	var c = document.forms["quadratic"]["c"].value;
  
	var discriminant = b * b - 4 * a * c;
  
	if (discriminant < 0) {
	  document.getElementById("result").innerHTML = "Корней нет";
	} else if (discriminant === 0) {
	  var x = -b / (2 * a);
	  document.getElementById("result").innerHTML = "Уравнение имеет один корень: " + x;
	} else {
	  var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	  var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	  document.getElementById("result").innerHTML = "Уравнение имеет два корня: " + x1 + " и " + x2;
	}
  }