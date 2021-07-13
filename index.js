let themeColor="#212121";
let n=1;
let color='';
let theme = '<img src="./images/sunrise.svg">';

function themeToggle() {
    if(n==1){
        themeColor='white';
        color='black';
        theme='<img src="./images/sunset.svg">';
        n=0;
    }
    else{
        themeColor='black';
        color='white';
        theme='<img src="./images/sunrise.svg">';
        n++;
    }
    //document.body.style.backgroundColor=themeColor;
    document.getElementById('main').style.backgroundColor=themeColor;
    document.getElementById('main').style.color=color;
    document.getElementById('theme').innerHTML=theme;
}