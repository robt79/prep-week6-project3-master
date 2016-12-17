/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1
$('.changeColor').click(function(){
  $('ul li:nth-child(3)').css('color', '#8A2BE2');
});




// Question #2
$('ul li:nth-child(4)').click(function() {
  $('this').append('<li>hi</li>');

});


// Question #3
$('#removeLi').click(function() {
  $('ul li:nth-child(2)').hide();


});


// Question #4
$('ul li:last-child').click(function() {
  $('ul li:nth-last-child(n+2)').hide();
  $(this).css('font-size', '40px');
});


// Question #5
$('.cute').click(function() {
  $(this).clone().appendTo($('.clones'));

});


  // Question #6
  $('html').dblclick(function(){
    $('#makeSquare').css('border-radius', '0px');
    var sqWidth = $('#makeSquare').css('width');
    $('#makeSquare').css('height', sqWidth);
  })



// Question #7
$('.black').click(function(){
  $('html').css('background-image', 'none');
  $('html').css('background-color', '#000');
  $('p').css('color', '#fff');
});

$('.wood').click(function(){
  var background = $('.wood').css('background-image');
  $('html').css('background-image', background);
  $('p').css('color', '#fff');
});

$('.chaos').click(function(){
  var background = $('.chaos').css('background-image');
  $('html').css('background-image', background);
  $('p').css('color', 'yellow');
})

$('.restore').click(function(){
  $('html').css('background-image', 'none');
  $('html').css('background-color', '#fff');
  $('p').css('color', '#000');
});



  // Question #8
  $('#hover').hover(function(){
    $(this).css('background-color', 'red');
  }, function(){
    $(this).css('background-color', '#39B7CD');
  });

  $('#hover').click(function(){
    $(this).toggleClass('green');
  });




});
