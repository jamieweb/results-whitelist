chrome.storage.sync.get(function(items) { wl = items.wl.split("\n"); });

function changeicon() {
    if (wl.indexOf(window.location.hostname) > -1) {
        chrome.runtime.sendMessage({"message": "whitelisted"});
    }
}

window.addEventListener('load', changeicon);
