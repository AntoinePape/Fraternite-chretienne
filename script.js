function resize() {
  let percentage = innerWidth / 5;
  
  // Page 1
  let title = document.getElementById("title");
  let titlePercentage = 0.1 * percentage + 90;
  title.style.fontSize = 60 * titlePercentage / 100 + "px";
  
  page1.style.height = innerHeight - menu.offsetHeight + "px";
  
  canvas.width = innerWidth;  
  canvas.height = innerHeight - menu.offsetHeight;
  if (innerWidth / canvas.height < 16 / 9) {
	video.width = canvas.height * 16 / 9;
    video.x = (innerWidth - video.width) / 2;
  }
  else {
	video.width = innerWidth;
    video.x = 0;
  }
  
  // Page 2
  page2.style.padding = "20px " + percentage / 20 + "%";
  
  let myImage = document.getElementById("image");
  let imageWidthPercentage = (-0.3 * percentage + 130) * 0.5;
  p.innerHTML = imageWidthPercentage;
  if (imageWidthPercentage < 20) {
    myImage.style.width = "20%";
  } else if (imageWidthPercentage > 50) {
    myImage.style.width = "50%";
  } else {
    myImage.style.width = imageWidthPercentage + "%";
  }

  // Page 3
  page3.style.padding = "20px " + percentage / 15 + "%";
  
  let mapWidthPercentage = -0.1 * percentage + 110;
  if (mapWidthPercentage < 70) {
    map.style.width = "70%";
  } else if (mapWidthPercentage > 100) {
    map.style.width = "100%";
  } else {
    map.style.width = mapWidthPercentage + "%";
  }
  
}

function goToPage(pageNumber) {
  let page = document.getElementById("page" + pageNumber);
  let y = page.offsetTop - menu.offsetHeight;
  document.documentElement.scrollTop = y;
  document.body.scrollTop = y; // for Safari
}

function updateCanvas() {
  context.drawImage(video.img, video.x, 0, video.width, canvas.height);
  window.requestAnimationFrame(updateCanvas);
}

let menu = document.getElementById("menu");
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3");

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let video = {
  img: document.getElementById("video"),
  x: 0,
  width: innerWidth
};
let map = document.getElementById("map");
let p = document.getElementById("p");

resize();
updateCanvas();
window.addEventListener('resize', resize);

