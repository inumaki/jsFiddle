var lists = document.getElementById("lists");
let names = new Set();

function alertBox(message,type)
{

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
console.log("hello")
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}





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
if(str.length===0)
{
alertBox("Input is Incorrect","danger");  
return ;

}

  names.add(str);

  alertBox('Name added successfully',"success");
}

function displayNames() {
  let nameList = document.getElementById("lists");
  nameList.innerHTML = "";

if(names.size===0)
{
alertBox("Nothing to Display","danger")
  return ;
}

  for (let name of names) {
    nameList.innerHTML += "<li>" + name + "</li>";
  }
}

