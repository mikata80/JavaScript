function findYoungestPerson(persons) {
    var smallage = persons[0].age;
    var smallindex = 0;
    for (var i in persons) {
        if (smallage > persons[i].age) {
            smallage = persons[i].age;
            smallindex = i;
        }
       // console.log(persons[i].firstname + " " + persons[i].age);
    }

    return console.log('The youngest person is ' + persons[smallindex].firstname + " " + persons[smallindex].lastname);
}

var persons = [
  { firstname: 'George', lastname: 'Kolev', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Baba', lastname: 'Ginka', age: 40 }]

findYoungestPerson(persons);


var persons = [
  { firstname: 'Kiro', lastname: 'Kolev', age: 55 },
  { firstname: 'Gosho', lastname: 'Ivan', age: 91 },
  { firstname: 'Pesho', lastname: 'Ginka', age: 5 }]

findYoungestPerson(persons);
