const puppeteer = require('puppeteer');
const fs = require('fs');

module.exports = class Scraper{
    constructor(browser , page){
        this.browser = browser;
        this.page = page;

        this.standing = [];
        this.url = "https://www.accuweather.com/en/ir/tehran/210841/weather-forecast/210841"
       

    }
    async getData(){
        await this.page.goto(this.url ,{waitUntil:"domcontentloaded"});
        
        await this.page.waitForTimeout(40000);
        
    
       
           this.standing = await this.page.evaluate(()=>{
           let temperature = document.querySelector("div[class = 'temp']").innerText
           let status = document.querySelector("div[class = 'phrase']").innerText
           let city = document.querySelector("h1[class = 'header-loc']").innerText
           return{
               city,
               temperature,
               status,
        }
           })
           console.log(this.standing);

     this.saveToFile();
    }

    saveToFile(){
     fs.writeFileSync("data.json", JSON.stringify(this.standing))
    }

}