//play/pause carousel
var $pausePlay = $('.pausePlay');
var $pause = $('.fa-pause');
var $play = $('.fa-play');
var $lewisVideo = $('#lewisVideo');
$play.hide();

$pausePlay.click(function() {
    if($(this).hasClass('fa-pause')) {
        $lewisVideo.trigger('pause');
        //$play.css('z-index', '12'); 
        // $pause.css('display', 'none');
        // $play.css('display', 'block'); 
        $pause.hide();
        $play.show();
    } else {
        $lewisVideo.trigger('play');
        //$play.css('z-index', '10');  
        // $play.css('display', 'none');
        // $pause.css('display', 'block');  
        $play.hide();
        $pause.show();
    }
});

//sets the navbar based on user agent
var navbar = document.querySelector('.navbar');

if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        //|| navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("bg-light", "navbar-light");
        //navbar.classList.add("navbar-light");
    } else {
        navbar.classList.remove("bg-light");
    }