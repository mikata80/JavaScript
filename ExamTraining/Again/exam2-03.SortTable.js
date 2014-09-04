function Solve(args) {
    var tableArr = [];
    var patt = '/ /g'
    for (var i = 2; i < args.length - 1; i++) {
        var str = args[i].replace('<tr>', '').replace('</tr>', '');
        tableArr.push(str);
    }

    var reg = /<td>(.*?)<\/td>+/g;
    var res = {};
    var temparr = [];
    for (var i = 0; i < tableArr.length; i++) {
        var str = tableArr[i];
        var tmp = str.split(reg);
        temparr.push(tmp);
    }

    //console.log(temparr);

    //function getSortedKeys(obj) {
    //    var keys = [];
    //    for (var key in obj) {
    //        keys.push(key);
    //    }
    //    return keys.sort(function (a, b) { return obj[a] - obj[b] });
    //}

    for (var i = 0; i < temparr.length; i++) {
        var arr = temparr[i];
        var article = arr[1];
        var price = arr[3];
        var trash = arr[5];
        res[article] = [price, trash];

    }
    console.log(res);
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

    res = sortOnKeys(res);
    var sorttable = [];
    for (var article in res) {
        var price = res[article][0];
        var trash = res[article][1];
        //sorttable.push(['<tr><td>' + article + '</td><td>', price + '</td><td>', trash + '</td></tr>']);
        sorttable.push([article, price, trash]);
        sorttable.sort(function (a, b) {
            return a[1] - b[1]
        });
    }

  //  console.log(sorttable);
/*    console.log('<table>');
    console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');
    for (var s in sorttable) {
        var strarr = sorttable[s];
        var str = ''// strarr[0] + '</td><td>';
        for (var i = 0; i < strarr.length; i++) {
            if (i < strarr.length - 1) {
                str += strarr[i] + '</td><td>';
            } else {
                str += strarr[i];
            }

        }
        //str.replace("<td></td>", '');
        //console.log(str);
        console.log('<tr><td>' + str + '</td></tr>');
    }
    console.log('</table>');
    */
}
//function sortTable(args) {
//    var regex = /([<tr><td>])([</td><td>])([</td></tr>])+/g;
//    var workArr = [];
//    var resArr = [];
//    for (var i = 2; i < args.length - 1; i++) {
//        var str = args[i].replace(regex, '|');
//        str = str.replace(str.substr(0,1),'')
//        workArr.push(str);
        
//    }

//    //workArr = workArr.sort();
//    for (var i = 0; i < workArr.length; i++) {
//        var arrTemp = workArr[i].split('|');
//        var prod = arrTemp[0];
//        var price = parseFloat(arrTemp[1]);
//        var vote = arrTemp[2];
//        if (!resArr[prod]) {
//            resArr[prod] = {};
//        }
//        if (!resArr[prod][price]) {
//            resArr[prod]['price'] = price;
//            resArr[prod]['vote'] = vote;
//        }
//    }
//    //var sorted = resArr[prod].sort(function (a, b) {
//    //    return a[price] - b[price];
//    //});
//    //console.log(sorted);

//    for (var prod in resArr) {
//        console.log(resArr[prod]);
//        resArr[prod].

//            .sort(function (a, b) {
//            console.log(a.price);
//            return a.price - b.price;
//        });
//       // console.log(resArr[prod]);
//        //for (var price in resArr[prod]) {
//        //    if (price == 'price') {
//        //        resArr.sort(function (a, b) {
//        //            console.log(a.price);
//        //            return a.price - b.price;
//        //        });
//        //        //console.log(resArr[prod]);
//        //    }
//        //}
        
//    //    //     resArr[prod] = sortObjectProperties(resArr[prod]);
//    //    resArr[prod].sort(compare);
//    //    //for (var price in resArr[prod]) {
//    //    //    //resArr[prod][price].sort();
//    //    //    console.log(resArr[prod][price]);
//    //    //}
//    }

//    function compare(a, b) {
//        console.log(a.price);
//        if (a.price < b.price)
//            return -1;
//        if (a.price > b.price)
//            return 1;
//        return 0;
//    }

//   // resArr = resArr.sort(compare);
   
//    function sortObjectProperties(obj) {
//        //console.log('---------------------------------------------------------------------------------------');
//        //console.log(obj);
//        var keysSorted = Object.keys(obj).sort();
//        //console.log("keysSorted = " + keysSorted);
//        var sortedObj = {};
//        for (var i = 0; i < keysSorted.length; i++) {
//            var key = keysSorted[i];
//            console.log(key);
//            sortedObj[key] = obj[key];
//        }
//        //    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
//        //console.log(sortedObj);
//        //console.log(sortedObj);
//        return sortedObj;
//    }
//    //resArr = sortObjectProperties(resArr);
//    //console.log(resArr);
//}




//=========================

Solve(['<table>',
'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'</table>']);