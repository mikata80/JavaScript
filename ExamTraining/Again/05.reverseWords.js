function reverseWords(args) {
    var word = args[0];
    var wordRes1 = word.split("").reverse();
    var wordRes2 = word.split("").reverse().join("");
    var wordRes3 = word.split("").reverse().join("").split(" ").reverse();
    var wordRes = word.split("").reverse().join("").split(" ").reverse().join(" ");

    //var wordArr = word.split(' ');
    ////wordArr = wordArr.reverse();
    //var arrtemp = [];
    //for (var i = 0; i < wordArr.length; i++) {
    //    arrtemp.push(wordArr[i]);
    //}
    //arrtemp = arrtemp.reverse();
    console.log("wordRes1 = >"+ wordRes1);
    console.log("wordRes2 = >" + wordRes2);
    console.log("wordRes3 = >" + wordRes3);
    console.log(wordRes);

}

reverseWords(['Hello, how are you.']);