$(function(){

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        cssEase: 'linear',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/previous.svg" alt="prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next"></button>',
      });
      $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 4,
            arrows: false
          }
        },
        {
            breakpoint: 630,
            settings: {
              slidesToShow: 3,
            }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 330,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });// $('.slider__inner').slick({



      // Нажатие на кнопку меню
    $('.header__menu-btn').on('click', function(){
      //console.log('test');
      $('.header__menu > ul').slideToggle(); // Только первая ul открывается
    });
    // Крестик вместо линий
    const toggle = document.getElementById('toggle');
    toggle.onclick = function(){
        toggle.classList.toggle('active');
    }

  // $('.header__drop-down.drop-down').on('click', function(){
  //     $(this).children('.drop-down__list').toggleClass('active'); // Клик по конкретному элементу next a + , children
  //     // .toggleClass('active') Добавляет класс active при нажатии
  //     $(this).children('.drop-down__link').toggleClass('active'); // Клик по конкретному элементу next a + , children
  // });




});