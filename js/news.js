// ***스크롤다운 아이콘
const scrollIcon = document.querySelector('#scroll');
const board = document.querySelector('#board');
scrollIcon.style.display = 'none';

board.addEventListener("mousemove", (e) => {
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


// ***더보기 클릭시 해당 게시판 정보만 보이기
// more 클릭 이벤트 - 선택한 li만 보이도록
board.addEventListener('click', function(event) {
  console.log(event.target);
  console.dir(event.target);
  console.log(event.target.alt === "more");
  console.log(event.target.offsetParent);
  // 더보기 아이콘 alt값 얻기
  let getAltData = event.target.alt;
  // 더보기 아이콘의 부모 li 얻기
  let getOffsetParent = event.target.offsetParent;
  // alt값이 more라면?
  if(getAltData === "more") {
    // li에 select-more 클래스 추가
    getOffsetParent.classList.add('select-more');
    console.log(this.children);
    for(let i = 0; i < this.children.length; i++) {
      if(this.children[i].classList.contains('select-more')) {
        // ul 속성
        this.style.overflowY = "unset";
        // li 속성
        const liStyle = this.children[i].style
        liStyle.transition = "1s";
        liStyle.backgroundColor = "rgba(240, 248, 255, .8)";
        liStyle.height = "35rem";
        // thum-wrap(썸네일) 속성
        this.children[i].children[0].children[0].style.width = "50%";
        // text-wrap 속성
        this.children[i].children[0].children[1].style.justifyContent = "center";
        // title/date-wrap 속성
        this.children[i].children[0].children[1].children[0].style.flexDirection = "column";
        // title 속성
        const titleStyle = this.children[i].children[0].children[1].children[0].children[0].style
        titleStyle.width = "100%";
        titleStyle.whiteSpace = "normal";
        titleStyle.textAlign = "end";
        // date 속성
        this.children[i].children[0].children[1].children[0].children[1].style.margin = "1rem 0";
        // content 속성
        const contentStyle = this.children[i].children[0].children[1].children[1].style
        contentStyle.height = "max-content";
        contentStyle.overflowY = "scroll";
        contentStyle.paddingBottom = "1rem";
        // 더보기 아이콘
        event.target.src = "./img/icon/chevron_up.png";
        event.target.alt = "no-more";
      }
      // li에 select-more 클래스가 없다면?
      else {
        // select-more가 없는 li는 display 'none'처리
        this.children[i].style.display = 'none';
      }
    }
  }
  // alt값이 no-more라면?
  else if(getAltData === "no-more") {
    getOffsetParent.classList.remove('select-more');
    for(let i = 0; i < this.children.length; i++) {
      // ul 속성
      this.style.overflowY = "scroll";
      // li 속성
      const liStyle = this.children[i].style
      liStyle.transition = "1s";
      liStyle.backgroundColor = "rgba(240, 248, 255, .7)";
      liStyle.height = "8rem";
      // thum-wrap(썸네일) 속성
      this.children[i].children[0].children[0].style.width = "20%";
      // text-wrap 속성
      this.children[i].children[0].children[1].style.justifyContent = "unset";
      // title/date-wrap 속성
      this.children[i].children[0].children[1].children[0].style.flexDirection = "row";
      // title 속성
      const titleStyle = this.children[i].children[0].children[1].children[0].children[0].style
      titleStyle.width = "80%";
      titleStyle.whiteSpace = "nowrap";
      titleStyle.textAlign = "left";
      // date 속성
      this.children[i].children[0].children[1].children[0].children[1].style.margin = 0;
      // content 속성
      const contentStyle = this.children[i].children[0].children[1].children[1].style
      contentStyle.height = "4.375rem";
      contentStyle.overflowY = "hidden";
      contentStyle.paddingBottom = 0;
      // 더보기 아이콘
      event.target.src = "./img/icon/chevron_down.png";
      event.target.alt = "more";
      // li 모두 보이도록
      this.children[i].style.display = 'block';
    }
  }
  else {
    // more 외 영역을 눌렀을 때 애니메이션
    getOffsetParent.animate([
      {marginTop:"16px", marginBottom:"0px"},
      {marginTop:"24px", marginBottom:"16px"},
      {marginTop:"16px", marginBottom:"0px"}
    ],{
      duration:500
    });
  }
});




// ***슬라이드
const boardUl = document.querySelector('#board');
const boardLi = document.querySelectorAll("#board li");

let order = 0;

// ***마우스휠 제어
boardUl.addEventListener('wheel', function (event) {
  // 휠 기본기능 막기
  event.preventDefault();
  // li의 높이값
  let getHeight = (boardLi[0].offsetHeight)*4 + (64); // 64 = li의 margin-top
  console.log(getHeight);
  // event.deltaY값이 0 이상
  if(event.deltaY > order) {
    // order값이 li의 길이보다 작을 때
    if(order < boardLi.length) {
      order++;
      console.log(order);
      console.log('scroll down');
      boardUl.scrollTo({
        top:getHeight * order,
        behavior : "smooth", 
      });
    } else {
      console.log("lastElement");
      window.alert(['This is the last post.']);
    }
  } else {
    if(order > 0) {
      order--;
      console.log(order);
      console.log('scroll up');
      boardUl.scrollTo({
        top:getHeight * order,
        behavior : "smooth"
      });
    } else {
      console.log("firstElement");
    }
    console.log('scroll up');
  }
});