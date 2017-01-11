#!/usr/local/env node
const log = (message, level = 1) => {
  if (process.env.NODE_ENV == "production") {
    writeLogFile(message, level)
  } else {
   console.log(message) 
  }
}

const writeLogFile = (message, level) => {
  console.error('Not implemented')
  process.exit(1)
}

log("This is a test!")
