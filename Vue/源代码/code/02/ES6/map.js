// 使用map将数组中的每一项都变成其平方后的结果
// 1.箭头函数形式
function func1 (arr) {
    const res = arr.map(item => item * item);
    return res;
}
// 2.普通函数形式
function func2 (arr) {
    const res = arr.map(function (item) {
        return item * item;
    });
    return res;
}

// 结果
var arr3 = [1, 2, 3, 4, 5];
console.log(func1(arr3));    //[1,4,9,16,25]
var arr1 = [5, 2, 1, 3, 4];
console.log(func1(arr1));;  //[25,4,1,9,16]
var arr2 = [3, 4, 5, 1, 2, 6];
console.log(func2(arr2));;  //[9,16,25,1,4,36]
