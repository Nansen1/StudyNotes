let arr = [
    { id: 1, value: 'test', desc: 'aa11' },
    { id: 2, value: 'exam', desc: 'bb22' },
    { id: 1, value: 'test', desc: 'aa333' },
    { id: 2, value: 'other', desc: 'bb444' },
    { id: 1, value: 'other', desc: 'aa55' },
    { id: 2, value: 'exam', desc: 'bb66' }
]
const res = arr.filter(item => item.value === 'test')
console.log(res)
/** 结果为
 * [
  { id: 1, value: 'test', desc: 'aa11' },
  { id: 1, value: 'test', desc: 'aa333' }
]
*/
