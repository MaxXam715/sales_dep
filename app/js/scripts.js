$(document).ready(function () {
    var modalTarget = '';


    $('.mask-phone').mask('+7 (999) 999-99-99')

    // открыть моб. меню
    $('.header .btn-toggle-menu').click(function () {
        var navHtmlPc = $('.header .navigation').html()
        var html = `
        <div class="navigation-mobile">
            <button class="btn btn-menu-close"><i class="icon close"></i></button>
            <nav>`+navHtmlPc+`</nav>
            <button type="button" class="btn btn-outline-primary btn-callback">Заказать звонок</button>
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

    // открыть контакты из плавающей кнопки
    $('.floating-button .btn-toggle').click(function () {
        $(this).parents('.floating-button').toggleClass('open')
    })

    // Закрыть контакты из плавающей кнопки
    $(document).mouseup( function(e){
        var div = $( ".floating-button" );
        if ( !div.is(e.target) && div.has(e.target).length === 0 && div.hasClass('open') ) {
            $('.floating-button').removeClass('open')
        }
    });

    // якорь
    $(document).on('click', "a[href*='#']", function(e){
        closeMobileMenu()

        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        return false;
    });


    // вызов модального окна
    $(document).on('click', '.btn-callback', function () {
        var $this = $(this);
        var html = `
        <div class="modal-window">
            <div class="modal-container">
        
                <div class="head">
                    <h2 class="title">Форма обратной связи</h2>
                    <p class="desc text-md">Заполните форму и получите выгодное решение</p>
                    <button type="button" class="btn btn-close-modal"><i class="icon close"></i></button>
                </div>
        
                <div class="body-container">
                    <form>
        
                        <label>
                            <span class="title">Ваше Имя</span>
                            <input type="text" placeholder="" class="valid-check" signature="Имя">
                        </label>
        
                        <label>
                            <span class="title">Номер телефона</span>
                            <input type="text" placeholder="+7 (___) ___-__-__" inputmode="numeric" class="mask-phone valid-phone" signature="Телефон">
                        </label>`;

                        if ($this.hasClass('select-user')) {
                            html += `
                            <label>
                                <span class="title">Выбрать специалиста</span>
                                <select signature="Выбор специалиста">
                                    <option value="Елена Гайнулина">Елена Гайнулина</option>
                                    <option value="Олег Князев">Олег Князев</option>
                                    <option value="Анна Фёдорова">Анна Фёдорова</option>
                                    <option value="Ольга Никитина">Ольга Никитина</option>
                                </select>
                            </label>`;
                        }
        
                        html += `
                        <label>
                            <span class="title">Опищите свою ситуацию</span>
                            <textarea signature="Комментарий"></textarea>
                        </label>
                    </form>
                </div>
        
                <div class="footer">
                    <div class="left-col">
                        <form>
                            <label class="privacy-policy">
                                <input type="checkbox" checked signature="Согласие на обработку данных">
                                <span class="title">Я прочитал и согласен с политикой конфиденциальности</span>
                            </label>
                        </form>
                    </div>
                    <div class="right-col">
                        <button type="button" class="btn btn-primary send-form">Оставить заявку</button>
                    </div>
                </div>
        
            </div>
        </div>`;
        $('body').append(html);
        openModalCallBack();
    });



    // *** По таймеру ***
    $(function () {
        modalTarget = 'timer'
        var html = `
        <div class="modal-window">
            <div class="modal-container">
        
                <div class="head">
                    <h2 class="title">Перезвоним вам через 20 секунд</h2>
                    <p class="desc text-md">Заполните форму и получите выгодное предложение</p>
                    <button type="button" class="btn btn-close-modal"><i class="icon close"></i></button>
                </div>
        
                <div class="body-container">
                    <form>
        
                        <label>
                            <span class="title">Ваше Имя</span>
                            <input type="text" placeholder="" class="valid-check" signature="Имя">
                        </label>
        
                        <label>
                            <span class="title">Номер телефона</span>
                            <input type="text" placeholder="+7 (___) ___-__-__" inputmode="numeric" class="mask-phone valid-phone" signature="Телефон">
                        </label>
                        
                    </form>
                </div>
        
                <div class="footer">
                    <div class="left-col">
                        <form>
                            <label class="privacy-policy">
                                <input type="checkbox" checked signature="Согласие на обработку данных">
                                <span class="title">Я прочитал и согласен с политикой конфиденциальности</span>
                            </label>
                        </form>
                    </div>
                    <div class="right-col">
                        <button type="button" class="btn btn-primary send-form">Оставить заявку</button>
                    </div>
                </div>
        
            </div>
        </div>`;

        setTimeout(function () {
            if ( $('.modal-window').length == 0 ) {
                $('body').append(html);
                openModalCallBack();
            }
        }, 20000)
    });

    $(document).on('click', '.modal-window .btn-close-modal', function () {
        closeModalCallBack()
    });

    // Закрыть модальное окно по ESC
    $(document).on('keyup', function(e) {
        if (e.key == "Escape" && $('.modal-window').length > 0 ) {
            closeModalCallBack();
        }
    });

    // Закрыть модальное окно по фону
    $(document).on('mouseup', '.modal-window',function (e) {
        var container = $(this);
        if (container.has(e.target).length === 0){
            closeModalCallBack();
        }
    });






    // валидация формы
    $(document).on('click', '.send-form', function () {
        var countLabel = $(this).parents('form').find('label').length,
            pathLabel = $(this).parents('form').find('label'),
            validation = false,
            completion = 0,
            dataMail = [];

        if ($('.modal-window').length > 0) {
            countLabel = $(this).parents('.modal-container').find('form label').length;
            pathLabel = $(this).parents('.modal-container').find('form label');
        }

        $(pathLabel).each(function (index, elm) {
            var pathInput = $(this).find('input, textarea, select');
            var pattern = /^([a-z0-9_\.-])+[@][a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

            // Проверка полей
            if ( pathInput.hasClass('valid-check') && pathInput.val().length < 1 ) { // проверка на любое слово где > 1 символа
                $(this).find('input, textarea, select').addClass('error-valid');
            } else if ( pathInput.hasClass('valid-phone') && pathInput.val().length < 18 ) { // проверка тел формата +7 (999) 999-99-99
                $(this).find('input').addClass('error-valid');
            } else if ( pathInput.hasClass('valid-email') && !(pattern.test(pathInput.val())) ) { // проверка email типа name@mail.ru
                $(this).find('input').addClass('error-valid');
            } else if ( pathInput.hasClass('valid-checkbox') && !pathInput.prop('checked') ) { // проверка email типа name@mail.ru
                $(this).addClass('error-valid');
            } else {
                validation = true;
                completion++;
                $(this).find('input, textarea, select, label').removeClass('error-valid')
            }

            // сбор данных в JSON
            var question = $(this).find('input, select, textarea').attr('signature');
            var answer = $(this).find('input, select, textarea').val();
            dataMail.push({question: question, answer: answer});
        });
        console.log('dataMail', dataMail)

        // Валидация пройдена и готова отправка формы
        if ( completion === countLabel && validation === true ) {

            console.log('Готово к отправке');
            closeModalCallBack();
            setTimeout(function () {
                if ( modalTarget != 'timer' ) {
                    successModal();
                } else if (modalTarget == 'timer') {
                    successModalTimer();
                }

            }, 500)


            $.ajax({
                url: '/mail/send.php',
                method: 'post',
                dataType: 'json',
                data: {mail:dataMail},
                success: function(response){
                    if(response.result === 'success'){
                        console.log('Отправлено!');
                    } else {
                        alert('нет!!!!')
                    }
                }
            });
        }
    });

    // При клике на элементы формы, убираем выделения об ошибке
    $(document).on('click', 'input, textarea, select, label', function () {
        $(this).removeClass('error-valid');
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



// открыть модальное окно
function openModalCallBack() {
    setTimeout(function () {
        $('.modal-window').addClass('open');
        $('body').addClass('overLock');
    }, 0);
    $('.mask-phone').mask('+7 (999) 999-99-99')
}

// закрыть модальное окно
function closeModalCallBack() {
    $('.modal-window').removeClass('open');
    setTimeout(function () {
        $('.modal-window').remove();
        $('body').removeClass('overLock');
    }, 500)
}


function successModal() {
    var html = `
        <div class="modal-window modal-success">
            <div class="modal-container">
        
                <div class="head" style="text-align: center">
                    <h2 class="title">Заявка отправлена!</h2>
                    <p class="desc text-md" style="margin-top: 15px;">В ближайшее время с Вами свяжется наш специалист</p>
                </div>
        
                <div class="footer">
                    <button type="button" class="btn btn-primary btn-close-modal" style="border-radius: 50px; background-color: #ABABAB; margin: 0 auto">Закрыть</button>
                </div>
        
            </div>
        </div>`;
    $('body').append(html);
    openModalCallBack();
}


function successModalTimer() {
    var html = `
        <div class="modal-window modal-success modal-success-timer">
            <div class="modal-container">
        
                <div class="head" style="text-align: center">
                    <h2 class="title">Заявка отправлена!</h2>
                    <p class="desc text-md" style="margin-top: 15px;">Ожидайте звонок через <span class="timer">20</span> сек.</p>
                </div>
        
                <div class="footer">
                    <button type="button" class="btn btn-primary btn-close-modal" style="border-radius: 50px; background-color: #ABABAB; margin: 0 auto">Закрыть</button>
                </div>
        
            </div>
        </div>`;
    $('body').append(html);
    openModalCallBack();

    var sec = 20;

    setInterval(function() {
        if (sec != -1) {
            $('.modal-success-timer .timer').text(sec--);
        } else {
            return false
        }

    }, 1000);
}