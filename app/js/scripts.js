$(document).ready(function () {

    // открыть моб. меню
    $('.header .btn-toggle-menu').click(function () {
        var navHtmlPc = $('.header .navigation').html()
        var html = `
        <div class="navigation-mobile">
            <button class="btn btn-menu-close"><i class="icon close"></i></button>
            <nav>`+navHtmlPc+`</nav>
            <button type="button" class="btn btn-outline-primary modal-callback">Заказать звонок</button>
            <a href="tel:+7 (495) 909-82-57" class="contact-phone">+7 (495) 909-82-57</a>
        </div>`;
        if ( $('.navigation-mobile').length < 1 ) {
            $('body').append(html);
        }
        openMobileMenu();
        $('body').addClass('overLock')

        $('.btn-menu-close').click(function () {
            closeMobileMenu();
        });
    });

    $('.slider-projects').owlCarousel({
        loop:true,
        items: 1,
        margin: 10,
        nav: false,
        dots: true
    });

    $('.partner-slider').owlCarousel({
        loop:true,
        margin: 20,
        nav: false,
        dots: true,
        responsive : {
            0 : {
                items: 2,
                margin: 0,
            },
            1100 : {
                items: 4
            }
        }
    });

    $('.slider-reviews').owlCarousel({
        loop:true,
        margin: 20,
        nav: false,
        dots: true,
        responsive : {
            0 : {
                items: 1,
                margin: 0,
            },
            1100 : {
                items: 3
            }
        }
    });

    // навигация для owl-slider
    $('.slider-control .btn').click(function () {
        var path = $(this).closest('section').find('.owl-carousel');
       if ($(this).hasClass('btn-prev')) {
           path.find('.owl-prev').click();
       } else if ($(this).hasClass('btn-next')) {
           path.find('.owl-next').click();
       }
    });

    // показать скрыть весь текст статьи
    $('.toggle-text').click(function(){
        var btn = $(this).closest('.item').find('.btn');
        $(this).closest('.item').find('.btn').toggleClass('open');
        $(this).closest('.item').find('.desc-all').slideToggle('fast');
        if ($('.toggle-text').hasClass('open')) {
            btn.html('Скрыть');
        } else {
            btn.html('Подробнее');
        }
        return false
    });

    // показать скрыть весь текст FAQ
    $('.section-faq .item-faq').click(function(){
        var $this = $(this)
        $(this).toggleClass('open');
        $(this).find('.answer').slideToggle('fast')
        if ($('.section-faq .item-faq').hasClass('open')) {
            $this.find('.icon').removeClass('plus').addClass('minus');
        } else {
            $this.find('.icon').removeClass('minus').addClass('plus');
        }
        return false
    });


});

// открыть навигацию сайта
function openMobileMenu() {
    setTimeout( function () {
        $('.navigation-mobile').addClass('open');
    }, 10);
}

// закрыть навигацию сайта
function closeMobileMenu() {
    $('.navigation-mobile').removeClass('open');
    $('body').removeClass('overLock');
}



