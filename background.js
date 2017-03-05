chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "whitelisted") {
            chrome.browserAction.setIcon({
                path:"rw-trusted.ico",
                tabId: sender.tab.id 
            });
        }
    }
);
