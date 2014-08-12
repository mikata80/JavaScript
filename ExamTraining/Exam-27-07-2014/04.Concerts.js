function concerts(args) {

    var resarr = {};
    for (var i in args) {
        var str = args[i].split(" | ");
        var group = str[0];
        var city = str[1];
        var stadium = str[3];
        
        if (!resarr[city]) {
            resarr[city] = {};
        }

        if (!resarr[city][stadium]) {
            resarr[city][stadium] = [];
        }
        
        if (resarr[city][stadium].indexOf(group) == -1) {
            resarr[city][stadium].push(group);
        }
    }

    
    for (var city in resarr) {
        resarr[city] = sortObjectProperties(resarr[city]);
        for (var stadium in resarr[city]) {
            resarr[city][stadium].sort();
        }
    }
    function sortObjectProperties(obj) {
        console.log(obj);
        var keysSorted = Object.keys(obj).sort();
        console.log('--------------------');
        console.log(keysSorted);
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        console.log('^^^^^^^^^^^^^^^^^');
        return sortedObj;
    }
   // resarr = sortObjectProperties(resarr);
    //console.log(JSON.stringify(resarr));
    //for (var key in resarr) {
    //    console.log(resarr[key]);
    //}
}

concerts(['ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
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
'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'])