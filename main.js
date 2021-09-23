// 자바스크립트에서 암묵적인 느슨한 모드(sloppy mode)를 해제
// 보다 엄격한 파싱 및 error handling 을 자발적으로 시행하도록 적용
// 일반적인 코딩 실수나 안전하지 않은 동작을 포착하는 엄격모드 (strict mode) 실행

'use strict';


// querySelector를 사용하여 html내에 있는 요소를 변수로 가져옴 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

const navbar__toggle = document.querySelector('.navbar__toggle');
const navbar__logo = document.querySelector('.navbar__logo');

const navbar__menu = document.querySelector('.navbar__menu');


//make navbar transparent when it is on the top
// 스크롤을 할때마다 navbar를 투명하게
document.addEventListener('scroll', () => {

    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
}
);


// make navbar__toggle transparent, font color black when it is on the top
// 스크롤할때 navbar__toggle 폰트색을 하얗게
document.addEventListener('scroll',() => {

    if(window.scrollY > navbarHeight){
        navbar__toggle.classList.replace('navbar__toggle','navbar__toggle__dark');
    } else {
        navbar__toggle.classList.replace('navbar__toggle__dark','navbar__toggle');
    }

}
);


// make navbar__logo font color white when it is on the top
// 스크롤할때 navbar__toggle__logo 폰트색을 하얗게
document.addEventListener('scroll',() => {

    if(window.scrollY > navbarHeight){
        navbar__logo.classList.replace('navbar__logo','navbar__logo__scroll');
    } else {
        navbar__logo.classList.replace('navbar__logo__scroll','navbar__logo');
    }
}
);


// 스크롤을 할때 배경을 투명하게
document.addEventListener('scroll',() => {

    if(window.scrollY > navbarHeight){
        navbar__logo.classList.replace('navbar__logo','navbar__logo__scroll');
    } else {
        navbar__logo.classList.replace('navbar__logo__scroll','navbar__logo');
    }
}
);




// navbar__menu__item을 클릭하면 해당 메뉴 스크롤로 이동

// const home__location
const about__location = document.querySelector('.about__title').offsetTop-100;
const skills__location = document.querySelector('.about__skills').offsetTop-200;
const mywork__location = document.querySelector('.about_mywork').offsetTop-100;
const contact__location = document.querySelector('#contact').offsetTop;

navbar__menu.addEventListener('click',(event) => {

    switch(event.target.dataset.link)
    {
        case "About":
            window.scrollTo({top:about__location, behavior:'smooth'});
            break;
        case "Skills":
            window.scrollTo({top:skills__location, behavior:'smooth'});
            break;
        case "My work":
            window.scrollTo({top:mywork__location, behavior:'smooth'});
            break;
        case "Contact":
            window.scrollTo({top:contact__location, behavior:'smooth'});
            break;
        case "Termonials":
            break;
        default:
            break;
    }
}
);

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__contatiner')
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    console.log(1-window.scrollY/homeHeight);
    home.style.opacity = 1-(window.scrollY/homeHeight);
})



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}





