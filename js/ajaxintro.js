$(document).ready(function() {
    
	/*
		AJAX is the process where we can call directly to a web server from Javascript
		and load other information, e.g. an HTML file, PHP + MySQL results, etc.
	
	*/
	$('.ajax-in').on('click', function (ev) {
		$('.fill-me').load('ajax-in.html'); // AJAX paths are relative to the HTML file not the JS file
		
	});
	
	
});