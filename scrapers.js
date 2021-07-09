
const { write } = require("fs-extra");
const puppeteer = require('puppeteer');

const { contents, get } = require("cheerio/lib/api/traversing");

const fs = require('fs-extra');
const writeStream = fs.createWriteStream('menu.csv');




const buscar = (async () => {

    const browser = await puppeteer.launch({
        headless: true,
    });

    const page = await browser.newPage();
    await page.goto ('https://www.menu.com.do/#!/n/100_montaditos/menu');

    
    await page.waitFor(3000);


   //buscando menu
    const menu = await page.$('div');
    console.log (await page.evaluate(el => el.textContent, menu));

    //otra forma de buscar
    // cosnts [el] = await page.$x('/html/body/ui-view/div[1]/div/div/div/ui-view/article/div[2]/div[1]/div[3]/div/article/div[4]/div/ui-view/div/div/div/div[2]/div[2]/div/div/div[1]');
    // const src = await el.getProperty('src');
    // const srcTxt = await src.jsonvalue();


    //escribir en el archivo csv
    writeStream.write ('div\n');

    // async function escribir() {
    //     return page = [writeStream]; 
    // }

    // const websiteheading = $('div');

    console.log(menu)

    await browser.close();
})();


  

// function sumar(a,b) {
//      return a + b;
// }

// const resultado = sumar (2,3);
// console.log(resultado)


// const resultado2 = sumar (Menu);
// console.log(resultado2)

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





// await page.waitForSelector('div')

// writeStream.write('resultado\n');
// const menuinfo = [];

// ('.div').each((i) => {
//    menuinfo.push(menu);
//    console.log(menuinfo)
//    // writeStream.write(`${tags}\n`);
// })

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
  
