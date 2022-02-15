// ***사이드메뉴 on/off***
const sidemenuUl = document.querySelector('#side-menu ul');
  
  // a태그 스타일
  for(let i = 0; i < sidemenuUl.children.length; i++) {
    sidemenuUl.children[i].children[0].style.color = "#F9FFFE";
    sidemenuUl.children[i].children[0].style.transition = ".7s";
    sidemenuUl.children[0].children[0].style.opacity = 1;
    sidemenuUl.children[1].children[0].style.opacity = .6;
    sidemenuUl.children[0].children[0].style.textDecoration = "underline";
    sidemenuUl.children[1].children[0].style.textDecoration = "";
  }

// 클릭이벤트
sidemenuUl.addEventListener('click', function(event) {
  console.log(event.target);
  console.log(event.target.parentElement.dataset.index);
  console.log(typeof event.target.parentElement.dataset.index);
  let getIndexValue = Number(event.target.parentElement.dataset.index);
  console.log(typeof getIndexValue);
  

  console.log("반복문으로 활용할 인덱스 값을 마크업 속성노드에서 추출 :" + getIndexValue);
  for(let i = 0; i < sidemenuUl.children.length; i++) {
    if(getIndexValue !== i) {
        console.log(i);
        console.log("제외된 추출값 :" + getIndexValue);
        sidemenuUl.children[i].children[0].style.opacity = 0.6;
        sidemenuUl.children[i].children[0].style.color = "#F9FFFE";
        sidemenuUl.children[i].children[0].style.textDecoration = "none";
      } else {
        sidemenuUl.children[i].children[0].style.opacity = 1;
        sidemenuUl.children[i].children[0].style.color = "#F9FFFE";
        sidemenuUl.children[i].children[0].style.textDecoration = "underline";
      }
    }
});

// ***사이드메뉴 info 누르면 '1. 영화정보 보이기', '2. 페이저 숨기기'***
const film = document.querySelector("#film");
    const sidemenuLi = document.querySelectorAll("#side-menu-ul li");
    const controls = document.querySelector("#controls");

    // info on
    sidemenuLi[1].onclick = function(e) {
      film.style.opacity = 1;
      controls.style.display = 'none';
    }

    // info off
    sidemenuLi[0].onclick = function(e) {
      film.style.opacity = 0;
      controls.style.display = 'flex';
    }