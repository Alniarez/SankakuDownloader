// VARS
var active = true;

// ACTION BUTTON
function enableBrowserAction(){
	active = true;
    chrome.browserAction.setIcon({path:"active.png"});
	chrome.browserAction.setTitle({title: "Download enabled"})
}

function disableBrowserAction(){
	active = false;
    chrome.browserAction.setIcon({path:"inactive.png"});
	
	chrome.browserAction.setTitle({title: "Download disabled"})

}

function updateState(){
    if(active == true){
		disableBrowserAction();
    }else{
        enableBrowserAction();
    }
}

chrome.browserAction.onClicked.addListener(updateState);

// DOWNLOAD
chrome.runtime.onMessage.addListener(
	function(arg, sender, sendResponse) {
		if(active == true){
			var download_url =  arg.url
			chrome.downloads.download({ url: download_url})
		}
   }
)
 
function sendResponse(){}