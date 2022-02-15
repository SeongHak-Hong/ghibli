const slideUl = document.querySelector('#slide-ul');
const slideLi = document.querySelectorAll("#slide-ul li");

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
      window.alert(['This is the last film list.']);
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
const scrollIcon = document.querySelector('#scroll');
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