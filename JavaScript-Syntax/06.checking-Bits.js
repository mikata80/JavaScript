function checkingBits(num) {
    if ((num >> 3 % 3 & 1 )== 1) {
        console.log('true');
    } else {
        console.log('false');
    }
}

checkingBits(333);
checkingBits(425);
checkingBits(2567564754)