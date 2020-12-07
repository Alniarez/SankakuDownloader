function getHtml() {
	var downloadUrl = document.getElementById("highres").href
	var param = {url : downloadUrl}
	browser.runtime.sendMessage(param)
  
	var fav = document.getElementsByClassName("favoriteIcon")[0]
	
	if(fav)
		fav.click()

}

getHtml()


