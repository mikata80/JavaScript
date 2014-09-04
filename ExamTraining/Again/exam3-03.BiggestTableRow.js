function biggestTableRow(args) {
    var regex = /([<tr><td>])([</td><td>])([</td></tr>])+/g;
    var sum = 0;
    var arrRes = [];
    var strRes = "";
    //console.log(args);
    for (var i = 2; i < args.length-1; i++) {
        var row = args[i];
        var str = row.replace(regex, '|');
        str = str.replace(str.substring(0, 1), '');
        var arr = str.split('|');
        //console.log(str);
        //console.log(arr);
        arrRes.push(arr);
        
    }
    //console.log(arrRes);
    for (var arr in arrRes) {
        var town = arrRes[arr][0];
        var stor1 = (arrRes[arr][1]);
        var stor2 = (arrRes[arr][2]);
        var stor3 = (arrRes[arr][3]);
        var strSotr1 = stor1.toString();
        var strSotr2 = stor2.toString();
        var strSotr3 = stor3.toString();
        //console.log(strSotr1 + " + " + strSotr2 + " + " + strSotr3);
        
        if (strSotr1 == '-'){
            stor1 = 0.00;
        }

        if (strSotr2 == '-') {
            stor2 = 0.00;
        } 
        if (strSotr3 == '-') {
            stor3 = 0.00;
        }

       // console.log(stor1 + " + " + stor2 + " + " + stor3);
        var sumRow = stor1 / 1 + stor2 / 1 + stor3 / 1;
       
        if (sumRow > 0) {

            if (sum < sumRow) {

               // console.log(town);
                sum = sumRow;
                strSotr1 = stor1.toString();
                strSotr2 = stor2.toString();
                strSotr3 = stor3.toString();
                strRes = sum + " = " + strSotr1 + " + " + strSotr2 + " + " + strSotr3;

            }
        } else {
            //console.log(sum);
            //console.log(sumRow);
            if (sum.toString() > sumRow.toString()) {
                //console.log(town);
                sum = sumRow;
                strSotr1 = stor1.toString();
                strSotr2 = stor2.toString();
                strSotr3 = stor3.toString();
                strRes = sum + " = " + strSotr1 + " + " + strSotr2 + " + " + strSotr3;

            }
            //console.log("----------------");
        }
        
        //console.log(town, stor1, stor2, stor3, sumRow);

        
    }

    if (strRes == "") {
        console.log("no data");
    } else {
        strRes = strRes.replace(' 0 +', '');
        strRes = strRes.replace('+ 0', '');
        console.log(strRes);
    }
}

biggestTableRow(['<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Pleven</td><td>-100</td><td>-200</td><td>-</td></tr>',
'<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>',
'<tr><td>Rousse</td><td>-</td><td>-200</td><td>-100</td></tr>',
'</table>']);

biggestTableRow(['<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
'<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
'<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
'<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
'</table>']);


biggestTableRow(['<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
'</table>']);

biggestTableRow(['<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
'<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
'<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>',
'</table>']);


