const $ = require('cheerio');

module.exports = {
  colorScrapingConfig: {
    colors: {
      listItem: 'div:contains("Colors") + table tr',
      data: {
        name: {
          selector: 'td:nth-child(3)',
          how: 'text'
        },
        hex: {
          selector: 'td:first-child div',
          how: x => $(x).css('background-color')
        },
        model: {
          selector: 'td:nth-child(2)',
          how: 'text'
        }
      }
    }
  }
}