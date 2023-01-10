
var inputNumber = document.getElementsByClassName("inputNumber");
var answer = document.getElementById("display");



function js_Sort()
{

var arr=[];
var ans = true;

if( inputNumber[0].value.length===0 || inputNumber[1].value.length===0 ||inputNumber[2].value.length===0)
{
alert('Please input number in each input field');
return ;
}
if(isNaN(inputNumber[0].value) || isNaN(inputNumber[1].value) || isNaN(inputNumber[2].value))
{
alert('Please input numbers instead of string');
return ;
}

for(var i=0;i<inputNumber.length;i++)
    arr.push(inputNumber[i].value);

arr= arr.map((item)=>{return Number(item)});

var Narr= arr.sort((a, b) => a - b);
console.log(Narr);
var str="Answer = ";

console.log(Narr);
for(var i=0;i<arr.length;i++)
  str+=" "+Narr[i]+ "     ";


answer.innerHTML= str;






}