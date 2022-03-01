const slideUl = document.querySelector('#film ul');
const slideLi = document.querySelectorAll("#film ul li");
const slideLiLen = slideLi.length;
const scrollIcon = document.querySelector('#scroll');
const pageDots = document.querySelectorAll('.dot'); // each dot from pagination
const pager = document.querySelector('#pager');
const liArea = (slideLi.length / 3) - (slideLi.length / 3 % 1); // 한 화면에 보이는 리스트 행의 갯수
const slideLiHeight = slideLi[0].offsetHeight; // li height
const startNum = 0;
let curIndex = startNum; // current slide index (except copied slide)
let curSlide = slideLi[curIndex]; // current slide dom
console.log(slideLiLen);
console.log(liArea);
const slideSpeed = 500;

let order = 0;

slideUl.addEventListener('wheel', function (event) {
  // 휠 기본기능 막기
  event.preventDefault();
  // li의 높이값
  let getHeight = slideLi[0].offsetHeight;
  console.log(getHeight);
  // event.deltaY값이 0 이상
  if(event.deltaY > order) {
    // order값이 li의 길이보다 작을 때
    if(order < slideLi.length) {
      order++;
      console.log(order);
      console.log('scroll down');
      slideUl.scrollTo({
        top:(getHeight + 32) * order,
        behavior : "smooth", 
      });
    } else {
      console.log("lastElement");
    }
  } else {
    if(order > 0) {
      order--;
      console.log(order);
      console.log('scroll up');
      slideUl.scrollTo({
        top:(getHeight + 32) * order,
        behavior : "smooth"
      });
    } else {
      console.log("firstElement");
    }
    console.log('scroll up');
  }
});