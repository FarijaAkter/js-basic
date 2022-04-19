/*const cars=['far','far1','far2'];*/
const person={
    firstname: "Abid",
    lastname: "Rahman"
};
const cars=['far','Abid','Rahman'];


const fruits = ["Banana", "Orange", "Apple"];
//document.getElementById("demo").innerHTML = fruits;
//fruits[fruits.length] = "Lemon";
let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
//document.getElementById("demo").innerHTML = text;

function myFunction(value) {
    text += "<li>" + value + "</li>";
}
//fruits.push("Lemon");//
   // document.getElementById("demo").innerHTML = fruits;

console.log(fruits);
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
