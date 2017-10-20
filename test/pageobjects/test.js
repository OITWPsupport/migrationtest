var page = require('./page');

var testPage = Object.create(page, {



    /**
     * define elements
     */

	deptNameString: { get: function () { return 'DEPARTMENT NAME'; } },
	phoneNumberString: { get: function () { return 'DEPARTMENT EMAIL'; } },
	emailAddressString: { get: function () { return 'DEPARTMENT PHONE'; } },
	addressString: { get: function () { return 'DEPARTMENT LOCATION'; } },
	currentthemeversion: { get: function () { return '2.8.12'; } },
	footerDiv: { get: function () { return $('#content > div.post-footer > p'); } },
	title: { get: function () { return browser.getTitle(); } },
	header: { get: function () { return $('.entry-title'); } },
	post_footer: { get: function () { return browser.isExisting('#fw-mega-menu'); } },
	mega_menu_text: { get: function () { return browser.getText("#fw-mega-menu"); } },
	nav_home: { get: function () { return browser.isExisting('#breadcrumb_wrap .nav_home'); } },
	nav_home_link: { get: function () { return browser.getAttribute('#breadcrumb_wrap .nav_home', 'href'); } },
	currentURL: { get: function () { return browser.getUrl(); } },
	search_field: { get: function () { return browser.isExisting('#q'); } },
	search_all: { get: function () { return browser.isExisting('.all_s'); } },
	search_this: { get: function () { return browser.isExisting('.this_s'); } },
	search_toggle: { get: function () { return browser.isExisting('#search_toggle'); } },
	search_toggle_text: { get: function () { return browser.getText("#search_toggle"); } },
	themeversion: { get: function () { return browser.getAttribute('[name="theme-version"]', 'content'); } },
	social_array: { get: function () { return ['facebook','twitter','instagram']; } },
	social_twitter: { get: function () { return browser.isExisting('img[class="social-icon social-icon-twitter_clr fl"]'); } },
	social_facebook: { get: function () { return browser.isExisting('img[class="social-icon social-icon-facebook_clr fl"]'); } },
	social_rss: { get: function () { return browser.isExisting('img[class="social-icon social-icon-rss_clr fl"]'); } },
	social_bsocial: { get: function () { return browser.isExisting('img[class="social-icon social-icon-bsocial_clr fl"]'); } },
	social_pinterest: { get: function () { return browser.isExisting('img[class="social-icon social-icon-pinterest_clr fl"]'); } },
	social_instagram: { get: function () { return browser.isExisting('img[class="social-icon social-icon-instagram_clr fl"]'); } },
	social_youtube: { get: function () { return browser.isExisting('img[class="social-icon social-icon-youtube_clr fl"]'); } },
	social_soundcloud: { get: function () { return browser.isExisting('img[class="social-icon social-icon-soundcloud_clr fl"]'); } },


    /**
     * define or overwrite page methods
     */
    open: { value: function(path) {
        page.open.call(this, 'https://test.boisestate.edu' + path);
    } }

});

module.exports = testPage;
