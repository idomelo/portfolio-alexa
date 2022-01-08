/*==================== MENU SHOW AND HIDDEN ====================*/

const $navMenu = document.getElementById('nav-menu'),
      $navToggle = document.getElementById('nav-toggle'),
      $navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if ($navToggle) {
    $navToggle.addEventListener('click', () =>{
        $navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if ($navClose) {
    $navClose.addEventListener('click', () =>{
        $navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/


const $navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    $navMenu.classList.remove('show-menu')
}
$navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/

const $skillsHeader = document.querySelectorAll('.skills__header'),
      $skillsContent = document.getElementsByClassName('skills__content')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < $skillsContent.length; i++) {
        $skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

$skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/


const $tabs = document.querySelectorAll('[data-target]'),
      $tabContents = document.querySelectorAll('[data-content]')

$tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        $tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        $tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/*==================== SERVICES MODAL ====================*/


const $modalViews = document.querySelectorAll('.services__modal'),
      $modalBtns = document.querySelectorAll('.services__button'),
      $modalCloses = document.querySelectorAll('.services__modal-close')
      
// Fecha o modal, se detectado evento de clique fora do mesmo
const handleClickOutside = (event) => {
    $modalViews.forEach((item) => {
        
        if (item === event.target) {
            $modalViews.forEach((modalView) => {
                modalView.classList.remove('active-modal')
            })
        }
    })
}

// Torna modal ativo
let modal = function(modalClick) {
    $modalViews[modalClick].classList.add('active-modal')
    //Adiciona evento de clique para o documento(p/ verificar se usuário clicou fora)
    setTimeout(() => {document.addEventListener('click', handleClickOutside, false) }, 200);
}

//Aciona modal do respectivo butão clicado
$modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

// Permite fechar modal se clicar no 'x' também
$modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        $modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 