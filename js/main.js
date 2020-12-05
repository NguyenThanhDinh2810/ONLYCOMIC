$(document).ready(function () {

    // nav-mode__btn  dark-mode
    $(".nav-pc__button-icon").click(function () {
        $(".banner").toggleClass("dark-mode");
        $(".main-page, .clock__container, .feature__container,.latest__item-background, .suggest-bar__item-background, .fillter-catagory__container,.fas.fa-star").toggleClass("dark-mode");
        $(".contact-layout").toggleClass("dark-mode");
        $("#container,  .info-details__images, .comic-name-ranking__details-images").toggleClass("dark-mode");
    });


    // close nav-mode__btn dark-mode

    // carousel
    $('.autoplay').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // close carousel

    // pagination
    $('.pagination-item__link-next').click(function () {
        $('.pagination').find('.pagination-item__page-number.active').next().addClass('active');
        $('.pagination').find('.pagination-item__page-number.active').prev().removeClass('active');
    })

    $('.pagination-item__link-prev').click(function () {
        $('.pagination').find('.pagination-item__page-number.active').prev().addClass('active');
        $('.pagination').find('.pagination-item__page-number.active').next().removeClass('active');
    })

    // close pagination

    //clock
    // analog
    const mn_a = document.querySelector('#clock-analog__minute');
    const hr_a = document.querySelector('#clock-analog__hour');
    const sc_a = document.querySelector('#clock-analog__second');

    // digital
    let mn_d = document.querySelector('#clock-digital__minute');
    let hr_d = document.querySelector('#clock-digital__hour');
    let sc_d = document.querySelector('#clock-digital__second');
    let amPm = document.querySelector('#clock-digital_amPM')
    setInterval(() => {
        // analog
        let h_a = new Date().getHours() * 30;
        let m_a = new Date().getMinutes() * 6;
        let s_a = new Date().getSeconds() * 6;

        hr_a.style.transform = `rotateZ(${h_a + (m_a / 12)}deg)`;
        mn_a.style.transform = `rotateZ(${m_a}deg)`;
        sc_a.style.transform = `rotateZ(${s_a}deg)`;

        // digital
        let h_d = new Date().getHours();
        let m_d = new Date().getMinutes();
        let s_d = new Date().getSeconds();
        let am = "AM";

        if (h_d > 12) {
            am = "PM";
            h_d = h_d - 12;
        }

        h_d = (h_d < 10) ? "0" + h_d : h_d;
        m_d = (m_d < 10) ? "0" + m_d : m_d;
        s_d = (s_d < 10) ? "0" + s_d : s_d;

        hr_d.innerHTML = h_d + ":";
        mn_d.innerHTML = m_d + ":";
        sc_d.innerHTML = s_d + "&nbsp";
        amPm.innerHTML = am;
    })
    // close clock


})

// nav-bar sticky
window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);

    var goTop = document.querySelector('#go-to-top__btn');
    goTop.classList.toggle('sticky', window.scrollY > 0);
});