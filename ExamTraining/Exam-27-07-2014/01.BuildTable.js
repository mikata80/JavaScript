function Solve(args) {

        function fibNum(n) {
            var fib = [1, 1];
            var res = 'no';
            for (var i = 2; i < n; i++) {
                fib.push(fib[i - 1] + fib[i - 2])
            }

            if (n == 2 || n == 3) {
                res = 'yes';
            }

            for (var i in fib) {
                if (fib[i] == n) {
                    res = 'yes';
                    break;
                } else {
                    continue;
                }
            }
            return res;
        }

        var start = args[0];
        var end = args[1];
        console.log('<table>' + '\n' + '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>' );
        for (var i = start ; i <= end; i++) {
            var isFib = fibNum(i);
            var str = '<tr><td>' + i + '</td><td>' + i*i + '</td><td>' + isFib + '</td></tr>';
            console.log(str);
        }
        console.log('</table>');
    }

Solve([999999, 1000000]);
