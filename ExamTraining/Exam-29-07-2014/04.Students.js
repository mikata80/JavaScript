function Solved(args) {
    //console.log(args);
    var reg = /\|/g;
    var resarr = {};
    
    
    for (var i = 0; i < args.length; i++) {
        var arr = args[i].split(reg);
        //console.log(arr);
        var student = arr[0].trim();
        var course = arr[1].trim();
        var avgGrade = parseFloat(arr[2].trim());
        var avgVisits = parseFloat(arr[3].trim());
        if (!resarr[course]) {
            resarr[course] = { 'avgGrade': avgGrade, 'avgVisits': avgVisits, 'students': [], 'count': 1.00 };
            resarr[course].students.push(student);
        } else {
            resarr[course].avgGrade += avgGrade;
            resarr[course].avgVisits += avgVisits;
            if (resarr[course].students.indexOf(student) == -1) {
                resarr[course].students.push(student);
            }
            resarr[course].count++;
        }

        
    }

    for (var key in resarr) {
        resarr[key].avgGrade = parseFloat((resarr[key].avgGrade / parseInt(resarr[key].count)).toFixed(2));
        resarr[key].avgVisits = parseFloat((resarr[key].avgVisits / parseInt(resarr[key].count)).toFixed(2));
        resarr[key].students.sort();
        delete resarr[key].count;
    }

    function sortOnKeys(res) {

        var sorted = [];
        for (var key in res) {
            sorted[sorted.length] = key;
        }
        sorted.sort();
        var tempDict = {};
        for (var i = 0; i < sorted.length; i++) {
            tempDict[sorted[i]] = res[sorted[i]];
        }

        return tempDict;
    }
    resarr = sortOnKeys(resarr);

   //console.log(resarr);

   console.log(JSON.stringify(resarr));

}



//-----------------------------------
Solved([
'Peter Nikolov | PHP  | 5.50 | 0',
'Maria Ivanova | Java | 5.83 | 37',
'Ivan Petrov   | PHP  | 4.00 | 2',
'Ivan Petrov   | C#   | 3.20 | 22',
'Peter Nikolov | C#   | 5.50 | 18',
'Maria Ivanova | C#   | 5.83 | 4',
'Ivan Petrov   | JS   | 4.12 | 15',
'Ivan Genov    | PHP  | 5.10 | 6',
'Ivan Petrov   | SQL  | 5.96 | 12',
'Peter Nikolov | Java | 6.00 | 9'


//'Peter Nikolov | PHP  | 5.50 | 8',
//'Maria Ivanova | Java | 5.83 | 7',
//'Ivan Petrov   | PHP  | 3.00 | 2',
//'Ivan Petrov   | C#   | 3.00 | 2',
//'Peter Nikolov | C#   | 5.50 | 8',
//'Maria Ivanova | C#   | 5.83 | 7',
//'Ivan Petrov   | C#   | 4.12 | 5',
//'Ivan Petrov   | PHP  | 3.10 | 2',
//'Peter Nikolov | Java | 6.00 | 9'


])