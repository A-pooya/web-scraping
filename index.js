const puppeteer = require('puppeteer');
const Scraper = require('./classBase-puppeteer');

//*self invoke function
(async() => {
    let browser;
    let page;
    
    try {
        browser = await puppeteer.launch({
            headless:false,
            executablePath:"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
        });

        page = await browser.newPage();

        await new Scraper(browser , page).getData();
        
    } catch (err) {
        console.log(err);
    }
    await browser.close()
})();