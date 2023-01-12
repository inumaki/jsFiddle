var strings = document.getElementsByClassName("input");
var checked = document.querySelector("#checkbox");
var position = document.querySelector("#position");

var display = document.getElementById("display");
const form = document.querySelector("form");

function convertStr(a, b, c, checked) {
  var find = b;
  var replaceWith = c;
  if (checked) find = b.toLowerCase();

  var replaceNum = document.querySelector("#number").value;
  

  console.log("replaceNum = ", replaceNum);

  let str = "";

  if (position.value==="Start") {
    for (let i = 0; i < a.length; i++) {
      let val = a[i];
      if (checked) {
        if (find === val.toLowerCase() && replaceNum > 0) {
          str += replaceWith + " ";
          replaceNum--;
        } else str += val + " ";
      } else {
        if (find === val && replaceNum > 0) {
          str += replaceWith + " ";
          replaceNum--;
        } else str += val + " ";
      }
    }
  } else {
    for (let i = a.length-1; i >= 0 ; i--) {
      let val = a[i];
      if (checked) {
        if (find === val.toLowerCase() && replaceNum > 0) {
          str = replaceWith + " "+str;
          replaceNum--;
        } else str = val + " "+str;
      } else {
        if (find === val && replaceNum > 0) {
          str = replaceWith + " "+str;
          replaceNum--;
        } else str = val + " "+str;
      }
    }

  }

  return str.trim();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var a = strings[0].value.trim();
  var find = strings[1].value.trim();
  var replaceWith = strings[2].value.trim();

  if (find.indexOf(" ") != -1 || replaceWith.indexOf(" ") != -1) {
    alert("Enter the Word without Spaces");
    return;
  }

  a = a.split(" ");
  a = a.filter((item) => {
    return item != "";
  });

  if (a.length < 1) {
    alert("Please enter proper string");
    return;
  }

  display.innerText = convertStr(a, find, replaceWith, checked.checked);
});
