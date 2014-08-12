function Solve(args) {
    var rotationstr = '' + args[0];
    var r = rotationstr.replace('Rotate(', '').replace(')', '')%360;
    //console.log('r = ' + r);
   
    var matrix = [];

    for (var i = 1; i < args.length; i++) {
        matrix.push(args[i].split(''));
    }

    function rotatematrix(matrix) {

        var w = matrix.length;
        var h = 0;

        for (var i = 1; i < matrix.length; i++) {
            var len = matrix[i].length;
            if (h < len) {
                h = len;
            }
        }
        var ret = [];
        for (var i = 0; i < h; ++i) {
            var all = "";
            for (var j = 0; j < w; ++j) {
                var str = " ";
                if (matrix[w - j - 1][i] == undefined) {
                    all += str;
                } else {
                    all += matrix[w - j - 1][i];
                }
            }
            ret.push(all);
            all = "";
        }
        return ret;
    }

    function printMatrix(matrix) {
        var w = matrix.length;
        var h = 0;

        for (var i = 1; i < matrix.length; i++) {
            var len = matrix[i].length;
            if (h < len) {
                h = len;
            }
        }

        for (var row = 0; row < w; row++) {
            var all = "";
            for (var col = 0; col < h; col++) {
                if (matrix[row][col] != undefined) {
                    all += matrix[row][col] + '';
                }
            }
            console.log(all + '');
            all = "";
        }
    }

    if (r>0) {
        while (r > 0) {
            matrix = rotatematrix(matrix);
            r -= 90;
        }

        printMatrix(matrix);
    } else {
        printMatrix(matrix);
    }
    
}

//Solve(["Rotate(90)", "hello", "softuni", "exam"]);
//console.log('-----------------')
//Solve(["Rotate(180)", "hello", "softuni", "exam"]);
//console.log('-----------------')
//Solve(["Rotate(270)", "hello", "softuni", "exam"]);
//console.log('-----------------')
//Solve(["Rotate(720)", "js","exam"]);
//console.log('-----------------')
//Solve(["Rotate(810)", "js", "exam"]);
//console.log('-----------------')
//Solve(["Rotate(0)", "js", "exam"]);
//console.log('-----------------')
Solve(["Rotate(450)",
'JavaScript (JS) is a dynamic computer programming language.',
'It is most commonly used as part of web browsers,',
'whose implementations allow client-side scripts',
'to interact with the user, control the browser,',
'communicate asynchronously,',
'and alter the document content that is displayed.',
'It is also being used in server-side network',
'programming (with Node.js),',
'game development and the',
'creation of desktop and mobile applications.'])


/* 

90
hello           
softuni     
exam     

esh
xoe
afl
mtl
 uo
 n 
 i 


*/