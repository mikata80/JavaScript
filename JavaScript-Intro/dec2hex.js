var dec = prompt("Enter a number");
if (dec != null) {
    
    var d = parseInt(dec, 0)
    var ost = 0;
    var hex = "";
    var strost = "";
    
    while (d > 0) {
            //alert('d = ' + d);
            ost = d % 16;
            //alert('ost = ' + ost);
            if (ost == 10) {
                strost = "A";
            }
            else if (ost == 11) {
                strost = "B";
            }
            else if (ost == 12) {
                strost = "C";
            }
            else if (ost == 13) {
                strost = "D";
            }
            else if (ost == 14) {
                strost = "E";
            }
            else if (ost == 15) {
                strost = "F";
            }
            else {
                strost = ost;
            }

            //alert('strost = ' + strost);
            //alert('d_1 = ' + d);
            d = parseInt(d/= 16,10);
        //alert('d = ' + d);
            hex = strost + hex;
        //alert('hex = ' + hex);
    }
    alert(hex)
}
//var a = parseInt("FA", 16);
//console.log(a);