let slides = document.querySelector("#slide-ul");
let slideLi = document.querySelectorAll("#slide-ul li");
console.dir(slideLi);
let currentIdx = 0;
let slideLength = slideLi.length;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slideWidth = slideLi[0].offsetWidth;
console.log(slideWidth);
const slideSpeed = 500;

makeClone();
initfunction();

// li 클론 만들기
function makeClone(){
  let cloneSlideFirst = slideLi[0].cloneNode(true); //slideLi.firstElementChild.cloneNode(true);
  let cloneSlideLast = slides.lastElementChild.cloneNode(true);
  // 첫 슬라이드를 마지막슬라이드 뒤에 복사하여 붙이기
  slides.append(cloneSlideFirst); 
  // 마지막 슬라이드를 첫 슬라이드 앞에 복사하여 붙이기
  slides.insertBefore(cloneSlideLast,slides.firstElementChild);
}


// 초기설정(너비, 위치값)
function initfunction(){
  slides.style.width = (slideWidth) * (slideLength + 2) + "px";
  slides.style.left = -(slideWidth) + "px";
}


// 페이저
const pagerNumber = document.querySelectorAll('#pager div');
// 총 슬라이드 수
pagerNumber[1].textContent = slideLength;
// 현재 슬라이드 번호(초기값)
pagerNumber[0].textContent = currentIdx + 1;


// next 버튼 클릭시 현재 보여지는 슬라이드
next.addEventListener('click', function () {
  // 현재 인덱스가 (총 슬라이드 수-1)보다 작거나 같을 때
  if (currentIdx <= slideLength-1) {
    slides.style.left = -(currentIdx+2) * (slideWidth) + "px";
    slides.style.transition = `${slideSpeed}ms ease-out`;
  // 현재 인덱스가 (총 슬라이드 수-1)와 같을 때
  }
  if (currentIdx === slideLength-1){
    setTimeout(function() {
      slides.style.left = -(slideWidth) + "px";
      slides.style.transition = `${0}s`;
    }, slideSpeed);
    currentIdx = -1;
    } 
    currentIdx++;
    // 현재 슬라이드 번호
    pagerNumber[0].textContent = currentIdx + 1;
  }
);

// 이전 버튼 클릭시
prev.addEventListener('click', function () {
    if (currentIdx >= 0) {
      slides.style.left = -(currentIdx) * (slideWidth) + "px";
      slides.style.transition = `${slideSpeed}ms ease-out`;
      pagerNumber[0].textContent = currentIdx + 1;
    }if (currentIdx === 0){
      setTimeout(function(){
        slides.style.left = -(slideLength) * (slideWidth)+ "px";
        slides.style.transition = `${0}s ease-out`;
      }, slideSpeed);
      currentIdx=slideLength;
      } 
      currentIdx--;
      pagerNumber[0].textContent = currentIdx + 1;
    }
);