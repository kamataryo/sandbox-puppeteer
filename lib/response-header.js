module.exports = async puppeteer => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const response = await page.goto('https://example.com')
  console.log(response.headers)

  await browser.close()
}
