// const scroll = () => {
//     const nav = document.querySelector('.header__nav_list');
//     nav.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (e.target.children) {
//             let link = e.target;
//             let id = link.getAttribute('href').substring(1);
//             const section = document.getElementById(id);

//             if (section) {
//                 seamless.elementScrollIntoView(section, {
//                     behavior: 'smooth',
//                     block: 'start'
//                 })
//             } else {
//                 seamless.elementScrollIntoView(document.querySelector("#target"), {
//                     behavior: "smooth",
//                     block: "center",
//                     inline: "center",
//                 });
//             }
//         }

//     })

// }
// seamless.polyfill();
// scroll();

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};