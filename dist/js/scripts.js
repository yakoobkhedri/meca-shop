// checkbox

let checkbox = Array.from(document.getElementsByClassName('checkbox'));
let checkboxRow = Array.from(document.getElementsByClassName('checkboxRow'));

checkboxRow.forEach((item) => {
    item.addEventListener('click', function () {
        item.querySelector('.checkbox').classList.toggle('active');
    })
})
// اسلایدر 
var banner1 = new Swiper(".banner1", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 14,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next5",
        prevEl: ".swiper-button-prev5",
    }
});
var banner2 = new Swiper(".banner2", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 14,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next6",
        prevEl: ".swiper-button-prev6",
    }
});
var banner3 = new Swiper(".banner3", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 14,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next7",
        prevEl: ".swiper-button-prev7",
    }
});
var janebi = new Swiper(".janebi", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 16,
    navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    }
});
var category = new Swiper(".brands", {
    slidesPerView: 2.8,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 14,
    breakpoints: {
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 6
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var time = new Swiper(".time", {
    slidesPerView: 1.6,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 16,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        },
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    }
});
var mobile = new Swiper(".mobile", {
    slidesPerView: 1.6,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 16,
    breakpoints: {
        1280: {
            slidesPerView: 5
        },
        1024: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2.4
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var mobile2 = new Swiper(".mobile2", {
    slidesPerView: 2.4,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 16,
    breakpoints: {
        1280: {
            slidesPerView: 5
        },
        1024: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var mobile = new Swiper(".blog", {
    slidesPerView: 1.1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 24,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    }
});
var comments = new Swiper(".comments", {
    slidesPerView: 1.7,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 24,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var swiper = new Swiper(".smallImgs", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".gallery", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiper,
    },
});
var brands = new Swiper(".payment", {
    slidesPerView: 2.8,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 14,
    breakpoints: {
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var category2 = new Swiper(".category2", {
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 14,
    breakpoints: {
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 5
        },
        1400: {
            slidesPerView: 6
        }
    },
});
// see-more

let seeMore = Array.from(document.getElementsByClassName('see-more'));

seeMore.forEach((item) => {
    item.addEventListener('click', function () {
        item.previousElementSibling.classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
    })
})

// accardion

let accardionBtn = Array.from(document.getElementsByClassName('accardionBtn'));
let accardionContent = Array.from(document.getElementsByClassName('accardionContent'));
let footerBtn = Array.from(document.getElementsByClassName('footer-btn'));
let footerContent = Array.from(document.getElementsByClassName('footer-content'));
let toggleCatDropdown = Array.from(document.getElementsByClassName('toggleCatDropdown'));

accardionBtn.forEach((item) => {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('active');
    })
})
toggleCatDropdown.forEach((item) => {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
    })
})
footerBtn.forEach((item) => {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
    })
})

// tab

let tabs = Array.from(document.querySelectorAll('#myTab li'));
let tabsMenu = Array.from(document.querySelectorAll('.tabs'));
let catDropdownTab = Array.from(document.querySelectorAll('.catDropdownTab'));
let myTabContent = Array.from(document.querySelectorAll('#myTabContent > div'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let catDropdownContent = Array.from(document.querySelectorAll('.catDropdownContent > div'));

tabs.forEach((item) => {
    item.addEventListener('click', function () {
        tabs.forEach((items) => { items.classList.remove('active') });
        item.classList.add('active');
        let tabId = item.dataset.id;
        myTabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})

tabsMenu.forEach((item) => {
    item.addEventListener('mouseenter', function () {
        tabsMenu.forEach((items) => { items.classList.remove('active') });
        item.classList.add('active');
        let tabId = item.dataset.id;
        tabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})

catDropdownTab.forEach((item) => {
    item.addEventListener('click', function () {
        catDropdownTab.forEach((items) => { items.classList.remove('active') });
        item.classList.add('active');
        let tabId = item.dataset.id;
        catDropdownContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})

// show Otp

let showOtp = document.getElementById('showOtp');

showOtp.addEventListener('click', function () {
    this.parentElement.style.display = 'none';
    this.parentElement.nextElementSibling.style.display = 'block';
    document.getElementById('noCode').style.display = 'none';

    var countDownTime = 80;

    var x = setInterval(function () {
        document.getElementById("countdown").innerHTML = countDownTime;
        countDownTime--;

        if (countDownTime < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "0";
            document.getElementById('noCode').style.display = 'block';
        }
    }, 1000);

    // change number

    let changeNumber = document.getElementById('changeNumber');

    changeNumber.addEventListener('click', function () {
        this.parentElement.style.display = 'none';
        this.parentElement.previousElementSibling.style.display = 'block';
        clearInterval(x);
    })
})

// start count down

let startButton = Array.from(document.getElementsByClassName('startButton'));

startButton.forEach((item) => {
    item.addEventListener("click", function () {
        item.parentElement.style.display = 'none';
        var countDownTime = 80;

        var x = setInterval(function () {
            document.getElementById("countdown").innerHTML = countDownTime;
            countDownTime--;

            if (countDownTime < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "0";
                document.getElementById('noCode').style.display = 'block';
            }
        }, 1000);
        // change number

        let changeNumber = document.getElementById('changeNumber');

        changeNumber.addEventListener('click', function () {
            this.parentElement.style.display = 'none';
            this.parentElement.previousElementSibling.style.display = 'block';
            clearInterval(x);
        })
    });
});

// go back

function goBack() {
    window.history.back();
}

// show all category

let showAllCat = document.getElementById('showAllCat');

showAllCat.addEventListener('click', function () {
    this.parentElement.parentElement.classList.add('active');
    this.parentElement.style.display = 'none';
})

// show all Size

let showSize = Array.from(document.getElementsByClassName('showSize'));

showSize.forEach((item) => {
    item.addEventListener('click', function () {
        item.parentElement.classList.add('active');
        item.style.display = 'none';
    })
})