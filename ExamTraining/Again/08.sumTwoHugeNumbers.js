function sumTwoHugeNumbers(args) {
    var arr = args[0];
    console.log(arr);
    //var method = args[1].split(/[A-Za-z.)(]+/g);
    var method = args[1].split(/[()]/g);
    //console.log(method[1]);
    var rem = method[1];
    //console.log(rem);

    Array.prototype.removeItem = function removeItem(value) {
        //console.log("value = " + value);
        //console.log(this[0]);
        //console.log(this[2]);
        for (var i = 0; i < this.length; i++) {
            if (this[i]===value) {
                this.splice(i, 1);
                i -= 1;
            }

           // console.log(this[i]);

        }
        return this;
        
    }
    arr = arr.removeItem(1);

    //console.log(arr.removeItem(rem));
    console.log(arr);
    



}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
var method = 'arr.removeItem(1)';
//var arr = ['hi', 'bye', 'hello'];
//var method = 'arr.removeItem(bye)';

sumTwoHugeNumbers([arr, method]);