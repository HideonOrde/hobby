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
var arr = [1030, 56000, 20300040, 20, 8933, 28001020];
for(var i = 0 ; i<arr.length;i++){
    for(var j =0 ; j<arr.length-1-i;j++){
        if(calcZero(arr[j])>calcZero(arr[j+1])){
            var temp = arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr)