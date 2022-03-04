const sidemenuUl = document.querySelector('#side-menu ul');
  
// ***사이드메뉴 a태그 스타일
for(let i = 0; i < sidemenuUl.children.length; i++) {
  sidemenuUl.children[i].children[0].style.color = "#F9FFFE";
  sidemenuUl.children[i].children[0].style.transition = ".7s";
  sidemenuUl.children[0].children[0].style.opacity = 1;
  sidemenuUl.children[1].children[0].style.opacity = .6;
  sidemenuUl.children[0].children[0].style.textDecoration = "underline";
  sidemenuUl.children[1].children[0].style.textDecoration = "";
}

// ***사이드메뉴 클릭시 이벤트타겟 글씨 진하게
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


// ***사이드메뉴 info 누르면 '1. 영화정보 보이기', '2. 갤러리 숨기기'
const film = document.querySelector("#film");
const sidemenuLi = document.querySelectorAll("#side-menu-ul li");
const gallery = document.querySelector('#gallery');

// info on
sidemenuLi[1].onclick = function(e) {
  film.style.opacity = 1;
  gallery.style.opacity = 0;
}

// info off
sidemenuLi[0].onclick = function(e) {
  film.style.opacity = 0;
  gallery.style.opacity = 1;
}


// ***썸네일 누르면 해당 썸네일의 사진이 뷰어에 나오도록 하기
const view = document.querySelector('#view');
const thumbnail = document.querySelector('#thumbnail');
const curPage = document.querySelector('#pager strong');

// 뷰어 이미지 스타일 적용
for(i=0; i<view.children.length; i++) {
  view.children[i].style.opacity = 0;
  view.children[i].style.position = 'absolute';
  view.children[i].style.left = 0;
  view.children[i].style.top = 0;
  view.children[i].style.transition = .3 + 's';
}


// 처음 페이지 들어왔을 때 1번 이미지만 뷰어에 보이도록 하기
view.children[0].style.opacity = 1;



// (클릭이벤트) 썸네일 클릭하면 뷰어에 해당 이미지 보이도록 하기
thumbnail.addEventListener('click', function(event) {
  console.log(event.target);
  console.dir(event.target);
  // 이벤트타겟의 node가 img일 때만 클릭이벤트 적용(빈영역 클릭시 무반응)
  if (event.target.nodeName == 'IMG') {
    // 썸네일의 데이터셋 얻기
    let getThumbDataset = event.target.dataset.thumb;
    // 클릭시 뷰어 opacity 0으로 만들기
    for(i=0; i<view.children.length; i++) {
      view.children[i].style.opacity = 0;
    }
    // 클릭시 해당 데이터셋을 가진 썸네일이 뷰어에 보이도록 하기
    view.children[getThumbDataset].style.opacity = "1";
    // 클릭시 페이저의 현재 이미지의 데이터셋값 불러오기
    curPage.textContent = Number(getThumbDataset) + 1;
  }
});


// ***페이저의 총 페이지수
const totalPage = document.querySelector('#pager p');
const thumbnailImg = document.querySelectorAll('#thumbnail div img');
totalPage.textContent = thumbnailImg.length;