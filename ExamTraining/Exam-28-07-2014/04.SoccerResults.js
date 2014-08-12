function Solved(args) {
    var reg = /[\/:-]+/;///\W+/g;
    var res = {};
    var scores = {};
    
   // console.log(args);

    //contries
    for (var i in args) {
        var str = args[i].split(reg);
        //console.log(str);
        var countryHome = str[0].trim();
        var countryAway = str[1].trim();
        if (!res[countryHome]) {
            res[countryHome] = {goalsScored:0,goalsConceded:0,matchesPlayedWith:[]};
        }

        if (!res[countryAway]) {
            res[countryAway] = { goalsScored: 0, goalsConceded: 0, matchesPlayedWith: [] };
        }
    }
    
   // console.log(res);

    //function remDublicate(obj) {
    //    var fromIndex = 0;
    //    var toIndex = 0;
    //    console.log(obj);
    //    for (var i = 0; i < obj.length-1; i++) {
    //        if (obj[i] == obj[i + 1]) {
    //            fromIndex = i;
    //            toIndex = i + 1;
    //            obj.splice(toIndex, toIndex);
    //        }
    //    }
    //}

    function getGoals(country) {
        var goalsScoredHome = parseInt(0);
        var goalsAssumedHome = parseInt(0);
        var resarr = [];
        var matchesPlayedWith = {};
        
        for (var i in args) {
            var str = args[i].split(reg);
            var countryHome = str[0].trim();
            var countryAway = str[1].trim();
            var goalsScored = parseInt(str[2]);
            var goalsAssumed = parseInt(str[3]);

            if (countryHome == country) {
                goalsScoredHome += parseInt(str[2]);
                goalsAssumedHome += parseInt(str[3]);
                //matchesPlayedWith.push(countryAway);
                if (!matchesPlayedWith[countryAway]) {

                    matchesPlayedWith[countryAway] = '';
                }
            }

            if (countryAway == country) {
                goalsScoredHome += parseInt(str[3]);
                goalsAssumedHome += parseInt(str[2]);
                //matchesPlayedWith.push(countryHome);
                if (!matchesPlayedWith[countryHome]) {
                    matchesPlayedWith[countryHome] = '';
                }
            }
        }
        resarr.push(goalsScoredHome);
        resarr.push(goalsAssumedHome);
        var arrmatches = Object.keys(matchesPlayedWith).sort();
        //matchesPlayedWith.sort();
        //remDublicate(matchesPlayedWith);
        resarr.push(arrmatches);
        //console.log(resarr)
        return resarr;
    }


    
    
    var arrKey = Object.keys(res);
    for (var i = 0; i < arrKey.length; i++) {
        var key = arrKey[i]
        var arrGoals = getGoals(key);
        res[key].goalsScored = arrGoals[0];
        res[key].goalsConceded = arrGoals[1];
        res[key].matchesPlayedWith = arrGoals[2];
       // console.log(key + ': goalsScored = ' + arrGoals[0] + ': goalsConceded = ' + arrGoals[1] + ': matchesPlayedWith = ' + arrGoals[2]);
        //console.log('-----------------------------------------------');
    }

    var last = {};
    var arrKey = Object.keys(res).sort();
    for (var i = 0; i < arrKey.length; i++) {
        var key = arrKey[i]
        var arrGoals = getGoals(key);
        last[key] = { goalsScored: 0, goalsConceded: 0, matchesPlayedWith: [] }
        last[key].goalsScored = arrGoals[0];
        last[key].goalsConceded = arrGoals[1];
        last[key].matchesPlayedWith = arrGoals[2];
        //console.log(key + ': goalsScored = ' + arrGoals[0] + ': goalsConceded = ' + arrGoals[1] + ': matchesPlayedWith = ' + arrGoals[2]);
        //    console.log('-----------------------------------------------');
    }
    
    //console.log(res);
    //console.log(last);
    var jsonRes = JSON.stringify(last);
    console.log(jsonRes);
}



//=-----------------------------------------------
//Solved(['Germany / Argentina: 1-0',
//'Brazil / Netherlands: 0-3',
//'Netherlands / Argentina: 0-0',
//'Brazil / Germany: 1-7',
//'Argentina / Belgium: 1-0',
//'Netherlands / Costa Rica: 0-0',
//'France / Germany: 0-1',
//'Brazil / Colombia: 2-1'
//])

Solved([

'Levski / CSKA: 0-2',
'Pavlikeni / Loko Gorna: 4-2',
'Loko Gorna / Levski: 1-4',
'Litex / Loko Gorna: 0-0',
'Beroe / Botev Plovdiv: 2-1',
'Loko Gorna / Beroe: 3-1',
'Pavlikeni / Ludogorets: 0-2',
'Loko Sofia / Litex: 0-2',
'Pavlikeni / Marek: 1-1',
'Litex / Levski: 0-0',
'Beroe / Litex: 3-2',
'Litex / Beroe: 1-0',
'Ludogorets / Litex: 3-0',
'Litex / Ludogorets: 1-0',
'CSKA / Beroe: 1-0',
'Botev Plovdiv / CSKA: 1-1',
'Ludogorets / Loko Sofia: 1-0',
'Litex / CSKA: 0-1',
'Marek / Haskovo: 0-1',
'Levski / Loko Gorna: 1-1']
);