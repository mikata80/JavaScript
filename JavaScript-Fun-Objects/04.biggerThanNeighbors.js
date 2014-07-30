function maxArrIndex(arr) {
    var maxindex = 0;
    for (var i = 0; i < arr.length; i++) {
        maxindex = i;
    }
    return maxindex;
}
function biggerThanNeighbors(index, arr) {
    var downindex = arr[index - 1];
    var num = arr[index];
    var upindex = arr[index + 1];
    var maxindex = maxArrIndex(arr);
    var res = '';
    if( (num > downindex & num > upindex)||(index == maxindex)) {
        res = 'bigger';
    } else if (num > downindex & num == upindex) {
        res = 'not bigger';
    } else if (index > maxindex) {
        res = 'invalid index';
    } else if (index == 0) {
        res = 'only one neighbor';
    }
    return res;
}

console.log(biggerThanNeighbors(2, [1, 2, 3, 3, 5]));
console.log(biggerThanNeighbors(2, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(5, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(0, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(4, [1, 2, 5, 3, 4]));