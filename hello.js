#!/usr/bin/env node

const sayHello = () => {
    console.log(`Hello, ${process.env.USER}`)
}

sayHello()

const printEnv = () => {
  console.log(process.env)
}

printEnv()
