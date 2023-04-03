function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  if (canvas.width / canvas.height < 16 / 9) {
	video.width = canvas.height * 16 / 9;
    video.x = (canvas.width - video.width) / 2;
  }
  else {
	video.width = canvas.width;
    video.x = 0;
  }
  
  const percentage = innerWidth / document.getElementById("page2").offsetWidth;
  const youtube = document.getElementById("youtube");
  youtube.width = "80%";
  youtube.height = 300 * percentage;
}

function scrollToPage(pageNumber) {
  let page = document.getElementById("page" + pageNumber);
  let y = page.offsetTop - document.getElementById("nav").offsetHeight;
  document.documentElement.scrollTop = y;
  document.body.scrollTop = y; // for Safari
}

function updateCanvas() {
  context.drawImage(video.img, video.x, 0, video.width, canvas.height);
  window.requestAnimationFrame(updateCanvas);
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const video = {
  img: document.getElementById("video"),
  x: 0,
  width: innerWidth
};

resize();
updateCanvas();
window.addEventListener('resize', resize);

