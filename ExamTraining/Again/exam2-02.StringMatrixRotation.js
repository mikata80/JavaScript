function stringMatrixRotation(args) {
    var str = args[0].toString();
    var degree = args[0].match(/[0-9]+/g).toString();
    var cnt = degree / 90;
    //console.log(args[0]);
    var words = [];
    //for (var i = 1; i < args.length; i++) {
    //    words.push(args[i]);
    //}
    for (var i = args.length-1; i >0; i--) {
        words.push(args[i]);
    }
    
    
    console.log(degree);
    console.log(words);

    for (var i = 0; i < words.length; i++) {
        var s = words[i];
        console.log(reverse(s, cnt));
    }

    function reverse(s, cnt) {
        var res = s;//.split("").reverse().join("");
        while (cnt>0) {
            console.log(res.split('')+"\n");
            cnt--;
        }
        //while (cnt>0) {
        //    res = res.split("").reverse().join("");
        //    cnt--;
        //}
        return res;
    }
}


//=============================


stringMatrixRotation(['Rotate(90)',
'hello',
'softuni',
'exam'])