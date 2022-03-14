const menu = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__nav');
    const header = document.querySelector('.header__wrapper');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav');
        hamburger.classList.toggle('hamburger_active');
        if (hamburger.classList.contains('hamburger_active')) {
            header.classList.add('header_visible')
        } else {
            header.classList.remove('header_visible')
        }
    })

    nav.addEventListener('click', (e) => {
        if (e.target.classList.contains('header__nav_link')) {
            nav.classList.remove('nav');
            hamburger.classList.remove('hamburger_active');
        };
    })
}

menu();