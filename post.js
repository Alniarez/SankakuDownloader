//document.body.style.border = "5px solid red";
function getHtml() {
  var downloadUrl = document.getElementById("highres").href
  var param = {url : downloadUrl};
  chrome.runtime.sendMessage(param);
  
	var fav = document.getElementsByClassName("favoriteIcon")[0];
	if(fav)
		fav.click()
  
};


  

getHtml();


