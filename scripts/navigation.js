$(function() {
	$('#home').click(function() {
		$('#content').load('content/introduction.html');
	});
	$('#install').click(function() {
		$('#content').load('content/installmono.html');
	});
});
