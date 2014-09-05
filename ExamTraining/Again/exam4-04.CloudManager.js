function cloud(args) {
    //console.log(args);
    //console.log();
    var resArr = {};
    for (var row in args) {

        var arrTemp = args[row].split(/ /g);

        //console.log(arrTemp);
        var fileName = arrTemp[0];
        var ext = arrTemp[1];
        var ram = arrTemp[2];
        var ramVal = parseFloat(ram.match(/[0-9.]+/g));
        var ramValStr = ramVal
        
        //var extSort = ext.replace(ext.substr(0, 1), '');

        if (!resArr[ext]) {
            resArr[ext] = { 'files': [fileName], 'memory': ramVal };//,'sort':extSort};
        } else {
            var ramTMP = parseFloat(resArr[ext]['memory']);
            ramTMP += ramVal;

            var fileTMP = resArr[ext]['files'];
            if (fileTMP.indexOf(fileName) == -1) {
                fileTMP.push(fileName);
            }
            resArr[ext] = { 'files': fileTMP.sort(), 'memory': ramTMP };//,'sort':extSort};
        }

    }

    for (var ext in resArr) {
        var ramTMP = parseFloat(resArr[ext]['memory']);
        var fileTMP = resArr[ext]['files']
        resArr[ext] = { 'files': fileTMP.sort(), 'memory': ramTMP.toFixed(2) };//,'sort':extSort};
    }

    resArr = sortOnKeys(resArr);
    //console.log(resArr);
    console.log(JSON.stringify(resArr));

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

}