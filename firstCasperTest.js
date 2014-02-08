var url = 'https://www.yahoo.com/';
var siteName = 'test site';

var casper = require('casper').create({
    verbose: false,
    logLevel: 'debug'
});

casper.test.comment('Starting Testing '  + url);
	
casper.start(url, function() {
    this.echo(this.getTitle());
	
	this.echo(this.getCurrentUrl());
	
    this.test.assert(
        this.getCurrentUrl() === url, 'url is the one expected'
    );
	
 
    this.test.assertHttpStatus(200, siteName + ' is up');	
	
});	

casper.run();	