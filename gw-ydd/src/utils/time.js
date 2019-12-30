function num(s) {
    return s < 10 ? '0' + s : s;
}
//拿到今天的时间
export function newDate() {
    var Day = new Date();
    var y = Day.getFullYear();
    var m = Day.getMonth() + 1; //获取当前月份的日期 
    var d = Day.getDate();
    return y + "-" + num(m) + "-" + num(d);
}

//将中国标准时间转换为年月日格式  ----开始
export function formatDate(date) {
    var d = new Date(data);
    d =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        " ";
    return d
}