function pageStart(id) {
    var content = document.getElementById('content');
    var str = document.getElementById(id).innerHTML.replace(/\]\)/g,'11111');
   // eval(str);
    alert(str);
}