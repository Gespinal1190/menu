

// function llamar() {
    
//     // document.querySelector('.h1').innerHTML = `${menu} Menu 100 montaditos`;
//     require ('https://www.menu.com.do/#!/n/100_montaditos/menu')
//     alert('si se esta llamando');

// } 

// async function  generatelist() {

//      alert('resultado ok');

//     const puppeteer = require('puppeteer');
//     const browser = await puppeteer.launch({
//         headless: true,
//     });

//     const page = await browser.newPage();
//     await page.goto ('https://www.menu.com.do/#!/n/100_montaditos/menu');

//     await page.waitFor(3000);

//      const menu = await page.$('div');
//      console.log (await page.evaluate(el => el.textContent, menu));

//     // const info = await page.$$eval('.ng-scope', info => info.map((val) => val.textContent.trim()));

//     // console.log(info);

//     await browser.close();

//     document.querySelector('.resultados').innerHTML = `${menu} Menu 100 montaditos`;
// };

(async () => {



    // const isDebug = process.env.DEBUG === true;
    const puppeteer = require('puppeteer');

    const fs = require('fs-extra');
    const writeStream = fs.createWriteStream('resultadomenu.csv');

    const browser = await puppeteer.launch({
        headless: true,
    });

    const page = await browser.newPage();
    await page.goto ('https://www.menu.com.do/#!/n/100_montaditos/menu');

    await page.waitFor(3000);

    // await page.waitForSelector('div')
     
     const menu = await page.$('div');
     console.log (await page.evaluate(el => el.textContent, menu));

     writeStream.write('resultado\n');
     const menuinfo = [];

     ('.div').each((i) => {
        menuinfo.push(menu);
        console.log(menuinfo)
        // writeStream.write(`${tags}\n`);
     })
    
     
     console.log(menu)

     

     await browser.close();
    

})();


// $('.quote').each((i, el) => {
//     const menu = await page.$('div');
//      console.log (await page.evaluate(el => el.textContent, menu));
//     const text = $(el).find('div').text();
    
//     tags.push(tag);
//     // console.log(text, author, tags.join(','))
//     writeStream.write(`${text}|${author}|${tags}\n`);
//     // console.log(i, text, author)
// })

//  console.log (await page.evaluate(el => el.textContent, menu));

    // const info = await page.$$eval('.ng-scope', info => info.map((val) => val.textContent.trim()));

    // document.querySelector('.resultados').innerHTML = `${menu} Menu 100 montaditos`;
    
    // console.log(info);

    
        // const tags = [];
        // $('.div').each((i, el) => {
        //     const text = $(el).find('div').text().replace(/(^\“|\”$)/g, "");
        //     writeStream.write(`${text}\n`);
        //     // const author = $(el).find('span small.author').text();
        //     // const tag = $(el).find('.tags a').html();
        //     // tags.push(tag);
        //     // console.log(text, author, tags.join(','))
        //     // writeStream.write(`${text}|${author}|${tags}\n`);
        //     // console.log(i, text, author)
        // })


