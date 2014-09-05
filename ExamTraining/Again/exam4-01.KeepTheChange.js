function solved(args) {
    // console.log(args);
    var bill = parseFloat(args[0]);
    var perSrt = args[1];

    console.log(condition(perSrt, bill));

    function condition(str, bill) {
        var res = 0;
        if (str == 'happy') {
            res = bill * 0.10;
        } else if (str == 'married') {
            res = bill * 0.0005;
        } else if (str == 'drunk') {
            var tip = (bill * 0.15);
            var tipWork = parseInt(tip);

            var firstDigit;
            while (tipWork > 0) {

                //console.log("tipWork = " + tipWork);
                firstDigit = parseInt(tipWork % 10);
                tipWork = parseInt(tipWork / 10);
                //console.log("firstDigit = " + firstDigit);

            }

            res = Math.pow(tip, firstDigit);
        } else {
            res = bill * 0.05;
        }

        return res.toFixed(2);
    }
}