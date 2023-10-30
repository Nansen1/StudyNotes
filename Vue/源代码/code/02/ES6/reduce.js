// // 将二维数组展平
// let arr = [[0, 1], [2, 3], [4, 5]];
// var flattened = arr.reduce(
//     (acc, cur) => acc.concat(cur),
//     []
// );
// console.log(flattened); //[ 0, 1, 2, 3, 4, 5 ]

// 求数组和
let arr = [2, 4, 6, 8];
var sum = arr.reduce((sum, cur) => sum += cur, 0);
console.log(sum); //20