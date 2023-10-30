function sleep (wait) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(wait);
        }, wait);
    });
}

let p1 = sleep(100);

p1.then(res => {
    return sleep(res + 100);
}).then(res2 => {
    return sleep(res2 + 100);
}).then(res3 => {
    console.log(res3); //300
})
