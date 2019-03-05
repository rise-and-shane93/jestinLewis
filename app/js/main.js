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

//navbar hover stuff
const $navLink = $('.nav-link');
const $mainLink = $('.mainLinkName');
const $subLink = $('.subLinkName');
$mainLink.css('color', 'red');
$subLink.css('color', 'blue');

$navLink.mouseover(function() {
    $mainLink.css('color', 'blue');
    $subLink.css('color', 'red');
});

$navLink.mouseout(function() {
    $mainLink.css('color', 'red');
    $subLink.css('color', 'blue');
});