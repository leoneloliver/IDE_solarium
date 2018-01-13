$('.code_tab2, .code-tab3, #terminal').hide();

$('.tab1').on('click', function(){
  $(this).removeClass('transp');
  $('.code_tab1').fadeIn();
  $('.tab1, .tab2, .tab3').removeClass('active');
  $('.tab1').addClass('active');
  $('.code_tab2, .code_tab3').hide();
});
$('.tab2').on('click', function(){
  $(this).removeClass('transp');
  $('.code_tab2').fadeIn();
  $('.tab1, .tab2, .tab3').removeClass('active');
  $('.tab2').addClass('active');
  $('.code_tab1, .code_tab3').hide();
});
$('.tab3').on('click', function(){
  $(this).removeClass('transp');
  $('.code_tab3').fadeIn();
  $('.tab1, .tab2, .tab3').removeClass('active');
  $('.tab3').addClass('active');
  $('.code_tab1, .code_tab2').hide();
});

$('#terminal .terminal__btn').on('click', function(){
   $('#terminal').fadeOut();
   $('#terminal-footer').fadeIn();
});
$('#terminal-footer .terminal__btn').on('click', function(){
   $('#terminal').fadeOut();
   $('#terminal-footer').fadeOut();
});
$('.model__tools li').on('click', function(){
   var service = $('.tip',this).text();
   $('#terminal').fadeIn();
   $('.terminal__header span').text(service);
});

window.setTimeout(function(){
   $('.code_tab1, .code_tab2, .code-tab3, #terminal').removeClass('hide');
},2000);


$('.model__header i').each(function(i){
  $(this).on('click', function(){
    $(this).addClass('hide');
    $('.model__tab').eq(i).addClass('hide');
    $('.tab1, .tab2, .tab3').removeClass('active');
    $('.code_tab1, .code_tab2, .code_tab3').hide();
  });
});


$('.model__file').each(function(i){
  $(this).on('click', function(){
    $('.model__tab').eq(i).removeClass('hide');
    $('.model__header i').eq(i).removeClass('hide');
    
  });
});

$('#login .terminal__btn').on('click', function(){
   $('#login').fadeOut();
});

$('.ide__header').on('click', function(){
  $('#login').fadeIn();
});

$('.folder').on('click', function(){
  $('.model__files ul').slideToggle();
});

var checkEmail = function(){
  $('#login, #terminal-footer').fadeOut();
  $('#terminal').fadeIn();
  
  $('.error').text('Error. Please contact the adminstrator: leoneloliver@gmail.com');
  $('.terminal__header span').text('Login Error');
  return false;
}
