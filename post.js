function getHtml() {

    var image = document.getElementById("image-link")

    if(!image)
        return

    var downloadUrl;

    if(image.classList.contains('sample'))
        downloadUrl = image.href;
     else
        downloadUrl = document.getElementById("image").src


    console.log("I want to download: " + downloadUrl)

	var param = {url : downloadUrl}
	chrome.runtime.sendMessage(param)

	var fav = document.getElementsByClassName("favoriteIcon")[0]
	
	if(fav) {
        fav.click()
    }
}

getHtml()


