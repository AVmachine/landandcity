$('li a').on('mouseover' , function() {
	$(this).addClass("chosen");
});

$('li a').on('mouseout' , function() {
	$(this).removeClass("chosen");
});

