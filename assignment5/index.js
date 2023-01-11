var inputString = document.getElementsByClassName("inputString");
var answer = document.getElementById("display");
var lists1 = document.getElementById("lists1");
var lists2 = document.getElementById("lists2");
var myArr = [];

function createNode(value) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(value);
  node.appendChild(textnode);

  return node;
}
function addlist1() {
  while (lists1.firstChild) {
    lists1.removeChild(lists1.firstChild);
  }

  myArr = myArr.filter((value, index) => myArr.indexOf(value) === index); //added rec
  for (var i = 0; i < myArr.length; i++) {
    var node = createNode(myArr[i].trim());
    lists1.appendChild(node);
  }
}

function func() {

  var namesString = inputString[0].value;
  myArr = namesString.split(",");
  addlist1();
}

function newNames() {
  var pos = Number(inputString[2].value);

  var namesString = inputString[1].value;
  var tempArr = namesString.split(",");
  console.log(tempArr);
  myArr.splice(pos, 0, ...tempArr);

  myArr = myArr.filter((value, index) => myArr.indexOf(value) === index);

  console.log(myArr);
  addlist1();
}

function sort() {
  tempArr = myArr.sort();
  while (lists2.firstChild) {
    lists2.removeChild(lists2.firstChild);
  }
  for (var i = 0; i < myArr.length; i++) {
    var node = createNode(tempArr[i]);
    lists2.appendChild(node);
  }
}
