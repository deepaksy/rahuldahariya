let themeColor="#212121";
let n=1;
let color='';
function themeToggle() {
    if(n==1){
        themeColor='white';
        color='black';
        n=0;
    }
    else{
        themeColor='#212121';
        color='white';
        n++;
    }
    document.body.style.backgroundColor=themeColor;
    document.getElementById('main').style.backgroundColor=themeColor;
    document.getElementById('main').style.color=color;

}