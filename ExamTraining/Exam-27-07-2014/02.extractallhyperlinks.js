function Solve(args) {
    //console.log(args);
    String.prototype.startsWith = function (s) {
        if (this.indexOf(s) == 0) return true;
        return false;
    }
    var reg = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/g;

    var href = args.split(/<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/);
    for (var i = 0; i < href.length; i++) {
        var str = href[i];

        if (str === undefined) {
            str = 'aaa';
        }
        console.log(str);
        if (str.startsWith('href="')) {
            console.log(str.replace('href=', '').replace('"', '').replace('"', ''));
        }
    }
}
var input = [];

input.push('<!DOCTYPE html>');
input.push('<html>');
input.push('<head>');
input.push('<title>Hyperlinks</title>');
input.push('<link href="theme.css" rel="stylesheet" />');
input.push('</head>');
input.push('<body>');
input.push('<ul><li><a   href="/"  id="home">Home</a></li><li><a');
input.push('class="selected" href=/courses>Courses</a>');
input.push('</li><li><a href = ');
input.push("'/forum' >Forum</a></li><li><a class='href'");
input.push('onclick="go()" href= "#">Forum</a></li>');
input.push('<li><a id="js" href =');
input.push('"javascript:alert("hi yo")" class="new">click</a></li>');
input.push('<li><a id="nakov" href =');
input.push('http://www.nakov.com class="new">nak</a></li></ul>');
input.push('<a href="#empty"></a>');
input.push('<a id="href">href="fake"<img src="http://abv.bg/i.gif"');
input.push('alt="abv"/></a><a href="#">&lt;a href="hello"&gt;</a>');
input.push("<!-- This code is commented:");
input.push('<a href="#commented">commentex hyperlink</a> -->');
input.push("</body>");

var str = '';
for (var i in input) {
    str += input[i];
    //console.log(input[i]);
    //    Solve(input[i]);
}
//console.log(str);
Solve(str);


