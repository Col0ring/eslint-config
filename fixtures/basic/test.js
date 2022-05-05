import { a } from './a'
import { b } from '@basic/b'

function sum(v1, v2) {
  return v1 + v2
}

sum(a, b)

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

async function doSomething(cb) {
  await delay(1000)
  cb()
}

doSomething(() => {})
