function students(args) {
    var arrRes = {};
    //console.log(args);
    for (var row in args) {
        var arrTmp = args[row].split('|');
        var student = arrTmp[0].trim();
        var course = arrTmp[1].trim();
        var grade = (parseFloat((arrTmp[2].trim())).toFixed(3))/1;
        var vizit = (parseInt(arrTmp[3].trim()).toFixed(3))/1;
        
        
        if (!arrRes[course]) {
            arrRes[course] = { 'avgGrade': grade, 'avgVisits': vizit, 'students': [student],'couts':1 };
        } else {
            var avgGrade = arrRes[course]['avgGrade'];
            avgGrade += grade;
            var avgVisits = arrRes[course]['avgVisits'];
            avgVisits += vizit;
            var couts = arrRes[course]['couts'];
            couts++;
            var students = arrRes[course]['students'];
            if (students.indexOf(student) == -1) {
                students.push(student);
            }
            
            
            arrRes[course] = { 'avgGrade': avgGrade, 'avgVisits': avgVisits, 'students': students,'couts':couts};
        }
    }

    //console.log(arrRes);
    //console.log();
    //console.log();
    //console.log();
    for (var course in arrRes) {
        var cnt = parseInt(arrRes[course]['couts']);
        var avgGrade = arrRes[course]['avgGrade'];
        var avgVisits = arrRes[course]['avgVisits'];
        var students = arrRes[course]['students'].sort();
        
        arrRes[course] = { 'avgGrade': ((avgGrade / cnt).toFixed(2)) / 1, 'avgVisits': ((avgVisits / cnt).toFixed(2)) / 1, 'students': students };
        
        //for (var arr in arrRes[course]) {
        //    for (var students in arrRes[course][arr]) {
        //        console.log(arrRes[course][arr][students].length);
        //    }
            
        //}
    }
    arrRes = sortOnKeys(arrRes);
    console.log(JSON.stringify(arrRes));
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
    
}


students([
'Milen Georgiev|PHP|2.02|2',
'  Ivan Petrov | C# Basics | 3.20 | 22',
'Peter Nikolov | C# | 5.522 | 18',
'Maria Kirova | C# Basics | 5.40 | 4.5',
'Stanislav Peev | C# | 4.012 | 15',
'   Ivan Petrov |    PHP Basics     |     5.120 |6',
'Ivan Goranov | SQL | 5.926 | 12',
'Todor Kirov | Databases | 5.50 |0.0000',
'Maria Ivanova | Java | 5.83 | 37',
'Milena Ivanova |    C# |   1.823 | 4.5',
'     Stanislav Peev   |    C#|   4.122    |    15   ',
'Kiril Petrov |PHP| 5.10 | 6',
'Ivan Petrov|SQL|5.926|3',
'      Peter Nikolov   |    Java  |   5.9996    |    9   ',
'Stefan Nikolov | Java | 4.00 | 9.5',
'Ivan Goranov | SQL | 5.926 | 12.5',
'Todor Kirov | Databases | 5.150 |0.0000',
'Kiril Ivanov | Java | 5.083 | 327',
'Diana Ivanova |    C# |   1.823 | 4',
'     Stanislav Peev   |    C#|   4.122    |    15   ',
'Kiril Petrov |PHP| 5.10 | 6'
])