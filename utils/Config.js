"use strict"

const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const config_path = path.join(__dirname, '../config/config.yaml')

const Config = {
  get: (key) => {
    // Get document, or throw exception on error
    if (process.env.ENVIRONMENT == 'production' || process.env.ENVIRONMENT == 'staging') {
      return process.env[key]
    } else {
      try {
        const doc = yaml.load(fs.readFileSync(config_path))
        return doc[key]
      } catch (e) {
        console.log(e)
        return null
      }
    }
  }
}

module.exports = Config
