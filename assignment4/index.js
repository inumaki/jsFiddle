var inputString = document.getElementsByClassName("inputString");
var answer = document.getElementById("display");
var lists = document.getElementById("lists1");
var lists = document.getElementById("lists2");
function createNode(value) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(value);
  node.appendChild(textnode);

  return node;
}

function func() {
  var text = inputString[0].value;
  const myArray = text.split(",");
  console.log(lists);

  while (lists1.firstChild) {
    lists1.removeChild(lists1.firstChild);
  }
  while (lists2.firstChild) {
    lists2.removeChild(lists2.firstChild);
  }

  var psum = 0,
    nsum = 0,
    count = 0;
  var node;
  var ncount=0;
  console.log(myArray);
  for (var i = 0; i < myArray.length; i++) {
    
    myArray[i] = Number(myArray[i]);
    node = createNode(myArray[i]);

    if (myArray[i] > 0) {
      count++;

      lists1.appendChild(node);
      psum += myArray[i];
    } else if(myArray[i]<0){
      ncount++;
      nsum += myArray[i];
      lists2.appendChild(node);
    }
  }
  if (count > 0) {
    node = createNode(psum);
    lists1.appendChild(node);
    node = createNode(psum / count);
    lists1.appendChild(node);
  }
  if (ncount > 0) {
    node = createNode(nsum);
    lists2.appendChild(node);
    node = createNode(nsum / (ncount));
    lists2.appendChild(node);
  }
}
