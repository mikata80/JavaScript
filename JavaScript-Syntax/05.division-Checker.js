function divisionChecker(num) {
    var sumOfdigits = 0;
    while (num > 0) {
        //console.log(num);
        sumOfdigits += num % 10;
        //console.log(sumOfdigits);
        num = Math.floor(num / 10);
    }

    console.log(sumOfdigits);
    if (sumOfdigits % 3 == 0) {
        console.log('the number is divided by 3 without remainder');
    } else {
        console.log('the number is not divided by 3 without remainder');
    }
}

divisionChecker(12);
divisionChecker(188);
divisionChecker(591);