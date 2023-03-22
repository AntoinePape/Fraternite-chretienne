function resize() {
  let percentage = innerWidth / 5; 

  //canvas.width = innerWidth;
  //canvas.height = innerHeight;
  if (innerWidth / innerHeight < 16 / 9) {
	//video.width = innerHeight * 16 / 9;
    //video.x = (innerWidth - video.width) / 2;
  }
  else {
	//video.width = innerWidth;
    //video.x = 0;
  }
}

function scrollToPage(pageNumber) {
  let page = document.getElementById("page" + pageNumber);
  let y = page.offsetTop - document.getElementById("menu").offsetHeight;
  document.documentElement.scrollTop = y;
  document.body.scrollTop = y; // for Safari
}

function changePage(url) {
  location.href = url;
}

function openPage(url) {
  open(url);
}

function updateCanvas() {
  //context.drawImage(video.img, video.x, 0, video.width, canvas.height);
  window.requestAnimationFrame(updateCanvas);
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const video = {
  img: document.getElementById("video"),
  x: 0,
  width: innerWidth
};
let p = document.getElementById("p");

resize();
updateCanvas();
window.addEventListener('resize', resize);

