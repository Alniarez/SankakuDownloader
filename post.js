//document.body.style.border = "5px solid red";
function getHtml() {
	var downloadUrl = document.getElementById("highres").href
	var param = {url : downloadUrl}
	chrome.runtime.sendMessage(param)
	
	
  
	var fav = document.getElementsByClassName("favoriteIcon")[0]
	
	if(fav)
		fav.click()
	
	
	/*
	var list = document.getElementsByTagName("img") 
	for (var i = 0; i < list; i++) {
			list[i].src = ''
	}
	
	list = document.getElementsByTagName("video") 
	for (var i = 0; i < list; i++) {
			list[i].src = ''
	}
	
	var element = document.getElementById('post-content');
    element.parentNode.removeChild(element);
	*/
	
	/*setTimeout(function() {

		//chrome.tabs.remove(chrome.tabs.getCurrent())

	}, 100)
	*/
}



//window.stop() 
getHtml()


