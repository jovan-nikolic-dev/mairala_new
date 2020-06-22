window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-wrapper").style.padding = "16px 16px";
    document.getElementById("logo").style.fontSize = "32px";
  } else {
    document.getElementById("nav-wrapper").style.padding = "32px 16px";
    document.getElementById("logo").style.fontSize = "48px";
  }
}