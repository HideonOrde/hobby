function calcZero(n) {
    var str = n.toString()

    var count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '0') {
            count++;

        }
    }
    return count;
}
console.log(calcZero(1030))