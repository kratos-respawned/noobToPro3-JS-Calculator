const numbtn=document.querySelectorAll('.num');
const symbtn=document.querySelectorAll('.sym');
const resetBtn=document.querySelector("#reset");
var num1="";
var num2="";
var sym="+";
var answer=0;
var action=false;
function numchange(){
    var num= document.getElementById(this.id).innerText;
    inputb.value=inputb.value+num;
}
function symchange(){
    
    if(action){
        if(inputb.value=="")
             num2=0;
        else num2=inputb.value;
        calculate(num1.num2,sym);
    }
    else{
        if(inputb.value=="")
             resetAll();
        else {num1=inputb.value
        inputb.value="";
        sym= document.getElementById(this.id).innerText;
        inputb.setAttribute('placeholder',"enter second number")
        action=true;}
    }
}
function calculate(){
    if(sym=="reset"){reset();}
    else{
        if(sym=="+"||sym=="=")
        {answer=Number(num1)+Number(num2);}
        else if(sym=="-"||sym=="=")
        {answer=Number(num1)-Number(num2);}
        else if(sym=="*"||sym=="=")
        {answer=Number(num1)*Number(num2);}
        else if(sym=="/"||sym=="=")
        {answer=Number(num1)/Number(num2);}
        inputb.value=answer;action=false;
    }  
}
function resetAll(){
    inputb.value="";
    num1=0;
    num2=0;
    sym="+";
    action=false;
}
for(i of numbtn ){
    i.addEventListener('click',numchange);
}
for(i of symbtn){
    i.addEventListener('click',symchange);
}
resetBtn.addEventListener('click',resetAll);
