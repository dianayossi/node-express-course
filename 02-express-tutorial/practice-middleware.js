const express = require('express')
const app = express()

const consoleLog = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

module.exports = consoleLog