﻿function Solve(args) {
    var tableArr = [];
    var patt = '/ /g'
    for (var i = 2; i < args.length - 1; i++) {
        var str = args[i].replace('<tr>','').replace('</tr>','');
        tableArr.push(str);
    }

    var reg = /<td>(.*?)<\/td>+/g;
    var res = {};
    var temparr = [];
    for (var i = 0; i < tableArr.length; i++) {
        var str = tableArr[i];
        var tmp = str.split(reg);
        temparr.push(tmp);
    }

   

    for (var i = 0; i < temparr.length; i++) {
        var arr = temparr[i];
        var article = arr[1];
        var price = arr[3];
        var trash = arr[5];
        res[article] = [price, trash];
        
    }
    function sortOnKeys(res) {

        var sorted = [];
        for (var key in res) {
            sorted[sorted.length] = key;
        }
        sorted.sort();
        var tempDict = {};
        for (var i = 0; i < sorted.length; i++) {
            tempDict[sorted[i]] = res[sorted[i]];
        }

        return tempDict;
    }

    res = sortOnKeys(res);
    var sorttable = [];
    for (var article in res) {
        var price = res[article][0];
        var trash = res[article][1];
        //sorttable.push(['<tr><td>' + article + '</td><td>', price + '</td><td>', trash + '</td></tr>']);
        sorttable.push([article, price, trash]);
        sorttable.sort(function (a, b) {
            return a[1] - b[1]
        });
    }

    //console.log(sorttable);
    console.log('<table>');
    console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');
    for (var s in sorttable) {
        var strarr = sorttable[s];
        var str =''// strarr[0] + '</td><td>';
        for (var i = 0; i < strarr.length; i++) {
            if (i < strarr.length-1) {
                str += strarr[i] + '</td><td>';
            } else {
                str += strarr[i] ;
            }
            
        }
        //str.replace("<td></td>", '');
        //console.log(str);
        console.log('<tr><td>' + str + '</td></tr>');
    }
    console.log('</table>');
}


//----------------------------------------------
Solve(['<table>',
  '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Ariana Grapefruit 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Coffee Davidoff Black 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.65</td><td>+7</td></tr>',
'<tr><td>Laptop Dell Inspiron 3537a</td><td>1199.0</td><td>+3</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>-10</td></tr>',
'<tr><td>Ariana Radler 1.5 l</td><td>2.79</td><td>+33</td></tr>',
'<tr><td>Coca Cola 12 pieces x 1.5 l</td><td>8.73</td><td>+10</td></tr>',
'<tr><td>Coffee Cup 0.250</td><td>0.02</td><td>0</td></tr>',
'<tr><td>Car BMW i8 (Black)</td><td>203500</td><td>+7</td></tr>',
'<tr><td>Vitamin B5, 350 mg</td><td>16.50</td><td>+3</td></tr>',
'<tr><td>Book "Eloquent JavaScript" by M. Haverbeke</td><td>0</td><td>+653</td></tr>',
'<tr><td>Apple iPad mini 128GB</td><td>1199.0</td><td>+5</td></tr>',
'<tr><td>HP ElitePad G1</td><td>1199</td><td>0</td></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Laptop Lenovo IdeaPad B7400</td><td>1199.00</td><td>0</td></tr>',
'<tr><td>Laptop ASUS ROG G550JK-CN268D</td><td>1939.00</td><td>+1</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'<tr><td>Kamenitza Lemon 1 l</td><td>1.65</td><td>+7</td></tr>',
'<tr><td>Vodka Absolute 1 l</td><td>22.00</td><td>+2</td></tr>',
'<tr><td>Laptop Dell Inspiron 3537b</td><td>1199.0</td><td>+3</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>-10</td></tr>',
'<tr><td>Ariana Radler 1.7 l</td><td>2.79</td><td>+33</td></tr>',
'<tr><td>Coffee Lavazza 250 gr.</td><td>8.73</td><td>+10</td></tr>',
'<tr><td>Coffee Cup 0.200</td><td>0.02</td><td>0</td></tr>',
'<tr><td>Car BMW i8 (Red)</td><td>203500</td><td>+7</td></tr>',
'<tr><td>Vitamin B5, 350 mg (new)</td><td>16.50</td><td>+3</td></tr>',
'<tr><td>Book "Free JavaScript" by Annonymous</td><td>0</td><td>+130</td></tr>',
'<tr><td>Apple iPad mini 16GB MD528HC/A</td><td>529.90</td><td>+5</td></tr>',
'<tr><td>HP ElitePad 1000 G2</td><td>2369.00</td><td>0</td></tr>',
'</table>']);



//console.log('----------------------------------------------');
//Solve([
//'<table>',
//'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
//'<tr><td>Vodka</td><td>20</td><td>+12</td></tr>',
//'<tr><td>Ariana</td><td>10</td><td>+33</td></tr>',
//'<tr><td>Kamenitza</td><td>30</td><td>+7</td></tr>',
//'</table>']);
//console.log('----------------------------------------------');
//Solve(['<table>',
//'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
//'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
//'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
//'<tr><td>Laptop Lenovo IdeaPad B5400</td><td>929.00</td><td>0</td></tr>',
//'<tr><td>Laptop ASUS ROG G550JK-CN268D</td><td>1939.00</td><td>+1</td></tr>',
//'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
//'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
//'</table>']);