const scrollTop = document.querySelector('.scroll-top');

window.onscroll = () => {
    if (window.pageYOffset > 400) scrollTop.classList.remove('d-none');
    else scrollTop.classList.add('d-none');
}

scrollTop.addEventListener('click', () => {
    const scrollInterval = setInterval(() => {
        let pageYOffset = window.pageYOffset;
        window.scrollTo(0, pageYOffset - 50);
        if (pageYOffset == 0) clearInterval(scrollInterval);
    }, 10);
});