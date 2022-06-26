var input=document.querySelector("#inputbox");
var equation=document.querySelector('#equation');
var equations=[];
var answers=[];
var state=true;
function getVal(x){
  if(input.value==0)
     input.value= x; 
  else
     input.value+= x;  
} 
function ans(){
  equation.value=input.value+"=";
   input.value=eval(input.value);
   equations.push(equation.value);
   answers.push(eval(input.value));
}
function clr(){
  equation.value="";
  input.value=0;
}
function CH()
{
   document.getElementById("history").innerHTML="";
   equations=[""];
   answers=[""];

}
function H(){
   if(state){
       document.querySelector(".history").style.display="block";
       state=false;
   }
   else{
      document.querySelector(".history").style.display="none";
      state=true;
   };
   equation.value=input.value+"=";
   input.value=eval(input.value);
   console.log(equations);
   console.log(answers);
   document.querySelector("#history").innerHTML=""
   for(let i=equations.length-1;i>=0;i--)
   {
      document.querySelector("#history").innerHTML+="<div class='output'><p>"+equations[i]+"</p><p>"+answers[i]+"</p></div>";
   }
}
