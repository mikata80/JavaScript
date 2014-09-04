function youngestPerson(args) {
    //console.log(args);
    var resAge = args[0]['age'];
    var resName = args[0]['firstname'] + " " + args[0]['lastname'];
    for (var i = 1; i < args.length; i++) {
        var innerArr = args[i];
        var age = innerArr['age'];
       // console.log("resAge = "+resAge);
        //console.log("age = " + age);
        if (resAge > age) {
            resAge = age;
            resName = innerArr['firstname'] + " " + innerArr['lastname'];
        }
    }
    return console.log(resName);

}


var persons = [
  { firstname: 'George', lastname: 'Kolev', age: 32 },
  { firstname: 'Milen', lastname: 'Petrov', age: 12 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Alex', lastname: 'popov', age: 2 },
  { firstname: 'Baba', lastname: 'Ginka', age: 40 },
  { firstname: 'Ico', lastname: 'Dimitorv', age: 102 },
  ];


youngestPerson(persons);