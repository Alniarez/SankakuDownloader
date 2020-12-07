// VARS
var active = true;

// ACTION BUTTON
function enableBrowserAction(){
	active = true;
    browser.browserAction.setIcon({path:"active.png"});
	browser.browserAction.setTitle({title: "Download enabled"})
	
	browser.storage.local.set({"active": active}, function() {});
}

function disableBrowserAction(){
	active = false;
    browser.browserAction.setIcon({path:"inactive.png"});
	browser.browserAction.setTitle({title: "Download disabled"})
	
	browser.storage.local.set({"active": active}, function() {});

}

function updateState(){
    if(active == true){
		disableBrowserAction();
    }else{
        enableBrowserAction();
    }
}

browser.browserAction.onClicked.addListener(updateState);

// DOWNLOAD
browser.runtime.onMessage.addListener(
	function(arg, sender, sendResponse) {
		if(active == true){
			var download_url =  arg.url
			browser.downloads.download({ url: download_url})
		}
		
		
   }
)
 
function sendResponse(){}