function sortTable(args) {
    var regex = /([<tr><td>])([</td><td>])([</td></tr>])+/g;
    var workArr = [];
    var resArr = {};
    for (var i = 2; i < args.length - 1; i++) {
        var str = args[i].replace(regex, '|');
        str = str.replace(str.substr(0,1),'')
        workArr.push(str);
    }

    for (var i = 0; i < workArr.length; i++) {
        var arrTemp = workArr[i].split('|');
        var prod = arrTemp[0];
        var price = parseFloat(arrTemp[1]);
        var vote = arrTemp[2];
        if (!resArr[prod]) {
            resArr[prod] = [price, vote];
        }
    }
    //console.log(resArr);
   // console.log();

    resArr = sortOnKeys(resArr);
   // console.log(resArr);
    var sorttable = [];
    for (var article in resArr) {
        var price = parseFloat(resArr[article][0]);
        var vote = resArr[article][1];
        sorttable.push([article, price,vote]);
        sorttable.sort(function (a, b) {
            return a[1] - b[1]
        });
    }
   // console.log();
   // console.log(sorttable);


    //sortOnKeys
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

    console.log('<table>');
    console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');
     for (var arr in sorttable) {
         //console.log(sorttable[arr]);
         var prod = sorttable[arr][0];
         var price = sorttable[arr][1];
         var vote = sorttable[arr][2];
         console.log('<tr><td>' + prod + '</td><td>' + price + '</td><td>' + vote + '</td></tr>')
     }
    console.log('</table>');
   
}




//=========================

sortTable(['<table>',
'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Laptop Lenovo IdeaPad B5400</td><td>929.00</td><td>0</td></tr>',
'<tr><td>Laptop ASUS ROG G550JK-CN268D</td><td>1939.00</td><td>+1</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'<tr><td>Kamenitza Lemon 1 l</td><td>1.65</td><td>+7</td></tr>',
'<tr><td>Vodka Absolute 1 l</td><td>22.00</td><td>+2</td></tr>',
'<tr><td>Laptop Dell Inspiron 3537</td><td>1199.0</td><td>+3</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>-10</td></tr>',
'<tr><td>Ariana Radler 1.5 l</td><td>2.79</td><td>+33</td></tr>',
'<tr><td>Coffee Lavazza 250 gr.</td><td>8.73</td><td>+10</td></tr>',
'</table>']);