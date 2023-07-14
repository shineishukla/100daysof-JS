
// creating elements
var node = document.createTextNode("Some new text");




//<div id ="demo">some content</div>
  //creating a new paragraph
  var p = document.createElement("p");
  var node = document.createTextNode("Some new text");
  //adding the text to the paragraph
  p.appendChild(node);
  var div = document.getElementById("demo");
  //adding the paragraph to the div
  div.appendChild(p);



//removing elements
/*<div id="demo">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>*/
var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.removeChild(child);



//replacing elements
/*<div id="demo">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>*/
var p = document.createElement("p");
var node = document.createTextNode("This is new");
p.appendChild(node);
var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.replaceChild(p, child);