const fs = require('fs')
const path = require('path')
const puppeteerChromium = require('puppeteer')
const puppeteerFirefox = require('puppeteer-firefox')

const modulePaths = fs.readdirSync('./lib')
modulePaths.forEach(async modulePath => {
  const test = require(path.join(__dirname, 'lib', modulePath))
  console.log(`running ${modulePath} on Chromium:`)
  await test(puppeteerChromium)
  console.log(`running ${modulePath} on Firefox:`)
  await test(puppeteerFirefox)
})
