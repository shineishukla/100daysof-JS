
//<button [b]onclick="show()">Click Me</button>
function show() {
    alert("Hi there");
  }



//<body onload="doSomething()">
window.onload= function() {
    //some code
}


//<input type="text" id="name" onchange="change()">
function change() {
 var x = document.getElementById("name");
 x.value= x.value.toUpperCase();
}


// event listener
/*<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
	</head>
	<body>
		  <button id="demo">Start</button>
	</body>
</html>*/
window.onload = function() {
    var btn = document.getElementById("demo");
    btn.addEventListener("click", myFunction);

    function myFunction() {
        alert(Math.random());
        btn.removeEventListener("click", myFunction);
    }
};