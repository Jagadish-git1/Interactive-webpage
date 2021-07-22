var s=1;
var c=1;
function change(){
    if(c===1){
        document.getElementById("I1").innerHTML="This is my <br> mini-project";
        document.getElementById("I1").style.color="yellow";
        c=2;}
    else{
        document.getElementById("I1").innerHTML="This is my <br> webpage!";
        document.getElementById("I1").style.color="white";
        c=1;}
}
function change_Bg(){
    if(s===1){
    document.body.style.backgroundImage="url('fback.jpg')";
    s=2;
    }
    else{
        document.body.style.backgroundImage="url('background.png')";
        s=1;
    }
}
function Url(){
    window.open("https://www.google.com");
}
function sign(){
    window.open("https://accounts.google.co.in/");
}
function fb(){
    window.open("https:www.facebook.com");
}
function ig(){
    window.open("https://www.instagram.com");
}
function tw(){
    window.open("https://www.twitter.com")
}
