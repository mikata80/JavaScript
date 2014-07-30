function isInt(n) {
    return n % 1 === 0;
}
function findLargestBySumOfDigits(arr) {
    var sum = 0;
    var tmpsum = 0;
    var bignumsum = 0;
    
    
    for (var i = 0; i < arr.length; i++) {
        var num = Math.abs(arr[i]);
        //console.log('isInt = ' + isInt(num));
        if (isInt(num)) {


            //console.log(num);
            while (num != 0) {
                tmpsum += num % 10;
                Math.floor(num /= 10);
                //console.log('tmpsum = ' + tmpsum);
            }

            //console.log('tmpsum = ' + tmpsum);
            tmpsum = Math.floor(tmpsum);
            if (sum < tmpsum) {
                sum = tmpsum;
                tmpsum = 0;
                bignumsum = arr[i];
            }
            //console.log('sum = '+ sum);
            //console.log('--------------');
            //console.log(bignumsum);
        } else {
            bignumsum = 'undefined';
        }

    }
    return bignumsum;
    
}

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits('hello'));
console.log(findLargestBySumOfDigits([5,3.3]));

