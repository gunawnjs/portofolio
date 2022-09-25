    // Template
    $('a[href^="#"]').click(function(event) {
        let id = $(this).attr("href");
        let offset = 10;
        let target = $(id).offset().top - offset;
        $('html, body').animate({scrollTop:target}, 500);
        event.preventDefault();
    });

    $(function() {  
        let pull        = $('#pull');  
            menu        = $('nav ul');  
            menuHeight  = menu.height();  
        
        $(pull).on('click', function(e) {  
            e.preventDefault();  
                menu.slideToggle();  
            });  
        });

    $(window).resize(function(){  
        let w = $(window).width();  
        if(w > 400 && menu.is(':hidden')) {  
            menu.removeAttr('style');  
        }  
        });
    // end of template
    $(document).ready(function(){
        $('button').click(function(){
        $('.menu').toggle(300, function(){
            if($('.menu').css('display') == 'block'){
                $('nav').addClass('shadow__nav');
            } else {
                $('nav').removeClass('shadow__nav');
            }
        });
        });
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('#nav').addClass('shadow__nav');
        } else {
            $('#nav').removeClass('shadow__nav');
        }
    });