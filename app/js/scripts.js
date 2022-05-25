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




    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        margin: 10,
        nav: false,
        dots: true
    });


    $('.slider-control .btn').click(function () {
        var path = $(this).closest('section').find('.owl-carousel');
       if ($(this).hasClass('btn-prev')) {
           path.find('.owl-prev').click();
       } else if ($(this).hasClass('btn-next')) {
           path.find('.owl-next').click();
       }
    })

});

function openMobileMenu() {
    setTimeout( function () {
        $('.navigation-mobile').addClass('open');
    }, 10);
}

function closeMobileMenu() {
    $('.navigation-mobile').removeClass('open');
    $('body').removeClass('overLock');
}
