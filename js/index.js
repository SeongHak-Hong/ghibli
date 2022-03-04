const header = document.querySelector("#header-wrap");
const movieBg = document.querySelector("#movie-bg");
const intro = document.querySelector("#intro");
const musicPlayer = document.querySelector("#music-player");
const pcBg = document.querySelector('#pc-bg');
const mobileBg = document.querySelector('#mobile-bg');

header.style.opacity = 0;
movieBg.style.opacity = 1;
musicPlayer.style.opacity = 0;
pcBg.style.opacity = 0;
pcBg.style.display = 'none';
mobileBg.style.opacity = 0;
mobileBg.style.display = 'none';


// *** 해상도별 인트로
// 해상도 768 초과(pc버전 인트로)
if (document.body.offsetWidth > 768) {
  intro.children[1].style.opacity = 0;
  intro.children[2].style.opacity = 0;
}
// 해상도 768이하 480 초과(tablet버전 인트로)
if (document.body.offsetWidth <= 768 && document.body.offsetWidth > 480) {
  intro.children[0].style.opacity = 0;
  intro.children[2].style.opacity = 0;
}
// 해상도 480 이하(mobile버전 인트로)
if (document.body.offsetWidth <= 480) {
  intro.children[0].style.opacity = 0;
  intro.children[1].style.opacity = 0;
}


// ***페이드효과
// 첫번째 페이드인(문서 열리고 1초동안)
const firstTime = setInterval(function(){
  // 검은색배경(무비bg)의 투명도가 0 초과면?
  if (movieBg.style.opacity > 0) {
    // 검은색배경 투명도 0, 트랜지션 1초
    movieBg.style.opacity = 0;
    movieBg.style.transition = 1 + "s";
    // firstTime clearTimeout
    clearInterval(firstTime);
  }
}, 1000);

// 두번째 페이드아웃(문서 열리고 3초 후)
const secondTime = setTimeout(function(){
  // 검은색배경(무비bg)의 투명도가 0이라면?
  if (movieBg.style.opacity == 0) {
    // 검은색배경 투명도 1
    movieBg.style.opacity = 1;
    // 토토로 인트로 투명도 0, 트랜지션 1s
    intro.style.opacity = '0';
    intro.style.transition = 1 + "s";
  }
}, 3000);

// 세번째 페이드인(문서 열리고 5초 후)
const thirdTime = setTimeout(function() {
  // 검은색배경(무비bg)의 투명도가 1이라면?
  if (movieBg.style.opacity == 1) {
    // 토토로 인트로 이미지 없애기
    intro.style.display = "none";
    // 헤더 투명도 1
    header.style.opacity = 1;
    // 검은색배경(무비bg) 투명도 0
    movieBg.style.opacity = 0;
    // 해상도 768 초과(desktop, laptop)
    if (document.body.offsetWidth > 768) {
      pcBg.style.opacity = 1;
      pcBg.style.display = 'block';
      mobileBg.style.display = 'none';
    }
    // 해상도 768 이하(tablet, mobile)
    if (document.body.offsetWidth <= 768) {
      mobileBg.style.opacity = 1;
      mobileBg.style.display = 'block';
      pcBg.style.display = 'none';
    }
    // 뮤직플레이어 투명도 1, 트랜지션 .6s
    musicPlayer.style.opacity = 1;
    musicPlayer.style.transition = .6 + "s";
  }
}, 5000);




// ***배경 자동전환(인트로 끝난 후)
for (i=0; i<mobileBg.children.length; i++) {
  mobileBg.children[i].style.position = 'absolute';
  pcBg.children[i].style.position = 'absolute';
}
// mobile배경 투명도 함수
const mobileBgOpacity = function (opa1, opa2, opa3, opa4, opa5) {
  mobileBg.children[0].style.opacity = opa1;
  mobileBg.children[1].style.opacity = opa2;
  mobileBg.children[2].style.opacity = opa3;
  mobileBg.children[3].style.opacity = opa4;
  mobileBg.children[4].style.opacity = opa5;
}
// pc배경 투명도 함수
const pcBgOpacity = function (opa1, opa2, opa3, opa4, opa5) {
  pcBg.children[0].style.opacity = opa1;
  pcBg.children[1].style.opacity = opa2;
  pcBg.children[2].style.opacity = opa3;
  pcBg.children[3].style.opacity = opa4;
  pcBg.children[4].style.opacity = opa5;
}
mobileBgOpacity(1,0,0,0,0);
pcBgOpacity(1,0,0,0,0);

setTimeout(() =>{
  // mobile버전 배경화면이 보이고 있다면?
  if (mobileBg.style.opacity == 1) {
    // 40초마다 무한반복
    setInterval(() =>{
      // 1번 이미지 8초동안 보여주기
      setTimeout(() =>{
        mobileBgOpacity(1,0,0,0,0);
      }, 0);
      // 2번 이미지 8초동안 보여주기
      setTimeout(() =>{
        mobileBgOpacity(0,1,0,0,0);
      }, 8000);
      // 3번 이미지 8초동안 보여주기
      setTimeout(() =>{
        mobileBgOpacity(0,0,1,0,0);
      }, 16000);
      // 4번 이미지 8초동안 보여주기
      setTimeout(() =>{
        mobileBgOpacity(0,0,0,1,0);
      }, 24000);
      // 5번 이미지 8초동안 보여주기
      setTimeout(() =>{
        mobileBgOpacity(0,0,0,0,1);
      }, 32000);
    }, 40000);
  } // PC버전 배경화면이 보이고 있다면?
    else if (pcBg.style.opacity == 1) {
    // 40초마다 무한반복
    setInterval(() =>{
      // 1번 이미지 8초동안 보여주기
      setTimeout(() =>{
        pcBgOpacity(1,0,0,0,0);
      }, 0);
      // 2번 이미지 8초동안 보여주기
      setTimeout(() =>{
        pcBgOpacity(0,1,0,0,0);
      }, 8000);
      // 3번 이미지 8초동안 보여주기
      setTimeout(() =>{
        pcBgOpacity(0,0,1,0,0);
      }, 16000);
      // 4번 이미지 8초동안 보여주기
      setTimeout(() =>{
        pcBgOpacity(0,0,0,1,0);
      }, 24000);
      // 5번 이미지 8초동안 보여주기
      setTimeout(() =>{
        pcBgOpacity(0,0,0,0,1);
      }, 32000);
    }, 40000);
  };
}, 5016);
