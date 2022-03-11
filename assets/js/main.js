const navmenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-cls'),
      navLinks = document.querySelectorAll('.nav_link'),
      skilllsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header'),
      tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]'),
      modalViews = document.querySelectorAll('.serviices_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')
    

navToggle.addEventListener('click',()=>{
    navmenu.classList.add('show-menu');
    navToggle.style.opacity = 0

})

navClose.addEventListener('click',()=>{
    navmenu.classList.remove('show-menu');
    navToggle.style.opacity = 1
})

/*==================== REMOVE MENU MOBILE ====================*/
linkAction=()=>{
    navmenu.classList.remove('show-menu')
    navToggle.style.opacity = 1
}
navLinks.forEach(n=>n.addEventListener('click',linkAction))


/*==================== ACCORDION SKILLS ====================*/
 function toggleSkill(){
    
    let itemClass = this.parentNode.className
    console.log(itemClass);
    for (let i = 0; i < skilllsContent.length; i++) {
        skilllsContent[i].className = 'skills_content skills_close'
        
    }
    if (itemClass == 'skills_content skills_close') {
        this.parentNode.className="skills_content skills_open"
        
    }
}

skillsHeader.forEach((el)=>el.addEventListener('click',toggleSkill))

/*==================== QUALIFICATION TABS ====================*/

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification_active')
        })

        target.classList.add('qualification_active')

        tabs.forEach(tab=> {
            tab.classList.remove('qualification_active')
        })

        tab.classList.add('qualification_active')
    })
})


/*==================== SERVICES MODAL ====================*/

let modal = function (modalclick) {
    modalViews[modalclick].classList.add('active-modal')
    
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalClose.forEach((modalclose)=>{
    modalclose.addEventListener("click",()=>{
        modalViews.forEach((modalview=>{
            modalview.classList.remove('active-modal')
        }))
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/


let swiperportfolio = new Swiper(".portfolio_container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    mousewheel: true,
    keyboard: true,
  });


/*==================== TESTIMONIAL ====================*/
let swiperTestimoonial = new Swiper(".testimonial_container", {
    grabCursor:true,
    loop:true,
    spaceBetween:48,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    },
    mousewheel: true,
    keyboard: true,
  });


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.add('active-link')
        }else{
            document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-moon'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ======================================== preloaer========================

var preloader  = document.getElementById('preloader');
window.addEventListener('load',()=>{
    setTimeout(() => {
        preloader.style.display = 'none'
        
    },5000);
    
})