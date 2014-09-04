function countDivs(args) {
    var cnt = 0;
    var regex = '/<div>/g';
    var resArr = [];
    var cnt =0 ;        

    for (var i = 0; i < args.length; i++) {
        var line = args[i];
        //console.log(args[i]);
        var arr = restuenContDiv(line);
        if (arr != null) {
          //  console.log(typeof (arr));
         // console.log(arr);
            cnt += arr.length;
        }
    }
    return console.log(cnt);
}

function restuenContDiv(str) {
    var cnt = 0;
    cnt = str.match(/<div+/g);
    return cnt;
}

countDivs(['<!DOCTYPE html>',
'<html>',
'<head lang="en">',
'    <meta charset="UTF-8">',
'    <title>index</title>',
'    <script src="/yourScript.js" defer></script>',
'</head>',
'<body>',
'    <div id="outerDiv">',
'        <div',
'    class="first">',
'            <div><div>hello</div></div>',
'        </div>',
'        <div>hi<div><div asdas></div></div></div>        ',
'        <div>I am a div</div>',
'    </div>',
'<div></div>',
'</body>',
'</html>'
])