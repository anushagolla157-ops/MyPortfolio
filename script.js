let result=document.getElementById("result");
let buttons=document.querySelectorAll("button");
buttons[0].onclick=function(){
    result.value +="1";
}
buttons[1].onclick=function(){
    result.value +="2";
}
buttons[2].onclick=function(){
    result.value +="3";
}
buttons[3].onclick=function(){
    result.value +="+";
}