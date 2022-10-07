window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
    const preloader = document.querySelector('.load') /* находим блок Preloader */
    preloader.classList.add('preloader_hidden') /* добавляем ему класс для скрытия */
    localStorage.removeItem('prod');
})