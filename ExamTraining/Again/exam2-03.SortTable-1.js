function sortTable(args) {
    var regex = /([<tr><td>])([</td><td>])([</td></tr>])+/g;
    var workArr = [];
    var resArrTmp = [];
    var resArr = [];
    for (var i = 2; i < args.length - 1; i++) {
        var str = args[i].replace(regex, '|');
        str = str.replace(str.substr(0,1),'')
        workArr.push(str);

    }

    //workArr = workArr.sort();
    for (var i = 0; i < workArr.length; i++) {
        var arrTemp = workArr[i].split('|');
        var prod = arrTemp[0];
        var price = parseFloat(arrTemp[1]);
        var vote = arrTemp[2];
        var arrTemp2 = [prod, price, vote];
        //console.log(arrTemp2);
        resArrTmp.push(arrTemp2);
    }
    console.log(resArrTmp);

    for (var i = 0; i < resArrTmp.length; i++) {
        var arr = resArrTmp[i];
        var prod = arr[0];
        var price = arr[1];
        var vote = arr[2];
        resArr[prod] = [price, vote];
    }
    console.log(resArr);
}




//=========================

sortTable(['<table>',
'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'</table>']);