function Solved(args) {
    var arr = args;

    function builtTable(arr) {
        var from = arr[0];
        var to = arr[1];
        console.log("<table>");
        console.log("<tr><th>Num</th><th>Square</th><th>Fib</th></tr>");
        for (var i = from; i <= to; i++) {
            console.log("<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + isFibonacci(i) + "</td></tr>");
        }
        console.log("</table>");
    }
    function isFibonacci(num) {
        var res = "no";
        if ((isPerfectSquare(5 * num * num + 4)) || (isPerfectSquare(5 * num * num - 4))) {
            res = "yes";
        }
        return res;
    }

    function isPerfectSquare(num) {
        var n = num.toFixed(10);
        var sqrt = parseInt(Math.sqrt(num));
        return (sqrt * sqrt == num);
    }

    builtTable(arr);
}

// exec function Solved

Solved([5, 10]); // test003
Solved([999999, 1000000]);// test010


