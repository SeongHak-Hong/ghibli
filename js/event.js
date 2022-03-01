// ***사이드메뉴
const sidemenuUl = document.querySelector('#side-menu ul');
  
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


// 사이드메뉴 closed
const sidemenuLi = document.querySelectorAll("#side-menu-ul li");
const controls = document.querySelector("#controls");
const lantern = document.querySelector("#lantern");
const light = document.querySelector('#light');

// closed
sidemenuLi[1].onclick = function(e) {
  // 손전등 켜기
  light.style.opacity = 1;
  light.style.zIndex = 10;
  light.style.transition = .4 +"s";
  // 랜턴 끄기
  lantern.style.zIndex = 0;
  lantern.style.opacity = 0;
  // 컨트롤러(페이저) 투명도
  controls.style.opacity = .5;
}

// ongoing
sidemenuLi[0].onclick = function(e) {
  // 손전등 끄기
  light.style.opacity = 0;
  light.style.zIndex = 0;
  light.style.transition = 3 +"s";
  // 랜턴 켜기
  lantern.style.zIndex = 2;
  const blink0 = setTimeout(function(){
    lantern.style.opacity = 1;
  }, 530);
  const blink1 = setTimeout(function(){
    lantern.style.opacity = 0;
  }, 730);
  const blink2 = setTimeout(function(){
    lantern.style.opacity = 1;
  }, 830);
  const blink3 = setTimeout(function(){
    lantern.style.opacity = 0;
  }, 930);
  const blink4 = setTimeout(function(){
    lantern.style.opacity = 1;
  }, 1130);
  const blink5 = setTimeout(function(){
    lantern.style.opacity = 0;
  }, 1230);
  const blink6 = setTimeout(function(){
    lantern.style.opacity = 1;
  }, 1700);
  clearTimeout(blink0, blink1, blink2, blink3, blink4, blink5, blink6);
  // 컨트롤러(페이저) 투명도
  controls.style.opacity = 1;
}




// ***진입시 랜턴 깜빡

// 랜턴 깜빡
const blink1 = setTimeout(function(){
  lantern.style.opacity = 1;
}, 1516);
const blink2 = setTimeout(function(){
  lantern.style.opacity = 0;
}, 1716);
const blink3 = setTimeout(function(){
  lantern.style.opacity = 1;
}, 1816);
const blink4 = setTimeout(function(){
  lantern.style.opacity = 0;
}, 1916);
const blink5 = setTimeout(function(){
  lantern.style.opacity = 1;
}, 2016);
const blink6 = setTimeout(function(){
  lantern.style.opacity = 0;
}, 2116);
const blink7 = setTimeout(function(){
  lantern.style.opacity = 1;
}, 2616);




// ***마우스포인터 이벤트
var pos = document.documentElement;
    pos.addEventListener('mousemove', e =>{
      pos.style.setProperty('--x', e.clientX + 'px')
      pos.style.setProperty('--y', e.clientY + 'px')
    });