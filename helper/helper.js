const puppeteer = require("puppeteer");
async function getResults(url) {
  const browser = await puppeteer.launch({
    'args' : [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
    
  //  executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });
  await page.waitForSelector(".css-1dbjc4n:nth-child(2) div:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(2) > .css-1dbjc4n:nth-child(1)");
  const purl = await page.$$eval('article div[lang]', texts => texts.map(item => item.textContent));
  console.log(purl);
  const imgs = await page.$$eval('.css-1dbjc4n img[draggable]', imgs => imgs.map(img => img.getAttribute('src')));
  console.log(imgs);
  await browser.close();
  return { imgs, purl };
}
module.exports = { getResults };

