"use strict";(function(){function a(){var a=document.createElement("script");a.async=!0,a.src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a),a.onload=b}function b(){var a=ShopifyBuy.buildClient({domain:"jl5-clothing-co.myshopify.com",storefrontAccessToken:"3a7c1b87f722d4126c544c741ac1e52e"});ShopifyBuy.UI.onReady(a).then(function(a){a.createComponent("product",{id:[1925933105198],node:document.getElementById("product-component-2ae42e6f614"),moneyFormat:"%24%7B%7Bamount%7D%7D",options:{product:{variantId:"all",contents:{imgWithCarousel:!1,variantTitle:!1,description:!1,buttonWithQuantity:!1,quantity:!1},styles:{product:{"@media (min-width: 601px)":{"max-width":"calc(25% - 20px)","margin-left":"20px","margin-bottom":"50px"}}}},cart:{contents:{button:!0},styles:{footer:{"background-color":"#ffffff"}}},modalProduct:{contents:{img:!1,imgWithCarousel:!0,variantTitle:!1,buttonWithQuantity:!0,button:!1,quantity:!1},styles:{product:{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},productSet:{styles:{products:{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}}})})}window.ShopifyBuy?window.ShopifyBuy.UI?b():a():a()})();