const menu = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav');
        hamburger.classList.toggle('hamburger_active');
    })

    nav.addEventListener('click', (e) => {
        if (e.target.classList.contains('header__nav_link')) {
            nav.classList.remove('nav');
            hamburger.classList.remove('hamburger_active');
        };
    })
}

menu();