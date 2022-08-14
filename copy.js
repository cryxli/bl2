window.bl2 = window.bl2||{};
window.bl2.copyToClipboard = function() {
	const text = $(this).attr('data-copy');
	navigator.clipboard.writeText(text);
};
$(document).ready(function() {
	$('.copy[data-copy]').click(window.bl2.copyToClipboard);
});