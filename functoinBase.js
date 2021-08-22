const fs = require('fs');

const ScraperF = async (browser , page) => {

    const url = "https://www.accuweather.com/en/ir/tehran/210841/weather-forecast/210841";

    await page.goto(url , {waitUntil : "domcontentloaded"});

    await page.waitForTimeout(40000);

    const standing = await page.evaluate(()=>{

        let temperature = document.querySelector("div[class = 'temp']").innerText
        let status = document.querySelector("div[class = 'phrase']").innerText
        let city = document.querySelector("h1[class = 'header-loc']").innerText
        return{
            city,
            temperature,
            status,
     }
    })
    console.log(standing);
    SaveToFile(standing)
}
    
const SaveToFile = standing =>{
    fs.writeFileSync("data.json", JSON.stringify(standing))
}

module.exports = ScraperF