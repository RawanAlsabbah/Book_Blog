$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 100){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    /*Slide up script */
    $('.scroll-up-btn').click(function(){
        $('html').scrollTop(0);
    

    });
    $('.fa-smile-beam').click(function(){
        $(this).addClass('like');
        alert("Thank you *-*");
    });

    $('.fa-frown').click(function(){
        $(this).addClass('dislike');
        alert("Sorry for that we listen to you");
    });

});  