const nav = () => {
    const navLinks = document.querySelector('.js-nav-links')
    const toggleNav = document.querySelectorAll('.js-nav-toggle')
    toggleNav.forEach(toggle => {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('is-active')
            navLinks.parentElement.classList.toggle('is-active')
        })
    })
}

const carousel = () => {
    const prevBtn = document.querySelectorAll('.js-btn-prev')
    const nextBtn = document.querySelectorAll('.js-btn-next')
    const imgs = document.querySelectorAll('.js-slider-img')
    const intros = document.querySelectorAll('.js-intro')
    let counter = 1

    nextBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            counter++
            startCarousel()
        })
    })
    prevBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            counter--
            startCarousel()
        })
    })
    function startCarousel() {
        if (counter > imgs.length) { counter = 1 }
        if (counter < 1) { counter = imgs.length }
        for(let img of imgs) {
            img.style.display = 'none'
        }
        imgs[counter - 1].style.display = 'block'
        intros.forEach((intro, index) => {
            return index + 1 === counter ? intro.classList.add('is-active') : intro.classList.remove('is-active')
        })
    }

}

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("animation-stopper");
    }, 400);
});
window.addEventListener("load", () => {
    document.body.classList.remove("animation-stopper");
})

nav()
carousel()