const slideUl = document.querySelector('#slide-ul');
const slideLi = document.querySelectorAll("#slide-ul li");
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
        top:getHeight * order,
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
        top:getHeight * order,
        behavior : "smooth"
      });
    } else {
      console.log("firstElement");
    }
    console.log('scroll up');
  }
})



// ***호버시 스크롤다운 아이콘
scrollIcon.style.display = 'none';
slideUl.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  scrollIcon.style.left = mouseX - 13 + 'px';
  scrollIcon.style.top = mouseY + 10 + 'px';
});

function mouse_over(){
  scrollIcon.style.display = 'block';
}

function mouse_out(){
  scrollIcon.style.display = 'none';
}




// ***페이저
let pageChild = '';
for (var i = 0; i < liArea; i++) {
  pageChild += '<li class="dot';
  pageChild += (i === startNum) ? ' active' : '';
  pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
}
pager.innerHTML = pageChild;


slideUl.style.transform = "translate3d("+ 0 + "px, -(slideLiHeight * (startNum + 1))" + "px, 0px)";

curSlide.classList.add('slide_active');




// ***페이저 클릭 이벤트
let curDot;
Array.prototype.forEach.call(pageDots, function (dot, i) {
  dot.addEventListener('click', function (e) {
    e.preventDefault();
    curDot = document.querySelector('.active');
    curDot.classList.remove('active');
    
    curDot = this;
    this.classList.add('active');

    curSlide.classList.remove('slide_active');
    curIndex = Number(this.getAttribute('data-index'));
    curSlide = slideLi[curIndex];
    curSlide.classList.add('slide_active');
    slideUl.style.transition = slideSpeed + "ms";
    slideUl.style.transform = "translate3d(" + 0 + "px, (slideLiHeight * (curIndex + 1))" + "px, 0px)";
  });
});