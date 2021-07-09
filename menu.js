<<<<<<< HEAD
const cheerio = require('cheerio');
const request = require('request-promise');

const fs = require('fs-extra');
const writeStream = fs.createWriteStream('quotes.csv');

async function init() {
    const $ = await request ({
       uri: 'https://www.menu.com.do/#!/n/100_montaditos/menu',
       transform: body => cheerio.load(body)
   });


//    function espera () {
//     webtitle.waitFor(3000);
//  }
  
   const webtitle = $('ng-scope');
   console.log(webtitle.text().trim());



   const websiteheading = $('ng-scope');
   console.log(websiteheading.text().trim());

 
   const list = $('.ng-scopee ').find('ng-scope');
   console.log(list.html());

   const conteinerClass = $('ng-scope');
   console.log(conteinerClass.html())


   const todoelmenu = $('.list-category ng-scope .categoryItem.visible').children().next();
   console.log(todoelmenu.html());

   const ng = $ ('.categoryItem.visiblet');
   console.log(ng.html())

   
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
=======
const cheerio = require('cheerio');
const request = require('request-promise');

const fs = require('fs-extra');
const writeStream = fs.createWriteStream('quotes.csv');

async function init() {
    const $ = await request ({
       uri: 'https://www.menu.com.do/#!/n/100_montaditos/menu',
       transform: body => cheerio.load(body)
   });


//    function espera () {
//     webtitle.waitFor(3000);
//  }
  
   const webtitle = $('ng-scope');
   console.log(webtitle.text().trim());



   const websiteheading = $('ng-scope');
   console.log(websiteheading.text().trim());

 
   const list = $('.ng-scopee ').find('ng-scope');
   console.log(list.html());

   const conteinerClass = $('ng-scope');
   console.log(conteinerClass.html())


   const todoelmenu = $('.list-category ng-scope .categoryItem.visible').children().next();
   console.log(todoelmenu.html());

   const ng = $ ('.categoryItem.visiblet');
   console.log(ng.html())

   
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
>>>>>>> fd5a48e8bd0d163509af960ee39c66ee7d217659
