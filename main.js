let d=Math.floor(Math.random()*100)+1;;
console.log(d);
let chances=document.getElementById("chan").innerText;
let score=document.getElementById("score").innerText;


function funEqual(){
    chances--; score=chances;
    document.getElementById("numbergenerate").innerText=d;
    document.getElementById("inp").innerText=d;
    document.getElementById("chan").innerText=chances;
    document.getElementById("score").innerText=Math.max(chances,score);
    document.getElementById("bad").style.backgroundColor='green';
    document.getElementById("text").innerText="Hurray Score is equal!!";
    document.getElementById("abc").style.display='none';
}

function funGreater(){
    chances--;
    document.getElementById("chan").innerText=chances;
    document.getElementById("text").innerText="Your Score is too high";
}

function funLess(){
    chances--;
    document.getElementById("chan").innerText=chances;
    document.getElementById("text").innerText="Your Score is too low";
}

function equal(){
    let val=document.getElementById("inp").value;
    if(val==d){
        funEqual();
    }
    else if(val>d){
        funGreater();
    }
    else{
        funLess();
    }
}

function play(){
    chances=100;
    document.getElementById("text").innerText="Start Guessing !!";
    document.getElementById("chan").innerText=chances;
    document.getElementById("score").innerText=score;
    document.getElementById("bad").style.backgroundColor='rgb(40, 12, 12)';
    document.getElementById("abc").style.display='inline-block';
    document.getElementById("numbergenerate").innerText="?";
    document.getElementById("inp").innerText=0;
}