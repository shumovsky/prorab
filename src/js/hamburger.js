const menu = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav');
        hamburger.classList.toggle('hamburger_active');
    })
}

menu();