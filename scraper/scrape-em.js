#! /bin/env/node
const fetch = require('node-fetch');
const scrapeIt = require('scrape-it');
const prompt = require('prompt');
const chalk = require('chalk');
const fs = require('fs');
const mkdirp = require('mkdirp');

const StartPage = require('./start-page');
const ProductPage = require('./product-page');

function giveEmTheBusiness() {
  scrapeIt(StartPage.url, StartPage.productListingScrapingConfig, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    let { eightColorSets, sixteenColorSets } = result.data;
    eightColorSets.forEach(scrapeColorSet);
    sixteenColorSets.forEach(scrapeColorSet);
  });
}

const scrapeColorSet = colorSet => {
  let { title, href } = colorSet;
  console.log(`Fetching information about ${title}...`);
  scrapeIt(href, ProductPage.colorScrapingConfig, outputScrapedColorsFor(title));
};

const outputScrapedColorsFor = title => (err, pageResult) => {
  if (err) {
    console.error(err);
    return;
  }

  let outputFileName = `./snapshots/${title}.json`;
  let output = {
    ...pageResult.data,
    name: title
  }

  fs.writeFile(
    outputFileName, JSON.stringify(output, null, '  '),
    err => console.log(err || `Wrote output to file ${outputFileName}`)
  );
};

// Start it up
mkdirp('./snapshots/eight-color', err => {
  mkdirp('./snapshots/sixteen-color', err => {
    giveEmTheBusiness()
  })
})
