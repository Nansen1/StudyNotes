const myDelay1 = (delay) => {
    return new Promise((resolve, reject) => {
        if (typeof delay != 'number') {
            reject(new Error('参数必须是number类型'));
        }
        setTimeout(() => {
            resolve(`我延迟了${delay}毫秒后输出的`)
        }, delay)
    })
}
const myDelay2 = (seconds) => {
    return new Promise((resolve, reject) => {
        if (typeof seconds != 'number' || seconds > 5000) {
            reject(new Error('参数必须是number类型，并且不能超过5000毫秒'));
        }
        setTimeout(() => {
            resolve(`我延迟了${seconds}秒后输出的，是第二个函数`)
        }, seconds * 1000)
    })
}
// myDelay1(2000)
//     .then((result) => {
//         console.log(result) // 我延迟了2000毫秒后输出的
//         console.log('我到了第一个函数中');
//         return myDelay1(3000)
//     })
//     .then((result) => {
//         console.log('我到了第二个函数中');
//         console.log(result); // 我延迟了3000毫秒后输出的
//     }).catch((err) => {
//         console.log(err);
//     })


var count = 4;
const test = async () => {
    const res1 = await myDelay1(1000);
    console.log(res1);
    const res2 = await myDelay2(count);
    console.log(res2);
    if (count >= 4) {
        // 大于等于4就终止程序
        return '';
        // 以下写法都可以终止程序
        // return; 
        // return false; 
        // return null;
    }
    // 这之后的不会被执行
    console.log(await myDelay1(1000));
    console.log('完成了');
};
test().then(result => {
    console.log(result);
})
.catch(err => {
 console.log(err);
})