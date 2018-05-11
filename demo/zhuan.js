function z(str) {
    var newstr = ``;
    var reg = /.*(.{4})(.{4})$/;
    newstr = str.replace(reg, function($1, $2) {
        console.log($1, $2);
        return $1 = 666
    });
    console.log(newstr)
    return newstr
}