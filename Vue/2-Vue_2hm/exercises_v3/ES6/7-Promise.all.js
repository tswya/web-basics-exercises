import thenFs from 'then-fs'
const promiseArr = [
  thenFs.readFile('./files/1.txt', 'utf8'),
  thenFs.readFile('./files/2.txt', 'utf8'),
  thenFs.readFile('./files/3.txt', 'utf8')
]
/* Promise.all(promiseArr) //发起并行的 Promise 异步操作
  .then(([r1, r2, r3]) => {
    //所有文件读取成功(等待机制)
    console.log(r1, r2, r3)
  })
  .catch((err) => {
    console.log(err.message)
  }) */
Promise.race(promiseArr) //发起并行的 Promise 异步操作
  .then((result) => {
    //所有文件读取成功(等待机制)
    console.log(result)
  })
  .catch((err) => {
    console.log(err.message)
  })
