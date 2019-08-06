//URL redirect
// if (location.protocol != 'https:') {
// 	location.href= 'https:' + window.location.href.substring(window.location.protocol.length);
// }

//add fixed-top class to navbar on scroll

$(document).ready(function() {
  var $navbar = $("#mainNav");
  var $spacer = $(".spacer");
  var $body = $("body");
  var height;
  
  AdjustHeader(); // Incase the user loads the page from halfway down (or something);
  $(window).scroll(function() {
      AdjustHeader();
  });

  if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
        height = "83px";
    } else {
        height = "91px"
    }
  
  function AdjustHeader(){
    if ($(window).scrollTop() > 200) {
      if (!$navbar.hasClass("fixed-top")) {
        $navbar.addClass("fixed-top");
        $body.css("padding-top" , height);
        if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
            $navbar.css({
                "background" : "none"
            });
            
            console.log('mobile');
        } else {
            $navbar.css({
                "background" : "url('../images/dark-texture-bkg.jpg')",
                "background-size" : "cover"
            });
        }
        // $navbar.css({
        //     "background" : "url('../images/dark-texture-bkg.jpg')",
        //     "background-size" : "cover"
        // });
      }
    } else {
      $navbar.removeClass("fixed-top");
      $body.css("padding-top" , "0")
    }
  }
});

//smooth scroll on clicking nav links
const $navbarLinks = $(".navbar-nav a");

$navbarLinks.click(function(event) {
    if ($(this).hasClass("homeLink")) {
        $("html, body").animate({
        scrollTop: $(".jumbotron").offset().top - 90
        }, 1000);
    } else if ($(this).hasClass("aboutMeLink")) {
        $("html, body").animate({
        scrollTop: $("#about").offset().top - 90
        }, 1000);
    } else if ($(this).hasClass("summerCampLink")) {
        $("html, body").animate({
        scrollTop: $("#camp").offset().top - 90
        }, 1000);
    } else if ($(this).hasClass("shopLink")) {
        $("html, body").animate({
        scrollTop: $("#shop").offset().top - 90
        }, 1000);
    } else {
        $("html, body").animate({
        scrollTop: $("#contact").offset().top - 90
        }, 1000);
    }
});

//changes the active class on page scroll
var $homeLink = $(".homeLink").offset();
var $aboutMeLink = $("#aboutTitle").offset();
var $summerCampLink = $("#camp").offset();
var $shopLink = $("#shop").offset();
var $contactLink = $("#contact").offset();

$(document).on("scroll", onScroll);

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 125;
    
    $('.navbar-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

//play/pause carousel
var $pausePlay = $('.pausePlay');
var $pause = $('.fa-pause');
var $play = $('.fa-play');
var $lewisVideo = $('#lewisVideo');
$play.hide();

$pausePlay.click(function() {
    if($(this).hasClass('fa-pause')) {
        $lewisVideo.trigger('pause');
        $pause.hide();
        $play.show();
    } else {
        $lewisVideo.trigger('play');
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

//opens/closes the photo gallery and adds the py class to the camp section
const $gallerySection = $("#gallery");
const $galleryInner = $(".photo-gallery");
const $galleryButton = $('#galleryButton');
const $closeButton = $(".closeWindow");
const $campInfo = $("#camp");
const $blackArrow = $(".arrow-up");
const $camp = $("#camp");
const $campCont = $("#camp .container");
var height;

if ( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
) {
    height = "1300px";
    $camp.addClass("py-2");
    $campCont.addClass("py-2");
} else { 
    height = "1000px";
    $camp.addClass("py-5");
    $campCont.addClass("py-5");
}


$(document).ready(function() {
    $gallerySection.css("height", "0");
    $galleryInner.hide();
    $blackArrow.hide();
});

$galleryButton.click(function() {
    $blackArrow.fadeIn();
    $gallerySection.animate({height: height}, 1000);
    $("html, body").animate({
        scrollTop: $gallerySection.offset().top
        }, 1000);
    $galleryInner.delay(1000).fadeIn(1500);
});

$closeButton.click(function() {
    $galleryInner.fadeOut().delay(500);
    $("html, body").animate({
        scrollTop: $campInfo.offset().top
        }, 1000);
    $gallerySection.animate({height: "0px"}, 1000);
    $blackArrow.fadeOut();
});

//sets the iframe height depending on screen size
const iframe = document.querySelector("iframe");

if ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
    iframe.setAttribute("height", "450");
} else {
    iframe.setAttribute("height", "600");
}

/*copies email address on click
and has span hovering in and out of view*/

const email = document.querySelector("#emailAddress");
const $email = $("#emailAddress");
const clickToCopy = document.querySelector(".clickToCopy");
const clickOrTap = document.querySelector(".clickOrTap");

if ( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
) {
    //$email.attr("title", "Click to Copy");
    clickOrTap.textContent = "Tap";
} else {
    //$email.attr("title", "Click to Copy");
    clickToCopy.style.display = "none";
    //clickToCopy.style.opacity = "0";
    clickOrTap.textContent = "Click";
    $("#emailAddress").hover(function() {
        $(".clickToCopy").show();
        //$(".clickToCopy").animate({opacity: 1}, 800);
    }, function() {
        //$(".clickToCopy").animate({opacity: 0}, 800);
        $(".clickToCopy").hide();
    });     
}

email.onclick = function() {
  document.execCommand("copy");
}

email.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", email.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});

$("#emailAddress").click(function() {
    clickToCopy.textContent = "Copied!";
});

