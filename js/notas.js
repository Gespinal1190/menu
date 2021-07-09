const puppeteer = require('puppeteer');

(async () => {

    const isDebug = process.env.DEBUG === true;

    const browser = await puppeteer.launch({
        headless: false,
    });

    const page = await browser.newPage();
    await page.goto ('https://www.menu.com.do/#!/n/100_montaditos/menu');

    await page.waitFor(5000);

   

     const menu = await page.$('div');

    console.log (await page.evaluate(el => el.textContent, menu));

    await browser.close();


})();



// headless: !isDebug,
        // slowMo:  isDebug ? 100 : 0,
        // defaultViewport: {
        //  vwidth: 1200,
        //  height: 768
        // }

// const h1 = await page.evaluate(
    //     () => document.querySelector('h1').textContent
    // );

    // console.log(h1);
    // await browser.console();


// const menu = await page.evaluate(() => {
    //     const tmp = {};
    //     tmp.titulo = document.querySelector('#div').innerText;
    //     return tmp;
    // });

    // menu.push(menu);

    // console.log(menu);

// await page.click('.bnt btn-default btn-enter btn-lg  input' );
// document.querySelector('.info').innerHTML = `${menu} esta vegra`;

// const isDebug = process.env.DEBUG === true;

// (async () => {

//     const browser = await puppeteer.launch({
        
//         headless: !isDebug,
//         slowMo:  isDebug ? 100 : 0,
//         defaultViewport: {
//          vwidth: 1200,
//          vheight: 768
//        }
       
//     });
    
// })();


    
// (async() => {
//     const browser = await puppeteer.launch({
//         headless: false
//     });

//     const page = await browser.newPage();

//     await page.goto ('https://www.menu.com.do');
// })();
