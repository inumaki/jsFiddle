const form = document.querySelector("form");
const empID = document.querySelector("#empID");
const name = document.querySelector("#name");
const dept = document.querySelector("#dept");
const designation = document.querySelectorAll("input[name='designation']");
const salary = document.querySelector("#salary");
const Wlocation = document.querySelector("#location");

const employeeMap = new Map();
const designationRange = new Map();



form.addEventListener("submit", e => {
  e.preventDefault();  // to stop rendering on submit
  let salaryRange;
  //.............................validating the form...........................

  if (empID.value < 500 || empID.value > 4500)  
  {  
    alert("Emp ID must be between 500 and 4500.");
    return;
  }

  
  let designationValue = "";
  for (let i = 0; i < designation.length; i++) { //getting the designation value
    if (designation[i].checked) {
      designationValue = designation[i].value;
      break;
    }
  }

  

  designationRange.set("manager",{ min: 25000, max: 100000 });
  designationRange.set("executive",{ min: 20000, max: 50000 });
  designationRange.set("technician",{ min: 18000, max: 35000 });
  designationRange.set("techIT",{ min: 250000, max: 130000 });
  designationRange.set("other", { min: 10000, max: 32000 });

  salaryRange= designationRange.get(designationValue);
console.log(salaryRange);
  
  if (salary.value < salaryRange.min || salary.value > salaryRange.max) 
  {
    alert(`Salary must be between ${salaryRange.min} and ${salaryRange.max} for ${designationValue} designation.`);
    return;
  }
  if(!Wlocation.value) 
  {
    alert("Wlocation is required.")
    return
  }
//.........................................................................................................

  var str=   name.value+" , " +dept.value+" , "+designationValue+" , "+salary.value+" , "+Wlocation.value;
  console.log(str);


  employeeMap.set(empID.value, str);

  
  console.log(employeeMap);
  alert("Form submitted successfully!")
});
function display()
{
var display= document.getElementById("display");
display.innerHTML="";

employeeMap.forEach(function(value, key) {
	display.innerHTML+= "<p>"+key+" :: "+value+"</p>";
})

//...............................................................................................................
}