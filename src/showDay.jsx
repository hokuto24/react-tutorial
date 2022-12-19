function showDay(){
    var today = new Date();

    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var week = today.getDay();
    var day = today.getDate();

    var day_of_week = new Array("日","月","火","水","木","金","土");
    document.getElementById("currentDate").innerHTML ="西暦"+year+"年"+month+"月"+day+"日 "+day_of_week[week]+"曜日";
}