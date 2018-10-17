//Title Case Lecture

function titleCase(str) {

	var myArr = str.toLowerCase().split(" ");
	
	for (var a = 0; a < myArr.length; a++){
		 myArr[a] = myArr[a].charAt(0).toUpperCase() + myArr[a].substr(1);
	  }
	
	  return myArr.join(" ");
	}

console.log(titleCase('hello godness'));
