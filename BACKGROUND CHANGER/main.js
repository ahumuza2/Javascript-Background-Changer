//selecting the buttons with javascript

let button1=document.querySelector('.btn1');
let button2=document.querySelector('.btn2');
let button3=document.querySelector('.btn3');

let body=document.querySelector('body');


//function to  change body to red
function redBackground(){
if(button1){
    body.style.backgroundColor="red";
    button2.addEventListener("click",changeBackground);

}


}
button1.addEventListener("click",redBackground);

//function to  change body to aqua
function aquaBackground(){
    if(button2){
        body.style.backgroundColor="aqua";
    
    }
    
    
    }
button2.addEventListener("click",aquaBackground);
    


//function to  change body to pink
function pinkBackground(){
    if(button3){
        body.style.backgroundColor="pink";
    
    }
    
    
    }
button3.addEventListener("click",pinkBackground);
    


