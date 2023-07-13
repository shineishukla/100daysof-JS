//DOM example


//assume id="demo", in HTML <div id="demo"></div>
var elem = document.getElementById("demo");
elem.innerHTML = "Hello World!";





/* <p>hi</p>
<p>hello</p>
<p>hi</p>
<script>
var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there";
}
</script> */

var arr = document.getElementsByClassName("demo");
//accessing the second element
arr[1].innerHTML = "Hi";




/*<html>
  <body>
    <div id ="demo">
      <p>some text</p>
      <p>some other text</p>
    </div> 
     </body>
</html>*/
var a = document.getElementById("demo"); //this will change both <p> tag texts into "new text"
var arr = a.childNodes;
for(var x=0;x<arr.length;x++) {
    arr[x].innerHTML = "new text";}
    


/*<img id="myimg" src="orange.png" alt="" />*/
var el = document.getElementById("myimg");
el.src = "apple.png";



/*<a href="http://www.example.com">Some link</a>*/
var el = document.getElementsByTagName("a");
el[0].href = "http://www.sololearn.com";


/*<div id="demo" style="width:200px">some text</div>*/
  var x = document.getElementById("demo");
  x.style.color = "6600FF";
  x.style.width = "100px";
