# Google Maps API
[Scrapeit Cloud](https://scrape-it.cloud/) - Web Scraping API with Proxy Rotation. Get valuable data at scale in HTML format from any website without need for a proxy.

Interface to call [Google Maps Scraper](https://scrape-it.cloud/google-maps-scraper) easily from Node.

## Install

    npm i @scrapeit-cloud/google-maps-api

## Usage
Signup to Scrapeit Cloud to [get your API key](https://app.scrape-it.cloud/sign-up) and some free credits to get started.

    import ScrapeitSDK from './index';

    const main = async() => {
      const scrapeit = new ScrapeitSDK('INSERT_YOUR_API_KEY_HERE');

      try {
        const response = await scrapeit.scrape({
          "keyword": "plumber in new york",
          "country": "US",
          "domain": "com"
        });

        console.log(response);
      } catch(e) {
        console.log(e.message);
      }
    };

    main();

You can find all the supported parameters on [Scrapeit Cloud documentation](https://scrape-it.cloud/docs/google-scraping-api/maps).
