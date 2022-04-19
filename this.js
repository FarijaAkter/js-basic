/*
const person={
    firstName: "Farija",
    lastName: "Akter",
    age: 24,
    fullName: function(){
        return this.firstName+" "+this.lastName;
    },
    getFullname: function(){
        return this.fullName();
    }
};
console.log(person.getFullname());*/
const person1={
 fullName: function () {
    return this.firstName+" "+this.lastName;
 }
}
const person2={
 firstName: "John",
    lastName: "Akter",

}
let x= person1.fullName.call(person2);
console.log(x);