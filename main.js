const navigation = $('.navigation');
const navUp = $('.navigation-up');


$(document).ready(function(){

    $('#exit').click(function(){
        if($('.menu-wrapper').css('visibility') == 'visible'){
            $('.menu-wrapper').css('visibility', 'hidden')
            if($('.menu-wrapper').css('visibility') == 'hidden'){
                $('html, body').css({
                    overflow: '',
                    height: ''
                });
            }
        }
    });

    $('#burger-menu').click(function(){
        if($('.menu-wrapper').css('visibility') == 'hidden'){
            $('.menu-wrapper').css('visibility', 'visible')
            if($('.menu-wrapper').css('visibility') == 'visible'){
                $('html, body').css({
                    overflow: 'hidden',
                    height: '100%'
                });
            }
        } 
    });

});

$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#nav').addClass('shadow__nav');
        if(navigation.css('visibility') == 'hidden'){
            navUp.css('visibility', 'hidden');
        } else {
            navUp.css('visibility', 'visible');
        }
    } else {
        $('#nav').removeClass('shadow__nav');
        navUp.css('visibility', 'hidden');
    }
});