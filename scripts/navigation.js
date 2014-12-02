function rebuildTOC() {
	var ToC =
		"<div class='table-of-contents'>" +
		"<h2>On this page:</h2>" +
		"<ul>";
	var newLine, el, title, link;
	$("#content h1").each(function() {
		el = $(this);
		title = el.text();
		link = "#" + el.attr("id");
		newLine =
			"<li>" +
			"<a href='" + link + "'>" +
			title +
			"</a>" +
			"</li>";
		ToC += newLine;
	});
	ToC +=
		"</ul>" +
		"</div>";
	return ToC;
}

$(function() {
	$('#home').click(function() {
		$('#content').load('content/introduction.html');
	});
	$('#install').click(function() {
		$('#content').load('content/installmono.html', function() {
			ToC = rebuildTOC();
			$('#content').prepend(ToC);
		});
	});
	$('#contact').click(function() {
		window.alert("Contact details not yet available");
	});
	$('#license').click(function() {
		window.alert("License details not yet available");
	});
});
