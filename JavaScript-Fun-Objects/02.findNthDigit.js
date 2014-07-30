function nthDigitOfNumber(arr) {
    var n = arr[0];
    var num = "" + Math.floor(Math.abs(arr[1]));
    var resarr = num.split('');
    //for (var i in resarr) {
    //    console.log(i + "->" + resarr[i]);

    //}
    var nn = 0;
    if (n>=num.length) {
        nn = num.length - n;
    }
    var res = resarr[nn];
    var restxt = '';
    if (res === undefined) {
        restxt = 'The number doesn\''+'t have ' + n + ' digits';
    } else {
        restxt = res;
    }
    return restxt;
}

console.log(nthDigitOfNumber([1, 6]));
console.log(nthDigitOfNumber([2, -55]));
console.log(nthDigitOfNumber([6, 923456]));
console.log(nthDigitOfNumber([3, 1451.78]));
console.log(nthDigitOfNumber([6, 888.88]));



