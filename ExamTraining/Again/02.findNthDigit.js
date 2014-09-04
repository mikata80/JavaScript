function nthDigitOfNumber(args) {
    var n = args[0];
    var num = Math.abs(args[1]).toString();
    num = num.replace('.', '');
    var arr = num.split('');
    arr = arr.reverse();
    //console.log(arr);
    res = arr[n-1]
    if (res == undefined) {
        console.log("The number doesn't have " + n + " digits")
    } else {
        console.log(res);
    }
    
}
nthDigitOfNumber([1, 6]);
nthDigitOfNumber([2, -55]);
nthDigitOfNumber([3, 1451.78]);
nthDigitOfNumber([6, 923456]);
nthDigitOfNumber([6, 888.88]);