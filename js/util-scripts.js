var screenWidth = window.innerWidth, mobile = screenWidth < 768;

function loadImg(imgUri) {
	var request = new XMLHttpRequest();
	request.open('GET', imgUri, true);

	request.onload = function() {
	  	if (request.status >= 200 && request.status < 400) {
		    var pos = 'no-repeat center center', bgPost = document.getElementsByClassName('bg-img-post')[0], 
	    	bg = document.getElementsByClassName('bg-img')[0];
	    	bgPost.style.background = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,.5)), ' + 'url(' + imgUri + ') ' + pos + '';
	    	setTimeout(function() {
	    		bg.style.opacity = 0; 
	    	}, 500);
	  	} 
	  	else {
	  		console.log('Failed to load full-res image');
	  	}
	};

  	request.onerror = function() {
  		console.log('Failed to load full-res image');
	};

	request.send();
}

var prefix = '../css/background-', initialImgUri = mobile ? prefix + '23.jpg' : prefix + '1610.jpg';
loadImg(initialImgUri);

window.onresize = function() {
	var newWidth = window.innerWidth;
	if (mobile && newWidth >= 768) {
		mobile = false;
		loadImg(prefix + '1610.jpg')
	}
	else if (!mobile && newWidth < 768) {
		mobile = true;
		loadImg(prefix + '23.jpg')
	}

}