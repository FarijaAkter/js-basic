//console.log("hello world!");

//et name = "farija";

//let age =30;
//console.log(age);
/*
let person = {
    name: 'farija',
    age: 30
}

person.name = 'Atiq';

person['name']= 'abid';
console.log(person.name);*/
let count = 0;
document.getElementById("i").addEventListener("click", ()=>{
    document.getElementById("count").innerHTML = ++count;
});
document.getElementById("d").addEventListener("click", ()=>{
    if(count > 0){

        document.getElementById("count").innerHTML = --count;
    }
    else{
        count = 0;
        document.getElementById("count").innerHTML = count;
    }
});