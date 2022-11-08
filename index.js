var hrs=0;
var min=0;
var sec=0;

var stopInterval;
let para=document.getElementById("par");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");


start.onclick=function(){
    clearInterval(stopInterval);
    stopInterval=setInterval(startTimer,10);
}
stop.onclick=function(){
    clearInterval(stopInterval);
    console.log(stopInterval);
}

para.innerHTML=`${hrs<10?`0 ${hrs}`:hrs} : ${min<10?`0 ${min}`:min} : ${sec<10?`0 ${sec}`:sec}`;


function startTimer(){
    
    if(sec==60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hrs++;
    }
    sec=sec+1;
    para.innerHTML=`${hrs<10?`0 ${hrs}`:hrs} : ${min<10?`0 ${min}`:min} : ${sec<10?`0 ${sec}`:sec}`;
}
reset.onclick=function(){
    
    sec=00;
    min=00;
    hrs=00;
    para.innerHTML=`${hrs<10?`0 ${hrs}`:hrs} : ${min<10?`0 ${min}`:min} : ${sec<10?`0 ${sec}`:sec}`;
}



