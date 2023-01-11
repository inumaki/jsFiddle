var lists = document.getElementById("lists");
let names = new Set();

function addName() {
  let name = document.getElementById("nameInput").value;
  name = name.split(' ');





  var str = "";
  var n = name.length;
  for (var i = 0; i < n - 1; i++) {
    if(name[i]=='')
    continue;
    
    str += name[i][0] + " ";
    console.log(name[i][0]);
  }
  str += name[n - 1];

  names.add(str);
}

function displayNames() {
  let nameList = document.getElementById("lists");
  nameList.innerHTML = "";
  for (let name of names) {
    nameList.innerHTML += "<li>" + name + "</li>";
  }
}
