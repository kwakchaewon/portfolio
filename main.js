// 자바스크립트에서 암묵적인 느슨한 모드(sloppy mode)를 해제
// 보다 엄격한 파싱 및 error handling 을 자발적으로 시행하도록 적용
// 일반적인 코딩 실수나 안전하지 않은 동작을 포착하는 엄격모드 (strict mode) 실행

'use strict';

// querySelector를 사용하여 html내에 있는 요소를 변수로 가져옴 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

//make navbar transparent when it is on the top
// 스크롤을 할때마다 navbar를 투명하게
document.addEventListener('scroll', () => {
    // console.log(window.scrollY)
    // console.log('navbarHeight :' + navbarHeight)

    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
}
);



