var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
var expect = require('chai').expect;

var TESTSITE = process.env.TESTSITE;
var TITLE = process.env.TITLE;
var URL = process.env.URL;

var ThisPage = require('../pageobjects/' + TESTSITE);

describe('test suite for ' + URL, function () {
    it('should load the page in under 6 seconds', function () {
        var path = URL.substring(URL.indexOf('.edu/')+4);
        var startTimestamp = new Date().getTime();
        ThisPage.open(path);
        ThisPage.footerDiv.waitForVisible();
        var endTimestamp = new Date().getTime();
        var pageLoadTime = (endTimestamp-startTimestamp);
        console.log('It took ' + pageLoadTime + ' ms to load the page.');
        expect(pageLoadTime).to.be.below(6000);
    });

    it('should verify the URL', function () {
        expect(ThisPage.currentURL).to.equal(URL);
    } );

    it('should confirm that the search controls are present and correct', function () {
//	expect(ThisPage.search_field).to.exist;
        expect(ThisPage.search_field).to.be.true;
	expect(ThisPage.search_all).to.be.true;
	expect(ThisPage.search_this).to.be.true;
	expect(ThisPage.search_toggle).to.be.true;
	expect(ThisPage.search_toggle_text).to.include('SEARCH ALL BOISE STATE');
	expect(ThisPage.search_toggle_text).to.include('SEARCH THIS SECTION');
    } );

    it('should confirm all the appropriate social icons are there', function () {
	if (ThisPage.social_array.indexOf("rss") > -1) {
		expect(ThisPage.social_rss).to.be.true;
		console.log("Testing for social_rss");
	} else {
		console.log("NOT Testing for social_rss");
	}
	if (ThisPage.social_array.indexOf("facebook") > -1) {
 		expect(ThisPage.social_facebook).to.be.true;
		console.log("Testing for social_facebook");
	} else {
                console.log("NOT Testing for social_facebook");
        }
        if (ThisPage.social_array.indexOf("twitter") > -1) {
                expect(ThisPage.social_twitter).to.be.true;
                console.log("Testing for social_twitter");
        } else {
                console.log("NOT Testing for social_twitter");
        }
        if (ThisPage.social_array.indexOf("bsocial") > -1) {
                expect(ThisPage.social_bsocial).to.be.true;
                console.log("Testing for social_bsocial");
        } else {
                console.log("NOT Testing for social_bsocial");
        }
        if (ThisPage.social_array.indexOf("pinterest") > -1) {
                expect(ThisPage.social_pinterest).to.be.true;
                console.log("Testing for social_pinterest");
        } else {
                console.log("NOT Testing for social_pinterest");
        }
        if (ThisPage.social_array.indexOf("instagram") > -1) {
                expect(ThisPage.social_instagram).to.be.true;
                console.log("Testing for social_instagram");
        } else {
                console.log("NOT Testing for social_instagram");
        }
        if (ThisPage.social_array.indexOf("youtube") > -1) {
                expect(ThisPage.social_youtube).to.be.true;
                console.log("Testing for social_youtube");
        } else {
                console.log("NOT Testing for social_youtube");
        }
        if (ThisPage.social_array.indexOf("soundcloud") > -1) {
                expect(ThisPage.social_soundcloud).to.be.true;
                console.log("Testing for social_soundcloud");
        } else {
                console.log("NOT Testing for social_soundcloud");
        }
    } );

    it.skip('should confirm that the theme version is correct', function () {
	expect(ThisPage.themeversion).to.equal(ThisPage.currentthemeversion);
    } );

    it.skip('should read the value of footer', function () {
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.deptNameString);
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.phoneNumberString);
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.emailAddressString);
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.addressString);
	expect(ThisPage.post_footer).to.exist;
    });

    it('should check for the navigation back to www.boisestate.edu', function () {
	expect(ThisPage.nav_home).to.exist;
	expect(ThisPage.nav_home_link).to.equal('http://www.boisestate.edu/');
    });

    it('should check the title', function () {
//        expect(ThisPage.title).to.equal(TITLE);
	expect(ThisPage.title.indexOf(TITLE)).to.be.above(-1);
	console.log('ThisPage.title = ' +ThisPage.title);
	console.log('TITLE = ' + TITLE);
    });

    it('should check the mega menu', function () {
        expect(ThisPage.post_footer).to.exist;
        expect(ThisPage.mega_menu_text).to.include('RESEARCH');
        expect(ThisPage.mega_menu_text).to.include('ADMINISTRATION');
        expect(ThisPage.mega_menu_text).to.include('ABOUT');
        expect(ThisPage.mega_menu_text).to.include('ADMISSIONS');
        expect(ThisPage.mega_menu_text).to.include('ACADEMICS');
        expect(ThisPage.mega_menu_text).to.include('GIVING');
        expect(ThisPage.mega_menu_text).to.include('ALUMNI');
    });
    it.skip('List of links should be longer than two', ()=> {
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
