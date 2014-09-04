﻿function Solved(args) {
    var resarr = {};
    for (var row in args) {
        var arrTemp = args[row].split('|');
        var band = arrTemp[0].trim();
        var town = arrTemp[1].trim();
        var stadium = arrTemp[3].trim();

        if (!resarr[town]) {
            resarr[town] = {};
        }

        if (!resarr[town][stadium]) {
            resarr[town][stadium] = [];
        }

        if (resarr[town][stadium].indexOf(band) == -1) {
            resarr[town][stadium].push(band);
        }
    }

    for (var city in resarr) {
        resarr[city] = sortObjectProperties(resarr[city]);
        for (var stadium in resarr[city]) {
            resarr[city][stadium].sort();
        }
    }


    function sortObjectProperties(obj) {
        //console.log('---------------------------------------------------------------------------------------');
        //console.log(obj);
        var keysSorted = Object.keys(obj).sort();
      //  console.log("keysSorted = " + keysSorted);
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            //console.log(key);
            sortedObj[key] = obj[key];
        }
        //    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        //console.log(sortedObj);
        //console.log(sortedObj);
        return sortedObj;
    }
    resarr = sortObjectProperties(resarr);
    console.log(resarr);
    console.log(JSON.stringify(resarr));
    

}


//==============
Solved([
  'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
'Helloween | London | 28-Jul-2014 | Wembley Stadium',
'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
'Metallica | London | 03-Oct-2014 | Olympic Stadium',
'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium']);