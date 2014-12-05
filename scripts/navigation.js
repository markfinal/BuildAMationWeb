function rebuildToC() {
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

function updateContentWithToC() {
	$('#toc').toc(
	{
		'container': '.content',
		'scrollableSelector': '.content',
		'smoothScrolling': false, // smooth scroller flips between anchors on my layout
		'anchorName': function(i, heading, prefix) {
			return prefix+i; // use a unique number, rather than heading names which can be duplicated
		},
	});
}

function readyFn() {
	$('#nav').load('content/navigation.html', function() {
		/* these have to reside in the callback, or they are not found - would have to use the 'on' JQuery function with a selector? */
		$('#home').click(function() {
			$('#content').load('content/introduction.html', updateContentWithToC);
		});
		$('#prerequisites').click(function() {
			$('#content').load('content/prerequisites.html', updateContentWithToC);
		});
		$('#install').click(function() {
			$('#content').load('content/installbam.html', updateContentWithToC);
		});
		$('#userguide').click(function() {
			$('#content').load('content/userguide.html', updateContentWithToC);
		});
		$('#contact').click(function() {
			window.alert("Contact details not yet available");
		});
		$('#license').click(function() {
			window.alert("License details not yet available");
		});
		$('#home').trigger('click');
	});
	/* console.log("Document loaded"); */
}

$(document).ready(readyFn);
