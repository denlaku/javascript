// 判断不以某字符串开头得正则 (正向否定匹配)
var r = /^(?!ab)/
r.test("ab"); // false
r.test("1ab"); // true

// 千位分隔
"-12343434.45454".replace(/^[+-]?\d+/,function(a){  
    return a.replace(/\d(?=(?:\d{3})+$)/g,"$&,");  
});