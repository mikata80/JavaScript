function numbers(args) {
    //console.log(args);
    var regex = /\d+/g;
    var arr = args[0].match(regex);
    var res = "";
    //console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        var numHex = decToHex(num).toUpperCase();
        //console.log(numHex);
        numHex = zeroPad(numHex, 4);
        if (i == arr.length - 1) {
            res += '0x' + numHex;
        } else {
            res += '0x' + numHex + '-';
        }
    }

    console.log(res);



    function decToHex(dec) {

        var strost = "";

        var ost;
        while (dec > 0) {

            ost = parseInt(dec % 16);
            //console.log("ost = " + ost);
            if (ost == 10) {
                strost += "A";
            }
            else if (ost == 11) {
                strost += "B";
            }
            else if (ost == 12) {
                strost += "C";
            }
            else if (ost == 13) {
                strost += "D";
            }
            else if (ost == 14) {
                strost += "E";
            }
            else if (ost == 15) {
                strost += "F";
            }
            else {
                strost += '' + ost;
            }
            dec = parseInt(dec / 16);
        }

        return strost.split('').reverse().join('');
    }


    function zeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
}