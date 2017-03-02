function save_options() {
    var whitelist = document.getElementById('whitelist').value;
    chrome.storage.sync.set({ wl: whitelist }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() { status.textContent = ''; }, 1000);
    });
}

function restore_options() {
    chrome.storage.sync.get({ wl: '' }, function(items) { document.getElementById('whitelist').value = items.wl; });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
