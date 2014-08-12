function Solved(args) {
    var start = args[0];
    var end = args[1];
    for (var i = start; i <= end; i++) {
        console.log(i + ' ' + doubleRakiyaNumbers(i));
        console.log('----------------');
    }
    /*
    11211
    pow = 100;check = 11;num = 112
    pow = 1000;check = 112;num = 0

    */
    function doubleRakiyaNumbers(num) {
      /*  var numStr = '' + num;
        var existingPairs = { };
        for (var i = 1; i < numStr.length; i++) {
            var pair = numStr.substr(i - 1, 2);
            console.log(i + '.' + 'pair = ' + pair);
            if (existingPairs[pair]) {
                console.log(i + '.' + 'existingPairs[pair] = ' + existingPairs[pair] + ';' + 'i = ' + i);
                if (i - existingPairs[pair] >= 2) {
                    return true;
                }
            } else {
                existingPairs[pair] = i;
            }
        }
        return false;*/
        var isDouble = false;
        
        var mainstr = num.toString();
        var arr = [];
        for (var i = 0; i < mainstr.length; i++) {
           // console.log('num = ' + num);
            //var oldstr = str;
            var str = parseInt((num%100));
            //console.log('str = ' + str);
            //var numstr = num.toString();
            // if (mainstr.indexOf(str) != -1) {
            //console.log('num1 =' + num +';' +'num/100 ='+ num / 100);
            //if ((num / 100) > 1) {
                arr.push(str);
            //}
            
              // console.log('aaaa')
            //   cnt++;
            //}

            //if (oldstr != str && oldstr!=null) {
            //    cnt--;
            //}

            //if (cnt == 2 && oldstr == str && num.toString() != str) {
            //    console.log('cnt_true = ' + cnt);
            //    isDouble = true;
            //    break;
            //}
           // console.log('cnt = ' + cnt);
            num = parseInt(num / 10);
           // console.log('^^^^^^');
            

        }

        for (var i in arr) {
            console.log(arr[i]);
        }
        
        var cnt = 0;
        for (var i = 0; i < arr.length; i++) {
            var exisits = '' + arr[i];
            for (var j = i + 1; j < arr.length ; j++) {
                var strnow = '' + arr[j];
                //console.log(i + '.' + 'exisits = ' + exisits + ';' + 'strnow = ' + strnow);
                if (exisits == strnow) {
                    cnt++;
                   // console.log(j + '.' + 'cnt = ' + cnt);
                    //console.log(arr[j]);
                }

                if (arr.length>4) {
                    if (cnt >= 1) {
                        isDouble = true;
                        //break;
                    }
                } else {
                    if (cnt == 1) {
                        isDouble = true;
                        //break;
                    }
                }
                
            }
            cnt = 0;
                
        }

        //var i = 2;
        //var j = 1;
        //var check = parseInt(num % 100);
        //var numorig = num;
        //var oldcheck = parseInt(num % 100);
        //while (num != 0) {

        //    var pow = 0;
        //    console.log(j + '.' + 'num = ' + num  + ';'+ 'i = '+ i);
        //    pow = Math.pow(10, i);
        //    console.log(j + '.' + 'pow = ' + pow);
        //    check = parseInt((numorig / pow) % pow);
        //    console.log('oldcheck = ' + oldcheck + ';' + 'check = ' + check);
        //    if (oldcheck == check) {
        //        isDouble = true;
        //        break;
        //    }
        //    pow = Math.pow(10, i++);
        //    num = parseInt(num / pow);
        //    oldcheck = parseInt(num % pow)
        //    console.log('pow = ' + pow + ';' + 'oldcheck = ' + oldcheck + ';' + 'check = ' + check + ';' + 'num = ' + num)
        //    if (oldcheck == check) {
        //        isDouble = true;
        //        break;
        //    }
            
        //    i++;
        //    j++;

        //}

        return isDouble;
    }
}

//Solved([5, 8]);
Solved([11210, 11215]);
//Solved([55555, 55560]);