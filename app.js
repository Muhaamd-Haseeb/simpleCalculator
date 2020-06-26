function addNumber(num){
  console.log(num);
  let result=document.getElementById('output');
   
  result.value +=num;
}
function setValueZeroAtReload(){
 console.log( document.getElementById('output').value='');
}
setValueZeroAtReload();

function resultShow(){
  let result= document.getElementById('output');
   let finalResult=eval(result.value);
    result.value=finalResult;
  }