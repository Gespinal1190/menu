

const cheerio = require('cheerio');
const request = require('request-promise');
const puppeteer = require('puppeteer');

const fs = require('fs-extra');
const writeStream = fs.createWriteStream('quotes.csv');

async function init() {

   const page = await request ({
       uri: 'https://www.menu.com.do/#!/n/100_montaditos/menu',
       transform: body => cheerio.load(body)
   });

   const browser = await puppeteer.launch({
      headless: true,
  });

   const page2 = await browser.newPage();
    await page2.goto ('https://www.menu.com.do/#!/n/100_montaditos/menu');
   
    await page2.waitFor(5000);

   const menu = await page2.$('div');
   console.log (await page2.evaluate(el => el.textContent, menu));

   writeStream.write ('menu|precio\n');
  
   // const Menu = await page2.$('div');
   // console.log( await page2.text().trim());


   // const list = $('.div').find('div');
   // console.log(list.text());

   // async function init2() {
   // const conteinerClass = await page2.$('div');
   // console.log(await page2.html());
   // }

   // const todoelmenu = $('.list-category ng-scope .categoryItem.visible').children().next();
   // console.log(todoelmenu.html());

   // const ng = $ ('.div');
   // console.log(ng.text())

   console.log(page2)

   await browser.close();

   
}

init();



// async function buscar() {

//     const cheerio = require('cheerio');
//     const request = require('request-promise');
//     const puppeteer = require('puppeteer');
//     const browser = await puppeteer.launch({
//         headless: true,
//     });
    
//     const page = await browser.newPage();
//     await page.goto ('https://www.menu.com.do/#!/n/100_montaditos/menu');


//     await page.waitFor(3000);

   
//      const menu = await page.$('li');
//      console.log (await page.evaluate(el => el.textContent, menu));

//     const info = await page.$$eval('.ng-scope', info => info.map((val) => val.textContent.trim()));

//     console.log(menu);

//     await browser.close();

// } 

// buscar ();

//    const todoelmenu = $('.list-item ng-scope selectable').next();
//    console.log(todoelmenu.html());
 //    await page.waitFor(3000);
 //    await page.waitForSelector('div')
     //    console.log($)
