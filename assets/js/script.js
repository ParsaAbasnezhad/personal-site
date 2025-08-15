const navToggleIcon = document.querySelector('.nav__toggle-icon');
const menu = document.querySelector('.menu');
// const cover = document.querySelector('.cover');
const resumeListItems = document.querySelectorAll('.resume-list__item');
const portfoieListItems = document.querySelectorAll('.portfolio-list__item');
const changeTheme = document.querySelector('.change-theme');


navToggleIcon.addEventListener('click', function () {
    this.classList.toggle('nav__toggle-icon--open');
    menu.classList.toggle('menu--open');


})


resumeListItems.forEach(resumeListItems => {
    resumeListItems.addEventListener('click', function () {
        document.querySelector('.resume-list__item--active').classList.remove('resume-list__item--active');
        document.querySelector('.resume-content--show').classList.remove('resume-content--show');
        this.classList.add('resume-list__item--active');
        let contentId = this.getAttribute('data-content-id');
        document.querySelector(contentId).classList.add('resume-content--show')


    })


})


portfoieListItems.forEach(portfoieListItems => {
    portfoieListItems.addEventListener('click', function () {
        document.querySelector('.portfolio-list__item--active').classList.remove('portfolio-list__item--active');
        document.querySelector('.portfolio-content--show').classList.remove('portfolio-content--show');
        this.classList.add('portfolio-list__item--active');
        let contentId = this.getAttribute('data-content-id');
        document.querySelector(contentId).classList.add('portfolio-content--show')


    })


})


changeTheme.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark-theme');
    if (document.documentElement.classList.contains('dark-theme')) {
        this.innerHTML = '<img src="assets/image/icons8-light-mode-78.png" alt="">';
}else {
        this.innerHTML = '<img src="assets/image/icons8-dark-mode-50.png" alt="">';
    }
})