chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "whitelisted") {
            chrome.browserAction.setIcon({
                path: "icon-64-w.png",
                tabId: sender.tab.id 
            });
        }
    }
);
