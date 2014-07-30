function checkDigit(num) {
    var cnt = 0;
    for (var i = 1; i <= 3; i++) {
        var ost = Math.floor(num % 10).toFixed(0);
        //console.log(i + '->' + ost);
        if (i == 3  && ost == 3) {
            cnt = 0;
            break;
        }
        cnt++;
        num /= 10;
     }
   
    if (cnt == 0) {
        return 'true'
    } else {
        return 'false'
    }
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));