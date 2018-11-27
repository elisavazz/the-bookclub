const express = require('express')
const path = require('path')
const router = express.Router()
require('dotenv').load();

const config = require('../config')
const dotenv=require('dotenv').config({ path: '../env' })

router.get('/*', (req, res) => {

    const indexPath = config.IS_PRODUCTION ? '../public/app/index.html' : '../../../dist/index.html'
    res.sendFile(path.join(__dirname, indexPath))
   
})

module.exports = router
