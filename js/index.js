// ***페이드효과
const header = document.querySelector("#header-wrap");
const movieBg = document.querySelector("#movie-bg");
const movie = document.querySelector("#movie");
const musicPlayer = document.querySelector("#music-player");

header.style.opacity = 0;
movieBg.style.opacity = 1;
musicPlayer.style.opacity = 0;

// 첫번째 페이드인
const firstTime = setInterval(function(){
  if (movieBg.style.opacity > 0) {
    movieBg.style.opacity = 0;
    movieBg.style.transition = 1 + "s";
  } else {
    clearInterval(firstTime);
  }
}, 1000);

// 두번째 페이드아웃
const secondTime = setTimeout(function(){
  if (movieBg.style.opacity == 0) {
    

    movieBg.style.opacity = 1;
    movie.style.opacity = 0;
    movie.style.transition = 1 + "s";
  } else {
    clearTimeout(secondTime);
  }
}, 3000);

// 세번째 페이드인
const thirdTime = setTimeout(function() {
  if (movieBg.style.opacity == 1) {
    const body = document.querySelector("body");

    movie.style.display = "none";
    header.style.opacity = 1;
    movieBg.style.opacity = 0;
    body.style.background = "url(./img/bg/main_home.png) no-repeat 50% 50% / cover";
    musicPlayer.style.opacity = 1;
    musicPlayer.style.transition = .6 + "s";
  } else {
    clearTimeout(thirdTime);
  }
}, 5000);