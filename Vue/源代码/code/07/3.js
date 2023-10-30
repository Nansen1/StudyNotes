
function sleep (wait) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(wait);
        }, wait);
    });
}
async function test () {
    let res1 = await sleep(100);
    //上一个await执行之后才会执行下一句
    let res2 = await sleep(res1 + 100);
    // 将结果直接传入下一次调用函数中
    let res3 = await sleep(res2 + 100);
    console.log(res3); //300
    return res3;
}

test().then(res => {
    console.log(res); //300
});