﻿var people = [];

function Person(firstName, lastname, age) {
    this.firstName = firstName ;
    this.lastname = lastname;
    this.age = age;

    
}

Person.constructor.toString = function toString() {
    return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
}
//people.push(new Person("Scott", "Guthrie", 38));
//console.log(people);
//var persons = {
people.push(new Person("Scott", "Guthrie", 38));
people.push(new Person("Scott", "Johns", 36));
people.push(new Person("Scott", "Hanselman", 39));
people.push(new Person("Jesse", "Liberty", 57));
people.push(new Person("Jon", "Skeet", 38));
console.log(Person.constructor.getFirstName('Scott'));
people.pop()
//};
