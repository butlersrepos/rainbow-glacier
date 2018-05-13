const listingScrapeDetails = {
  title: {
    selector: 'a',
    attr: 'title'
  },
  href: {
    selector: 'a',
    attr: 'href'
  }
};

module.exports = {
  url: 'http://www.acrylicosvallejo.com/en_US/model-color/family/15',
  productListingScrapingConfig: {
    eightColorSets: {
      listItem: 'h2:contains("8 color sets") + .product_presentation_products .more_info',
      data: listingScrapeDetails
    },
    sixteenColorSets: {
      listItem: 'h2:contains("16 color sets") + .product_presentation_products .more_info',
      data: listingScrapeDetails
    }
  }

}