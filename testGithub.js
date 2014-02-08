var casper = require('casper').create();

casper.start('https://github.com', function() {
    this.echo(this.getTitle());
	
	if (this.exists('a.header-logo-invertocat')) {
        this.echo('the heading header-logo-invertocat exists');
    }
	
	if (!this.exists('a.tommac')) {
        this.echo('the heading tommac exists');
    }
	
	
});

casper.run();