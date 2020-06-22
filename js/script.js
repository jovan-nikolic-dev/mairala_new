window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  	document.getElementById("nav").style.backgroundColor = "rgba(48, 48, 48, 1)";
    document.getElementById("nav-wrapper").style.padding = "16px 16px";
    document.getElementById("logo").style.transform = "scale(.8)";


  } else {
  	document.getElementById("nav").style.backgroundColor = "rgba(48, 48, 48, 0.5)";
    document.getElementById("nav-wrapper").style.padding = "32px 16px";
    document.getElementById("logo").style.transform = "scale(1)";


  }
}