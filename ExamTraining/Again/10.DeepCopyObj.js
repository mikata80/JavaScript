function cloneN(obj) {
    //console.log(obj);
    var copy = obj.constructor();
    for (var attr in obj) {
        //console.log(attr);
        //console.log(obj[attr]);
        //console.log(obj.hasOwnProperty(attr));
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }

    Object.equals = function (x, y) {
                if (x == y) return true;
                // if both x and y are null or undefined and exactly the same

                //if (!(x instanceof Object) || !(y instanceof Object)) return false;
                //// if they are not strictly equal, they both need to be Objects

                //if (x.constructor !== y.constructor) return false;
                //// they must have the exact same prototype chain, the closest we can do is
                //// test there constructor.

                //for (var p in x) {
                //    if (!x.hasOwnProperty(p)) continue;
                //    // other properties were tested using x.constructor === y.constructor

                //    if (!y.hasOwnProperty(p)) return false;
                //    // allows to compare x[ p ] and y[ p ] when set to undefined

                //    if (x[p] === y[p]) continue;
                //    // if they have the same strict value or identity then they are equal

                //    if (typeof (x[p]) !== "object") return false;
                //    // Numbers, Strings, Functions, Booleans must be strictly equal

                //    if (!Object.equals(x[p], y[p])) return false;
                //    // Objects and Arrays must be tested recursively
                //}

                //for (p in y) {
                //    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
                //    // allows x[ p ] to be set to undefined
                //}
                return false;
            }
            //console.log(obj.clone());
            //console.log(obj);
    return copy;
}
//function result(obj) {
//    Object.prototype.clone = function clone() {
//        //var jsonA = JSON.stringify(this);
//        ////console.log(jsonA);
//        //var b = [];
//        //b = JSON.parse(jsonA);
//        //return b;
//        var copy = this.constructor();
//        for (var attr in this) {
//            if (this.hasOwnProperty(attr)) copy[attr] = this[attr];
//        }

//        return copy;
//    }

   
//    Object.equals = function (x, y) {
//        if (x === y) return true;
//        // if both x and y are null or undefined and exactly the same

//        if (!(x instanceof Object) || !(y instanceof Object)) return false;
//        // if they are not strictly equal, they both need to be Objects

//        if (x.constructor !== y.constructor) return false;
//        // they must have the exact same prototype chain, the closest we can do is
//        // test there constructor.

//        for (var p in x) {
//            if (!x.hasOwnProperty(p)) continue;
//            // other properties were tested using x.constructor === y.constructor

//            if (!y.hasOwnProperty(p)) return false;
//            // allows to compare x[ p ] and y[ p ] when set to undefined

//            if (x[p] === y[p]) continue;
//            // if they have the same strict value or identity then they are equal

//            if (typeof (x[p]) !== "object") return false;
//            // Numbers, Strings, Functions, Booleans must be strictly equal

//            if (!Object.equals(x[p], y[p])) return false;
//            // Objects and Arrays must be tested recursively
//        }

//        for (p in y) {
//            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
//            // allows x[ p ] to be set to undefined
//        }
//        return true;
//    }
//    //console.log(obj.clone());
//    //console.log(obj);
//    return (obj.clone());
    
//}



var a = { name: 'Pesho', age: 21 };
console.log(a);
//var b = result(a);
//cloneN(a);
var b = cloneN(a);
console.log(b);
console.log(Object.equals(a, b));
console.log("=============================");
var a = { name: 'Pesho', age: 21 };
console.log(a);
//var b = result(a);
//cloneN(a);
var b = a;
console.log(b);
console.log(Object.equals(a, b));
//console.log("a => "+a);
//console.log("B => " + b);

//var a = { name: 'Pesho', age: 21 };
////result(a);
//var b = a;
//console.log("a => " + a);
//console.log("B => " + b);