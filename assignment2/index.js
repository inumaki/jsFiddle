
var inputString = document.getElementsByClassName("inputString");
var answer = document.getElementById("display");
var lists = document.getElementById("lists");



function func()
{

  var text= inputString[0].value;
  const myArray = text.split("#");

  console.log(lists)


while (lists.firstChild) {
    lists.removeChild(lists.firstChild);
}
for(var i=0;i<myArray.length;i++)
{
var node=document.createElement("LI");
var textnode=document.createTextNode(myArray[i]);
node.appendChild(textnode);
lists.appendChild(node);
}





}