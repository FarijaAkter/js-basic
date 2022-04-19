var countDownDateVar='17 April 2022 12:00:00';

setInterval(function () {

var countDownDate = new Date(countDownDateVar).getTime()/1000;

var now= new Date().getTime()/1000;
var diff=Math.floor(countDownDate-now);

var days=Math.floor(diff/(60*60*24));
var hours=Math.floor(diff%(60*60*24)/(60*60));
var min=Math.floor(diff%(60*60)/(60));
var sec=Math.floor(diff%(60));

document.getElementById('days').innerHTML= days;
document.getElementById('hours').innerHTML= hours;
document.getElementById('min').innerHTML= min;
document.getElementById('sec').innerHTML= sec;
},1000);

/*
console.log(min);*/
