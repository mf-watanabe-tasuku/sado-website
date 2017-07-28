$(function(){

// swiper
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 3000,
    speed: 800,
    grabCursor: true,
    paginationClickable: true,
    pagination: '.swiper-pagination',
    // allowSwipeToPrev: false,
    // allowSwipeToNext: false
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    // scrollbar: '.swiper-scrollbar',
  });

// nav    
  var nav    = $('.nav-wrapper'),
      offset = nav.offset();
  var wrapper = $('main');

  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top - 0) {
      nav.addClass('fixed');
      wrapper.addClass('fff')
    } else {
      nav.removeClass('fixed');
      wrapper.removeClass('fff');
    }
  });

// navToggle

  $('#navToggle').click(function(){
    var $Toggle = $('.navToggleList')
    if($Toggle.hasClass('open')){
      $Toggle.stop().slideUp();
      $Toggle.removeClass('open');
      $('span:nth-child(1)').removeClass('active1');
      $('span:nth-child(2)').removeClass('active2');
      $('span:nth-child(3)').removeClass('active3');
    } else {
      $Toggle.stop().slideDown();
      $Toggle.addClass('open');
      $('span:nth-child(1)').addClass('active1');
      $('span:nth-child(2)').addClass('active2');
      $('span:nth-child(3)').addClass('active3');
    }
  });

  $('#navToggle').click(function(){
    if($())
    $('span:nth-child(1)').addClass('active');
  });

  // nature hover up-down
  $('.leftTop').hover(function(){
    $('.fa1').addClass('bound');
  }, function() {
    $('.fa1').removeClass('bound');
  });

  $('.leftMiddle').hover(function(){
    $('.fa2').addClass('bound');
  }, function() {
    $('.fa2').removeClass('bound');
  });

  $('.leftBottom').hover(function(){
    $('.fa3').addClass('bound');
  }, function() {
    $('.fa3').removeClass('bound');
  });

  $('.rightTop').hover(function(){
    $('.fa4').addClass('bound');
  }, function() {
    $('.fa4').removeClass('bound');
  });

  $('.rightMiddle').hover(function(){
    $('.fa5').addClass('bound');
  }, function() {
    $('.fa5').removeClass('bound');
  });

  $('.rightBottom').hover(function(){
    $('.fa6').addClass('bound');
  }, function() {
    $('.fa6').removeClass('bound');
  });

// nature modal

  $('.leftTop').click(function(){
    $('.nature-modal-wrapper-leftTop').fadeIn();
  });

  $('.leftMiddle').click(function(){
    $('.nature-modal-wrapper-leftMiddle').fadeIn();
  });

  $('.leftBottom').click(function(){
    $('.nature-modal-wrapper-leftBottom').fadeIn();
  });
  
  $('.rightTop').click(function(){
    $('.nature-modal-wrapper-rightTop').fadeIn();
  });

  $('.rightMiddle').click(function(){
    $('.nature-modal-wrapper-rightMiddle').fadeIn();
  });

  $('.rightBottom').click(function(){
    $('.nature-modal-wrapper-rightBottom').fadeIn();
  });

  $('.close-modal').click(function(){
    $('.nature-modal-wrapper').fadeOut();
  });

// food

  $(window).on('load resize', function() {
    var windowWidth = window.innerWidth;
    if (windowWidth > 1023) {
      $('.click-text-change').html('<i class="fa fa-hand-o-down"></i>&emsp;マウスを乗せると説明が現れます&emsp;<i class="fa fa-hand-o-down"></i>');
      $('.food').hover(function(){
        $(this).find('.mask').stop().slideToggle(800);
      });
    } else {
      $('.click-text-change').html('<i class="fa fa-hand-o-down"></i>&emsp;クリックすると説明が現れます&emsp;<i class="fa fa-hand-o-down"></i>');
      $('.food').click(function(){
        $(this).find('.mask').stop().slideToggle(800);
      });
    }
  });

// access 
  $('.route').click(function(){
    $('.fa-chevron-circle-down').removeClass('rotate');
    $('.time-table').slideUp();
    if($('+.time-table',this).css('display') == 'none'){
      $('.fa-chevron-circle-down',this).addClass('rotate');
      $('+.time-table',this).slideDown();
    }
	});

});
