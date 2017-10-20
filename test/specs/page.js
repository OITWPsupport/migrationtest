// from https://www.npmjs.com/package/chai-webdriverio
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

var TESTSITE = process.env.TESTSITE;
var TITLE = process.env.TITLE;
var URL = process.env.URL;

describe('testing site ' + TESTSITE', function() {
    it('List of search results should be longer two and point to valid pages', ()=> {
	browser.url(URL);
        let links = browser.elements('a')

	var numberOfResults=0;

        for (let i=0; i < links.value.length; i++) {
          let link = links.value[i].ELEMENT,
              href = browser.elementIdAttribute(link,'href'),
              status = true

          console.log(href.value)

          fetch(href.value)
            .then( function(res){
            })
            .catch( function(err){
              status = false
            })

	  numberOfResults++;

          expect(status).to.be.true;
        }
	expect(numberOfResults).to.be.above(1, 'No search results? Unlikely! Probably an error.');
    });
});
