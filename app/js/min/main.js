"use strict";var $pausePlay=$(".pausePlay"),$pause=$(".fa-pause"),$play=$(".fa-play"),$lewisVideo=$("#lewisVideo");$play.hide(),$pausePlay.click(function(){$(this).hasClass("fa-pause")?($lewisVideo.trigger("pause"),$pause.hide(),$play.show()):($lewisVideo.trigger("play"),$play.hide(),$pause.show())});var navbar=document.querySelector(".navbar");navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?(navbar.classList.remove("navbar-dark"),navbar.classList.add("bg-light","navbar-light")):navbar.classList.add("navbar-dark");var aboutImg=document.querySelector(".tuRandomImg"),tuImagesPort=["images/jestin/portrait/jLewPort1.jpg","images/jestin/portrait/jLewPort2.jpg","images/jestin/portrait/jLewPort3.jpg","images/jestin/portrait/jLewPort4.jpg","images/jestin/portrait/jLewPort5.jpg","images/jestin/portrait/jLewPort6.jpg","images/jestin/portrait/jLewPort7.jpg","images/jestin/portrait/jLewPort8.jpg","images/jestin/portrait/jLewPort9.jpg"],tuImagesLand=["images/jestin/landscape/jLewLand1.jpg","images/jestin/landscape/jLewLand2.jpg","images/jestin/landscape/jLewLand3.jpg","images/jestin/landscape/jLewLand4.jpg","images/jestin/landscape/jLewLand5.jpg","images/jestin/landscape/jLewLand6.jpg","images/jestin/landscape/jLewLand7.jpg"];function getRandomImageAbout(){var b,a=Math.floor,c="<img alt=\"An image of Jestin Lewis.\" class=\"img-fluid\" src=\"";return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?(b=a(Math.random()*tuImagesLand.length),c+=tuImagesLand[b]):(b=a(Math.random()*tuImagesPort.length),c+=tuImagesPort[b]),c+="\">",c}aboutImg.innerHTML=getRandomImageAbout();var height,$gallerySection=$("#gallery"),$galleryInner=$(".photo-gallery"),$galleryButton=$("#galleryButton"),$closeButton=$(".closeWindow"),$campInfo=$("#camp"),$blackArrow=$(".arrow-up"),$camp=$("#camp"),$campCont=$("#camp .container");navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?(height="1300px",$camp.addClass("py-2"),$campCont.addClass("py-2")):(height="1000px",$camp.addClass("py-5"),$campCont.addClass("py-5")),$(document).ready(function(){$gallerySection.css("height","0"),$galleryInner.hide(),$blackArrow.hide()}),$galleryButton.click(function(){$blackArrow.fadeIn(),$gallerySection.animate({height:height},1e3),$("html, body").animate({scrollTop:$gallerySection.offset().top},1e3),$galleryInner.delay(1e3).fadeIn(1500)}),$closeButton.click(function(){$galleryInner.fadeOut().delay(500),$("html, body").animate({scrollTop:$campInfo.offset().top},1e3),$gallerySection.animate({height:"0px"},1e3),$blackArrow.fadeOut()});