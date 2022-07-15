import { b } from '@typescript/b'
import { a } from './a'

function sum(v1: number, v2: number) {
  return v1 + v2
}

sum(a, b)

function delay(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

async function doSomething(cb: (...args: any[]) => void) {
  await delay(1000)
  cb()
}

doSomething(() => {})
