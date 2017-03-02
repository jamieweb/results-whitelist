function restore_options() {
    chrome.storage.sync.get({
        wl: 'default-example'
    }, function(items) {
        wl = items.wl;
        //console.log(wl);
    });
}

function markresults() {
    results = document.getElementsByTagName("a");
    for (i = 0; i < results.length; i++) {
    	if (wl.indexOf(results[i].hostname) > -1 && !(results[i].hostname == "") && !(results[i].className == "_Fmb ab_button")) {
    		results[i].style.backgroundColor = "lightgreen";
    		results[i].style.borderRadius = "25px";
    	}
    }
}

restore_options();

document.addEventListener('DOMNodeInserted', markresults);
