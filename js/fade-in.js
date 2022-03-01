const movieBg = document.querySelector("#movie-bg");

movieBg.style.opacity = 1;

// fade-in
const secondTime = setInterval(function(){
  if (movieBg.style.opacity == 1) {
    movieBg.style.opacity = 0;
    movieBg.style.transition = 1 + "s";
  } else {
    clearInterval(secondTime);
  }
}, 500);