function biggerThanNeighbors(args) {
    var index = args[0];
    var arrNums = args[1];
    var neiLeft = arrNums[index - 1];
    var num = arrNums[index];
    var neiRight = arrNums[index + 1];
    var res = "";

    if (index>arrNums.length-1) {
        res = "invalid index";
        return console.log(res);
        
    }

    if (index > 0) {
        if (num> neiLeft && num > neiRight) {
            res = "bigger";
        } else {
            res = "not bigger";
        }
    } else {
        res = 'only one neighbor';
    }
    return console.log(res);
}


biggerThanNeighbors([2, [1, 2, 3, 3, 5]]);
biggerThanNeighbors([2, [1, 2, 5, 3, 4]]);
biggerThanNeighbors([5, [1, 2, 5, 3, 4]]);
biggerThanNeighbors([0, [1, 2, 5, 3, 4]]);

