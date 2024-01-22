document.addEventListener('DOMContentLoaded', function () {


    const btnMenuRes = document.querySelector('.btn-menu-responsive');
    const navContainer = document.querySelector('.nav-container-res');
    const body = document.querySelector('body');
    const btnCancelMenu = document.querySelector('.btn-menu-cancel');

    btnMenuRes.addEventListener('click', () =>{
        navContainer.classList.add('active');
        body.classList.add('active')
    })
    btnCancelMenu.addEventListener('click', () => {
        navContainer.classList.remove('active');
        body.classList.remove('active')
    })









    const sliderImages = document.querySelectorAll('.slider-image');
    const totalSlides = sliderImages.length;
    let currentIndex = 0;

    const updateContent = function () {
        const titles = document.querySelectorAll('[data-slide-title]');
        const statuses = document.querySelectorAll('[data-slide-status]');

        document.getElementById('slide-title').innerHTML = titles[currentIndex].innerHTML;
        document.getElementById('slide-status').innerHTML = statuses[currentIndex].innerHTML;
    };

    const updatePagination = function () {
        const buttons = document.getElementById('pagination').querySelectorAll('button');
        buttons.forEach(button => button.classList.remove('active'));
        buttons[currentIndex].classList.add('active');
    };

    const animateSlider = function (nextIndex) {
        gsap.to(sliderImages[currentIndex], {
            opacity: 0,
            duration: 0,
            ease: 'power2.inOut',
            onComplete: function () {
                sliderImages[currentIndex].style.zIndex = 0;

                sliderImages[nextIndex].style.opacity = 1;
                sliderImages[nextIndex].style.zIndex = 1;

                currentIndex = nextIndex;
                updateContent();
                updatePagination();
            },
        });
    };

    const addEvents = function () {
        const pagButtons = Array.from(document.getElementById('pagination').querySelectorAll('button'));
        pagButtons.forEach((el, index) => {
            el.addEventListener('click', function () {
                if (currentIndex !== index) {
                    animateSlider(index);
                }
            });
        });
    };

    addEvents();
    updateContent();
    updatePagination();


    sliderImages[0].style.opacity = 1;
    sliderImages[0].style.zIndex = 1;
});
