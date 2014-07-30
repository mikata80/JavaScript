function calcArea(id,r) {
    //var radius = document.getElementById('radius').value;
    var area = Math.PI*Math.pow(r, 2);
    document.getElementById("area_" + id).innerHTML = 'area = ' + area;
}