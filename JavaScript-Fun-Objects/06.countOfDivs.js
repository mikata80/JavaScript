function countOfDivs(str) {
    var count = 0;
    var arr = str.split(/\W+/);
    for (var i in arr) {
        if ((arr[i]) === 'div') {
            count++;
        } 
    }
    return Math.floor(count/2);
}
var str = '<!DOCTYPE html> <html> <head lang="en">   <meta charset="UTF-8">  <title>index</title> <script src="/yourScript.js" defer></script> </head><body>    <div id="outerDiv">        <div    class="first">            <div><div>hello</div></div>       </div><div>hi<div></div></div> <div>I am a div</div></div></body></html>'

console.log(countOfDivs(str));
