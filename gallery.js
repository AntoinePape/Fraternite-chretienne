function openPicture(img) {
  div.style.visibility = "visible";
  div.style.opacity = 1;
  div.style.height = innerHeight + document.getElementById("nav").offsetHeight + "px";
  
  picture.style.opacity = 1;
  picture.src = img.src;
  picture.style.width = img.naturalWidth + "px";
  picture.style.height = img.naturalHeight + "px";
  picture.style.maxWidth = "95%";
  picture.style.maxHeight = "90%";
  
  //const deltaX = closeButton.offsetWidth;
  //closeButton.style.left = -closeButton.offsetWidth + "px";
  //closeButton.style.top = (closeButton.offsetHeight - picture.offsetHeight) / 2 + "px"; 
}

function closePicture() {
  setTimeout(() => {div.style.visibility = "hidden"}, 500);
  div.style.opacity = 0;
  picture.style.opacity = 0;
}

function resize() {
  //const deltaX = closeButton.offsetWidth;
  //closeButton.style.left = -closeButton.offsetWidth + "px";
  //closeButton.style.top = (closeButton.offsetHeight - picture.offsetHeight) / 2 + "px"; 
  
  const newPixelRatio = window.devicePixelRatio;
  if (newPixelRatio != pixelRatio) {
	  pixelRatio = newPixelRatio;
	  div.style.height = innerHeight + "px";
  }
}

const div = document.getElementById("picContainer");
const picture = document.getElementById("picture");
const closeButton = document.getElementById("button");
var pixelRatio = window.devicePixelRatio;
window.addEventListener("resize", resize)