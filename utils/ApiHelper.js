"use strict"

const axios = require('axios')
const Config = require('./Config.js')

const key = Config.get('TIAN_API_KEY')

const ApiHelper = {
  baseUrl: `https://api.tianapi.com/txapi/baiketiku/index?key=${key}`,
  get: () => {
    return axios.get(ApiHelper.baseUrl)
  }
}

module.exports = ApiHelper