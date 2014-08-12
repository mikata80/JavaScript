function Solved(arr) {
    
    function checkNums(a, b) {
        if (a > b) {
            return 'DOWN';
        } else if (a < b) {
            return 'UP';
        } else {
            return 'FIXED';
        }

    }
    var args = [];
    for (var i = 0; i < arr.length; i++) {
        
        //console.log(typeof(arr[i]));
        var f = parseFloat(arr[i]);
        var fixed = f.toFixed(2);
        args.push(parseFloat(fixed));
        //console.log(fixed);

    }

    //for (var i = 0; i < args.length; i++) {
    //    console.log(args[i]);
    //}
    var fixed = args[0];
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>' + fixed.toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
    for (var i = 1; i < args.length; i++) {
        //var n = args[i].toFixed(2);
        var num = args[i];
        //var num1 = n;
        var res = checkNums(fixed, num);
        if (res == "DOWN") {
            console.log('<tr><td>' + num.toFixed(2) + '</td><td><img src="down.png"/></td></td>');
        } else if (res == "UP") {
            console.log('<tr><td>' + num.toFixed(2) + '</td><td><img src="up.png"/></td></td>');
        } else {
            console.log('<tr><td>' + num.toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
        }
        fixed = num;
    }

    console.log('</table>');
}




//=-========================================
Solved(['31.333',
'36.5',
'100.009',
'-50.45',
'37.019',
'35.4',
'35',
'35.001',
'36.225'
]);