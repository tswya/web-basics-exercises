import thenFs from 'then-fs'
thenFs.readFile('./files/1.txt', 'utf8').then(
  (r1) => {
    console.log(r1)
  },
  (err1) => {
    console.log(err1.message)
  }
)
thenFs.readFile('./files/2.txt', 'utf8').then(
  (r1) => {
    console.log(r1)
  },
  (err1) => {
    console.log(err1.message)
  }
)
thenFs.readFile('./files/3.txt', 'utf8').then(
  (r1) => {
    console.log(r1)
  },
  (err1) => {
    console.log(err1.message)
  }
)
