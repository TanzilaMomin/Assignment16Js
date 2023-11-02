var mainDiv=document.getElementById("main");


var us=document.createElement("h1");
us.innerText="USER FORM"
  
var l1=document.createElement("label");
l1.innerText="USER ID-"

var l2=document.createElement("label");
l2.innerText="Email Id-"

var l3=document.createElement("label")
l3.innerText="Mobile no-"

var l4=document.createElement("label")
l4.innerText="CITY PINCODE-"

var t1=document.createElement("input");

var t2=document.createElement("input");

var t3=document.createElement("input");

var t4=document.createElement("input");
 
var br1=document.createElement("br");

var br2=document.createElement("br")
 
var br3=document.createElement("br")

var br4=document.createElement("br")

var b1=document.createElement("button")
b1.innerText="SUBMIT"

var b2=document.createElement("button")
b2.innerText="CANCEL"

mainDiv.appendChild(us);
mainDiv.appendChild(l1);
mainDiv.appendChild(t1);
mainDiv.appendChild(br1);
mainDiv.appendChild(l2);
mainDiv.appendChild(t2);
mainDiv.appendChild(br2);
mainDiv.appendChild(l3);
mainDiv.appendChild(t3);
mainDiv.appendChild(br3);
mainDiv.appendChild(l4);
mainDiv.appendChild(t4);
mainDiv.appendChild(br4);
mainDiv.appendChild(b1);
mainDiv.appendChild(b2);
