window.onresize = function () {
  console.log("[Resize]");
};

window.onscroll = function () {
  console.log("[Scroll]");
};

window.onmove = function () {
  console.log("[Move]");
};

window.onabort = function () {
  console.log("[Abort]");
};

document.getElementById("img1").onerror = function () {
  alert("Load error!");
};
