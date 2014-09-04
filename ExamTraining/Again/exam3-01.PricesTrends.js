function pricesTrends(args) {
    //console.log(args);
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>' + parseFloat(args[0]).toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
    for (var i = 0; i < args.length-1; i++) {
        var firstPrice = parseFloat(args[i]);//.toFixed(2);
        var nextPrice = parseFloat(args[i + 1]);//.toFixed(2);
        var one = (firstPrice.toFixed(2)) / 1;
        var sec = (nextPrice.toFixed(2)) / 1;
        //console.log("typeofFP = " + typeof (firstPrice), "typeofNP = " + typeof (nextPrice), "typeofOne = " + typeof (one) + " = "+ one);
        //console.log("firstPrice = "+ firstPrice.toFixed(2), "nextPrice = "+ nextPrice);
        if (one == sec) {
            console.log('<tr><td>' + nextPrice.toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
        }
        if (one < sec) {
            console.log('<tr><td>' + nextPrice.toFixed(2) + '</td><td><img src="up.png"/></td></td>');
        }
        if (one > sec) {
            console.log('<tr><td>' + nextPrice.toFixed(2) + '</td><td><img src="down.png"/></td></td>');
        }
       //console.log('-----------------------');

    }
    console.log('</table>');

}



pricesTrends(['1',
'1',
'1',
'1.001',
'1.000001',
'2',
'2',
'2',
'2.1',
'2',
'2.1',
'2',
'1.99',
'1.999',
'1.99001',
'1.99002',
'1.99003',
'4',
'5',
'342.33',
'23.44',
'5.22',
'3.44',
'7.22',
'2'])