function Solved(args) {
    var reg = /<td>(.*?)<\/td>+/g;
    var arr = [];
    var bigrow = 0;
    var bigindex = 0;
    var res = 0;
    
  //  console.log(args.length);

    for (var i = 2; i < args.length-1; i++) {
        arr = args[i].split(reg);
        //console.log(arr);
        res = BiggestTableRow(arr);
       // console.log(res);
        if (Math.abs(res) > bigrow) {
            bigrow = res;
            bigindex = i;
        }

    }
    //console.log(bigrow);
    var arr = args[bigindex].match(reg);
    //var resarr = [];
    //console.log(args[bigindex].match(reg));
    //console.log(args[bigindex].match(reg).length);

    
    var strlast = '';
    var resstr = '';
    try {
        for (var i = 1; i < args[bigindex].match(reg).length; i++) {
            var str = args[bigindex].match(reg)[i].replace('<td>', '').replace('</td>', '');//args[bigindex].match(reg)[i].match(/[+-]?\d+\.\d+/);
            //console.log('str = '  + str);
            if (str !='' & str != null & str !='-'& str != '+') {
                if (i == args[bigindex].match(reg).length - 1) {
                    strlast += str;
                } else {
                    strlast += str + ' + ';
                }
            }
        }
        resstr = bigrow + ' = ' + strlast;
    } catch (err) {

        resstr = 'no data';
    }
    var len = resstr.length-2;
    var lastChr = resstr.substring(len, len+1);
    if (lastChr == '+' || lastChr == '-') {
        console.log(resstr.substring(0, resstr.length-2).trim());
    } else {
        console.log(resstr.trim());
    }
    
    //for (var i = 1; i < args[bigindex].length; i++) {
    //    console.log(args[bigindex].split(reg));
    //}
    
    
    

    function BiggestTableRow(arr) {
        //console.log(arr);
        var evalstr = "";
        var res = 0;
        for (var i = 2; i < arr.length; i++) {
            //console.log(arr[i].match(/[+-]?\d+\.\d+/));
            //console.log(arr[i] + ' = '+ arr[i].split(/[+-]?\d+\.\d+/g) );
            
            evalstr += '+' + arr[i].match(/[+-]?\d+(?:\.\d+)?/);
           // console.log(evalstr);
            
            //if (res > bigrow) {
            //    bigrow = res;
            //    bigrostr = bigrow + '=' + evalstr.match('/\d+/');
            //}

        }
        //console.log(evalstr);
        res = eval(evalstr);
        return res;
        
       // console.log(eval(evalstr));
    }

}

//Solved([
//'<table>',
//'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',

////'<tr><td>Sofia</td><td>1</td><td>1</td><td>1</td></tr>',

//'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
//'<tr><td>Varna</td><td>-</td><td>18.02</td><td>36.11</td></tr>',
//'<tr><td>Pleven</td><td>1</td><td>-</td><td>1</td></tr>',
//'<tr><td>Vidin</td><td>12850</td><td>-560</td><td>20833</td></tr>',
//'<tr><td>Rousse</td><td>-</td><td>299.999999</td><td>-</td></tr>',
//'<tr><td>Bourgas</td><td>-</td><td>25000</td><td>-</td></tr>',
//'<tr><td>Plovdiv</td><td>17.2</td><td>-</td><td>6.4</td></tr>',
//'<tr><td>Sofia</td><td>-</td><td>1</td><td>1</td></tr>',

//'</table>'
//]);
//console.log('---------------------------------------------------');

//Solved([
//'<table>',
//'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',

//'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
//'<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',


//'</table>'
//]);
//console.log('---------------------------------------------------');

//Solved([
//'<table>',
//'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',

//'<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
//'<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
//'<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
//'<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',

//'</table>'
//]);
//console.log('---------------------------------------------------');

//Solved([
//'<table>',


//'<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
//'<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
//'<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr',
//'<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',

//'</table>'
//]);
//console.log('---------------------------------------------------');

Solved([
'<table>',

'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Pleven</td><td>-100</td><td>-200</td><td>-</td></tr>',
'<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>',
'<tr><td>Rousse</td><td>-</td><td>-200</td><td>-100</td></tr>',

'</table>'

]);