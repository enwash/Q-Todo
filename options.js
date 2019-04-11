let nightB = document.querySelector("#nightMode");

window.onload = function() {
	chrome.storage.sync.get({nightMode:false}, function(items) {nightB.checked = items.nightMode});
	nightB.addEventListener("input", function() {
		nbChecked = nightB.checked;
		chrome.storage.sync.set({nightMode: nbChecked});
	});
}
