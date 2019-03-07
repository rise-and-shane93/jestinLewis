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
        //navbar.classList.remove("bg-light");
        navbar.classList.add("navbar-dark");
    }

//sets random image on about section
const aboutImg = document.querySelector('.tuRandomImg');

//Adena random image selector

//for large screens (Portrait)
var tuImagesPort = [
    "images/jestin/portrait/jLewPort1.jpg",
    "images/jestin/portrait/jLewPort2.jpg",
    "images/jestin/portrait/jLewPort3.jpg",
    "images/jestin/portrait/jLewPort4.jpg",
    "images/jestin/portrait/jLewPort5.jpg",
    "images/jestin/portrait/jLewPort6.jpg",
    "images/jestin/portrait/jLewPort7.jpg",
    "images/jestin/portrait/jLewPort8.jpg",
    "images/jestin/portrait/jLewPort9.jpg"
];

//for small screens (Landscape)
var tuImagesLand = [
    "images/jestin/landscape/jLewLand1.jpg",
    "images/jestin/landscape/jLewLand2.jpg",
    "images/jestin/landscape/jLewLand3.jpg",
    "images/jestin/landscape/jLewLand4.jpg",
    "images/jestin/landscape/jLewLand5.jpg",
    "images/jestin/landscape/jLewLand6.jpg",
    "images/jestin/landscape/jLewLand7.jpg"
];

function getRandomImageAbout() {
    var img = '<img alt=\"An image of Jestin Lewis.\" class=\"img-fluid\" src=\"';
    var randomImg;
    if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
        // dailyQuote.innerHTML = getRandomQuote();
        randomImg = Math.floor(Math.random() * tuImagesLand.length);
        img += tuImagesLand[randomImg];
    } else { 
        randomImg = Math.floor(Math.random() * tuImagesPort.length);
        img += tuImagesPort[randomImg];
    }
    img += '\">';
    return img;
}; 

aboutImg.innerHTML = getRandomImageAbout();