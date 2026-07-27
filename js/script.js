
/*------ ハンバーガーメニュー ----------*/

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    });
});


/*---------- FAQ開閉 ---------------*/

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
        faqItem.classList.toggle('open');
    });
});

/*------- モーダルウィンドウ --------*/

const closeBtns = document.querySelectorAll('.modal-close');
const studyLogCards = document.querySelectorAll('.study-log-card');
const modals = document.querySelectorAll('.modal');

studyLogCards.forEach((studyLogCard, i) => {
    studyLogCard.addEventListener('click', () => {
        modals[i].classList.add('open');
    })
});


//閉じる動き

function closeAllModals() {
    modals.forEach((modal) => {
        modal.classList.remove('open');
    });
}

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        closeAllModals();
    });
});

modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });
});

/*---------- タブ切り替え ------------*/
const featureCards = document.querySelectorAll('.feature-card');
const featureDetails = document.querySelectorAll('.feature-detail');

featureCards.forEach((featureCard, i) => {
    featureCard.addEventListener('click', () => {

        //activeを取り除く

        featureCards.forEach((featureCard) => {
            featureCard.classList.remove('active');
        });

        //クリックされたタブだけactiveつける

        featureCard.classList.add('active');

        //タブに対応したdetailのみ表示する
        featureDetails.forEach((featureDetail) => {
            featureDetail.classList.remove('active');
        });

        featureDetails[i].classList.add('active');



    });
});

/*---------- スライダー ------------*/
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide')
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const sliderTrack = document.querySelector('.slider-track');
const sliderDots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    sliderDots.forEach((sliderDot) => {
        sliderDot.classList.remove('active');
    });
    sliderDots[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex += 1;
    if (currentIndex === slides.length) {
        currentIndex = 0;
    }
    updateSlider();
}

sliderNext.addEventListener('click', () => {
    nextSlide();
});


function prevSlide() {
    currentIndex -= 1;
    if (currentIndex === -1) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
}

sliderPrev.addEventListener('click', () => {
    prevSlide();
});

sliderDots.forEach((sliderDot, i) => {
    sliderDot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
    });
});

let timer = setInterval(() => {
    nextSlide();
}, 4500);

slider.addEventListener('mouseover', () => {
    clearInterval(timer);
});

slider.addEventListener('mouseout', () => {
    timer = setInterval(() => {
        nextSlide();
    }, 4500);
});

/*---------- ページトップ遷移 ------------*/

const pageTopBtn = document.querySelector('.page-top');


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        pageTopBtn.classList.add('show');
    } else {
        pageTopBtn.classList.remove('show');
    }
})

pageTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
})

/*---------- fade-in ------------*/
const fadeItems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        
        }
    });
});

fadeItems.forEach((fadeItem)=>{
    observer.observe(fadeItem);
});
