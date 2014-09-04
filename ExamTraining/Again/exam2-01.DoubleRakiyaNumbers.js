function doubleRakiaNumbers(args) {
    var start = parseInt(args[0]);
    var end = parseInt(args[1]);

    console.log('<ul>')
    for (var i = start; i <= end; i++) {
        var str = '' + i;
        var arrNum = str.split('');
        
        if (isDoubleRadia(arrNum)) {
            console.log('<li><span class=' + '\'' + 'rakiya' + '\'' + '>' + i + '</span><a href="view.php?id=' + i + '>View</a></li>')
        } else {
            console.log('<li><span class=' + '\'' + 'num' + '\'' + '>' + i + '</span></li>')
        }
    }
    console.log('</ul>')
    


    function isDoubleRadia(arrNum) {
        for (var i = 0; i < arrNum.length - 1; i++) {
            var num1 = arrNum[i];
            var num2 = arrNum[i + 1];
            var num = '' + num1 + num2;
            //console.log(num);
            //console.log("----------------------------------------------------------------------------");
            for (var j = i+2 ; j < arrNum.length - 1; j++) {
                var num11 = arrNum[j];
                var num12 = arrNum[j + 1];
                var numNew = '' + num11 + num12;
                // console.log(numNew);
                if (num == numNew) {
                   // console.log('aaa = '+ num);
                    return true;
                }

            }
            //console.log("===============================================================================");
        }

        return false;

    }

    
}


doubleRakiaNumbers(['55555', '55560'])