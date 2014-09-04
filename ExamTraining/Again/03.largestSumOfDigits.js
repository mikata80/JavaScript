function largestSumOfDigits(args) {
    var maxSum = 0;
    var numRes = 0;
    for (var i = 0; i < args.length; i++) {
        var num = args[i];
       // console.log(typeof (num));
        if ((typeof (num) != 'number') || (num % 1 != 0)) {
            //console.log(typeof (num));
            numRes= 'undefined';
            break;
        }

        if (maxSum < sumOfDigits(num)) {
            maxSum = sumOfDigits(num);
            numRes = num;
        }
        
        //console.log(num + " => " + sumOfDigits(num));
    }

    console.log(numRes);

}

    function sumOfDigits(num) {
        var sum = 0;
        var n = Math.abs(num);
        while (n >0) {
            sum += n % 10;
            n/= 10;
        }

        return Math.floor(sum);

    }


largestSumOfDigits([5, 10, 15, 111])
largestSumOfDigits([33, 44, -99, 0, 20])
largestSumOfDigits(['hello']);
largestSumOfDigits([5, 3.3]);