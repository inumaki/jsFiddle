
var inputString = document.getElementsByClassName("inputString");
var answer = document.getElementById("display");



function checkPalindrome()
{

var ans=true;
var str= inputString[0].value.trim();


if(str.length===0)
{
    alert('Enter something');
return ;

}
var low=0,high=str.length-1;
str= str.toUpperCase();
while(low<=high)
{
if(str[low]!=str[high])
{
    ans=false;
    break;
}
    low++;
    high--;
}
console.log(answer);


if(ans)
{
answer.value= "Palindrome";
answer.className="palindrome ";
}
else
{
    
answer.value= "Not a Palindrome";
answer.className="notPalindrome ";
}


}