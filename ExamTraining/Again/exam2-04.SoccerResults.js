function soccerResults(args) {
    var arrTemp = [];
    var arrRes = {};
    for (var row in args) {
        arrTemp.push(args[row].split(/[/:-]+/g));
    }

    //console.log(arrTemp);
    for (var arr in arrTemp) {
        //console.log(arrTemp[arr]);
        var contryHome = arrTemp[arr][0].trim();
        var goalsScored = parseInt(arrTemp[arr][2]);
        var contryAway = arrTemp[arr][1].trim();
        var goalsConceded = parseInt(arrTemp[arr][3]);
        //console.log("HOME " + contryHome);
        //console.log("AWAY " + contryAway);
        //console.log("----------------------------------------------------------------------");

        if (!arrRes[contryHome]) {
            arrRes[contryHome] = { 'goalsScored': goalsScored, 'goalsConceded': goalsConceded, 'matchesPlayedWith': [contryAway] };
        } else {
            //console.log("HOME IN " + contryHome);
            //console.log(arrRes[contryHome]);
            //console.log(arrRes[contryHome]['goalsScored']);
            var tempScored = arrRes[contryHome]['goalsScored'];
            var tempConceded = arrRes[contryHome]['goalsConceded'];
            var matchesPlayedWith = arrRes[contryHome]['matchesPlayedWith'];
            if (matchesPlayedWith.indexOf(contryAway) == -1) {
                matchesPlayedWith.push(contryAway);
            }
            tempScored += goalsScored;
            tempConceded +=goalsConceded;
            arrRes[contryHome] = { 'goalsScored': tempScored, 'goalsConceded': tempConceded, 'matchesPlayedWith': matchesPlayedWith};
            //console.log("HOME IN " + contryHome + " scored = " + tempScored + " Conceded = " + tempConceded);
            //goalsScored = 0;
            //goalsConceded = 0;
        }

        if (!arrRes[contryAway]) {
            arrRes[contryAway] = { 'goalsScored': goalsConceded, 'goalsConceded': goalsScored, 'matchesPlayedWith': [contryHome] };
        } else {
            // Brazil / Germany: 1-7
            //console.log("AWAY IN " + contryAway);
            var tempScored = arrRes[contryAway]['goalsScored'];
            var tempConceded = arrRes[contryAway]['goalsConceded'];

            var matchesPlayedWith = arrRes[contryAway]['matchesPlayedWith'];
            if (matchesPlayedWith.indexOf(contryHome) == -1) {
                matchesPlayedWith.push(contryHome);
            }

            tempScored += goalsConceded;
            tempConceded += goalsScored;
            arrRes[contryAway] = { 'goalsScored': tempScored, 'goalsConceded': tempConceded , 'matchesPlayedWith': matchesPlayedWith };
            
           // console.log("AWAY " + contryAway + " scored = " + tempScored + " Conceded = " + tempConceded);
            //goalsScored = 0;
            //goalsConceded = 0;
        }
    }
    //console.log();
    //console.log();
    for (var contry in arrRes) {
        //console.log(arrRes[contry]);
        for (var arr in arrRes[contry]) {
            //console.log(arrRes[contry][arr]);
            for (var keys in arrRes[contry][arr]) {
                arrRes[contry][arr].sort();
            }
        }
        //console.log("----------------------------------");
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


soccerResults(['Germany / Argentina: 1-0',
'Brazil / Netherlands: 0-3',
'Netherlands / Argentina: 0-0',
'Brazil / Germany: 1-7',
'Argentina / Belgium: 1-0',
'Netherlands / Costa Rica: 0-0',
'France / Germany: 0-1',
'Brazil / Colombia: 2-1'
])