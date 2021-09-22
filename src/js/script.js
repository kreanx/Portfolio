document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    const counters = document.querySelectorAll('.skills__item-percent'),
        lines = document.querySelectorAll('.skills__item-top');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });



});

$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        // $('#consultation, #order').fadeOut();
        // $('.overlay, #thanks').fadeIn('slow');

        // $('form').trigger('reset');
    });
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('.hamburger span').css('background-color', 'black');
    } else {
        $('.hamburger span').css('background-color', 'white');
    }
});
