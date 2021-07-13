let themeColor="#212121";
let n=1;
let color='';
let theme = '<img src="./images/sunrise.svg">';
let cardcolor = '';
const cardcolors = {headerColor:'#323232',
    footerColor:'#44444',
    bodyColor:'#212121'};

 function themeautoset(){
    var date = new Date();
    var hour =  date.getHours();
    if(hour>18){
        n=1;
        themeToggle();
    }
}
setTimeout(themeautoset,0.01);
function themeToggle() {
    if(n==0){
        themeColor='white';
        color='black';
        theme='<img src="./images/sunset.svg">';
        n=1;
        cardcolors.bodyColor='white';
    }
    else{
        themeColor='black';
        color='white';
        theme='<img src="./images/sunrise.svg">';
        n--;
        cardcolors.bodyColor='#212121';
    }
    //document.body.style.backgroundColor=themeColor;
    document.getElementById('main').style.backgroundColor=themeColor;
    document.getElementById('main').style.color=color;
    document.getElementById('theme').innerHTML=theme;
    cardcolorToggle();
    
}
showoff = () => document.getElementById('alert').style.display="none";//Alert trigger function.
setTimeout(showoff, 5000);


function cardcolorToggle(){
    document.getElementById('card').style.backgroundColor=cardcolors.bodyColor;
}