//Scroll to top
$(window).scroll(function () {
  if ($(this).scrollTop() >= 500) {
    $('#return-to-top').fadeIn(300);
  } else {
    $('#return-to-top').fadeOut(300);
  }
});
$('#return-to-top').click(function () {
  $('body,html').animate(
    {
      scrollTop: 0,
    },
    500
  );
});

//Swiper
$('.swiper-slider').each(function () {
  let nextButton = $(this).find('.slide-button-next')[0];
  let prevButton = $(this).find('.slide-button-prev')[0];
  let pagination = $(this).find('.slide-pagination')[0];
  var test = new Swiper(this, {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    observer: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetweenSlides: 15,
      },
    },
  });
});

//Swiper filter
let listTab = document.querySelectorAll('.tablist');

listTab.forEach(function (tab) {
  tab.addEventListener('click', function () {
    $('.tablist').removeClass('active');
    $(this).addClass('active');
    let id = tab.getAttribute('data-filter');
    $('.wrap-slider .tab').removeClass('tab-active');
    $('.wrap-slider .check' + id).addClass('tab-active');
  });
});

var typeRoomSlider = new Swiper('.slider-typeroom', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.3,
    },
  },
});

var typeRoomSlider2 = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var RoomHome = new Swiper('.swiper-roomsuite', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.2,
    },
  },
});

//Menu mobile
$('.hamburger-btn').click(function (e) {
  e.stopPropagation();
  $(this).addClass('active');
  $('.main-menu').addClass('active');
});
$('html').click(function () {
  $('.hamburger-btn').removeClass('active');
  $('.main-menu').removeClass('active');
});


//Tab list Gallery
$('.list-cato .tab').click(function (e) {
  $('.list-cato .tab').removeClass('active');
  $(this).addClass('active');
  let id = $(this).attr('data-tab');
  $('.tablist').removeClass('active');
  $('.' + id).addClass('active');
});
//Tab list type Room
$('.list-type .tab-t').click(function (e) {
  $('.list-type .tab-t').removeClass('active');
  $(this).addClass('active');
  let id = $(this).attr('data-tab');
  $('.tablist-t').removeClass('active');
  $('.' + id).addClass('active');
});

$(document).ready(function () {
  $('.lightgallery').lightGallery({
    selector: '.item',
  });
});
//Tab list facilities
$('.list-type .tab-f').click(function (e) {
  $('.list-type .tab-f').removeClass('active');
  $(this).addClass('active');
  let id = $(this).attr('data-tab');
  $('.tablist-f').removeClass('active');
  $('.' + id).addClass('active');
});

$(document).ready(function () {
  $('.lightgallery').lightGallery({
    selector: '.item',
  });
});

