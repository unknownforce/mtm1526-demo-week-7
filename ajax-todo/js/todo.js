$(document).ready(function () {
	
	// Immediately request the list of todos and inserts them into the UL
	$('.todos').load('list.php');	
	
	$('form').on('submit', function (ev) {
		ev.preventDefault();
		
		if ($('#item').val() != '') {
			// '$.post()' uses AJAX to send information to the server
			// We can send any data we want to a PHP file
			// In PHP we'd access the data like,
			// filter_input(INPUT_POST, 'item'...
			$.post('add.php', {
				'item' : $('#item').val()
			});
		}
	});
	
	
});