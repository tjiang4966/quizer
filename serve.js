const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// 天行数据 百科题库 API
app.get('/tianapi/baike', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json({
    "code":200,
    "msg":"success",
    "newslist":[
      {
      "title":"新冠肺炎的最长潜伏期一般是多久？",
      "answerA":"1-2天",
      "answerB":"3-7天",
      "answerC":"14天",
      "answerD":"28天",
      "answer":"C",
      "analytic":"新型冠状病毒感染性肺炎属于呼吸道传播性疾病，该病一般最常见的传播途径有飞沫传播，气溶胶传播，粪口传播及眼部粘膜传播，潜伏期一般为3-5天，最长不超过14天左右，也有因人而异，超过以上天数。或许以无症状感染者，不发病。该病确诊有赖于核酸病毒检测，同时做好多饮水，勤洗手，出门戴口罩，避免人群聚集，导致交叉感染。"
      }
    ]
  })
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)