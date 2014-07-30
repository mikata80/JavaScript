function reverseWords(str) {
    var arr = str.split(" ");
    var res = '';
    var revres = "";
    for (var i in arr) {
        var revesearr = arr[i].split('');
        for (var j = revesearr.length-1; j >= 0; j--) {
            revres += revesearr[j];
        }
        res += revres + " ";
        revres = "";
    }

    return res;
}

console.log(reverseWords("Hello, how are you."));
console.log(reverseWords("Life is pretty good, isnt it?"));
console.log(reverseWords("A default document is not configured for the requested URL, and directory browsing is not enabled on the server."));
