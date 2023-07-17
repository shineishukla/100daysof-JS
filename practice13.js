//event propogation

/*
<body>
    <h1 style="color: green">GeeksForGeeks</h1>
    <h3>What is Event propagation, capturing, bubbling?</h3>
  
    <div id="div1">
        Component 1
        <div id="div2">
            component 2
            <div id="div3">
                component 3
            </div>
        </div>
    </div>
*/
let div1 = document.querySelector("#div1");
        let div2 = document.querySelector("#div2");
        let div3 = document.querySelector("#div3");
  
        div1.addEventListener("click", function (event) {
            alert("Component 1 event clicked");
        });
  
        div2.addEventListener("click", function (event) {
            alert("Component 2 event clicked");
        });
  
        div3.addEventListener("click", function (event) {
            alert("Component 3 event clicked");
        });



//image slider
/*
<div>
  <button [b]onclick="prev()"[/b]> Prev </button>
  <img id="slider"
src="http://www.sololearn.com/uploads/slider/1.jpg" 
    width="200px" height="100px"/>
  <button [b]onclick="next()"[/b]> Next </button>
</div>
*/
var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
    ];
    var num = 0;
  
  function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
      num = 0;
    }
    slider.src = images[num];
    }
  
  function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
      num = images.length-1;
    }
    slider.src = images[num];
  }




//form validation
/*
<form onsubmit="return validate()" method="post">
  Number: <input type="text" name="num1" id="num1" />
  <br />
  Repeat: <input type="text" name="num2" id="num2" />
  <br />
  <input type="submit" value="Submit" />
</form>
*/
function validate() {
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    if(n1.value != "" && n2.value != "") {
      if(n1.value == n2.value) {
        return true;
      }
    }
    alert("The values should be equal and not blank");
    return false;
  }




