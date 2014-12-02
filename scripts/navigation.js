$(function() {
	$('#home').click(function() {
		$('#content').load('content/introduction.html');
	});
	$('#install').click(function() {
		$('#content').load('content/installmono.html');
	});
	$('#contact').click(function() {
		window.alert("Contact details not yet available");
	});
	$('#license').click(function() {
		window.alert("License details not yet available");
	});
});
