 // ***메뉴 토글***
    
const hamburger = document.querySelector("#hamburger");
const hamburgerImg = document.querySelector("#hamburger img");

hamburger.addEventListener("click", function() {
  const menu = document.querySelector("#menu");
  const menuBg = document.querySelector("#menu-bg");
  const footer = document.querySelector("footer");
  const menuA = document.querySelector("#menu a");
  const menuSpan = document.querySelectorAll("#menu ul li a span");

  // 메뉴의 a태그 오버플로우 히든
  menuA.style.overflow = "hidden";

  // ***메뉴 들어갔을 때 애니메이션***
  if (hamburger.classList.contains('active') === false) {
    const delay = setTimeout(function(){
      // 글자 스르륵 내려오기
      for (i = 0; i < menuSpan.length; i++) {
        menuSpan[i].style.transform = "translateY(0)";
        menuSpan[i].style.transition = .7 + "s";
      }
      // 햄버거이미지를 뒤로가기로 바꾸기
      hamburgerImg.src = "./img/icon/chevron_big_left.png";
      clearTimeout(delay);
      hamburger.classList.add('active');
    }, 16);

    // else문(원상태로 돌려놓기)
  } else {
    hamburger.classList.remove('active');
    hamburgerImg.src = "./img/icon/hamburger.png";
    for (i = 0; i < menuSpan.length; i++) {
      menuSpan[i].style.transform = "translateY(-104px)";
    }
  }

  
  // toggle work
  menuBg.classList.toggle("on");
  menu.classList.toggle("on");
  footer.classList.toggle("on");
});



// headerBg.addEventListener("onmouseover", function(){
//   headerBg.style.background = "rgba(255,255,255,.16)";
//   headerBg.style.backdropFilter = "blur(6px)";
// });