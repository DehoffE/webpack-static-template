!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(26),n(27),n(28),n(29),n(30)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){var n=document.querySelector(".burger"),o=document.querySelector(".dropdown-menu-wrap"),l=o.querySelector(".dropdown-menu"),c=l.querySelector(".dropdown-menu__close");n.addEventListener("click",function(){o.classList.add("dropdown-menu-wrap--open"),setTimeout(function(){l.classList.add("dropdown-menu--open")},10)}),c.addEventListener("click",function(){l.classList.remove("dropdown-menu--open"),setTimeout(function(){o.classList.remove("dropdown-menu-wrap--open")},50)}),document.addEventListener("keydown",function(e){27===e.keyCode&&(l.classList.remove("dropdown-menu--open"),setTimeout(function(){o.classList.remove("dropdown-menu-wrap--open")},50))}),o.addEventListener("click",function(e){e.path[0]===o&&(l.classList.remove("dropdown-menu--open"),setTimeout(function(){o.classList.remove("dropdown-menu-wrap--open")},50))})},function(e,t){var n=document.querySelector(".slider"),o=document.querySelector(".tech-slider"),l=document.querySelector(".price-slider"),c=document.querySelector(".nav-slider");function i(e){var t=+parseInt(window.getComputedStyle(e.firstElementChild.firstElementChild).width)+ +parseInt(window.getComputedStyle(e.firstElementChild.firstElementChild).marginRight),n=document.createElement("div");n.classList.add("controls");for(var o=0;o<e.firstElementChild.children.length;o++){var l=document.createElement("div");l.classList.add("control"),0===o&&l.classList.add("control--active"),l.onclick=function(n,o){return function(){e.querySelector(".control--active").classList.remove("control--active"),o.classList.add("control--active"),e.firstElementChild.style.left=-t*n+"px"}}(o,l),n.appendChild(l)}e.appendChild(n)}function r(e){var t=+parseInt(window.getComputedStyle(e.firstElementChild.firstElementChild).width)+ +parseInt(window.getComputedStyle(e.firstElementChild.firstElementChild).marginRight);e.firstElementChild.onmousedown=function(n){""==e.firstElementChild.style.left&&(e.firstElementChild.style.left=0);var o=+parseInt(e.firstElementChild.style.left);e.firstElementChild.onmousemove=function(n){e.firstElementChild.style.left=+parseInt(e.firstElementChild.style.left)+n.movementX+"px",document.onmouseup=function(){e.firstElementChild.classList.add("slider__list--animate"),e.firstElementChild.onmousemove=null;var n=+parseInt(e.firstElementChild.style.left),l=o-n;o-l>0||o-l<(e.firstElementChild.children.length-1)*-t?e.firstElementChild.style.left=o+"px":l>-t/2&&l<t/2?e.firstElementChild.style.left=o+"px":l<-t/2?(e.firstElementChild.style.left=o- -t+"px",e.querySelector(".control--active").classList.remove("control--active"),e.querySelectorAll(".control")[o/t*-1-1].classList.add("control--active")):l>t/2&&(e.firstElementChild.style.left=o-t+"px",e.querySelector(".control--active").classList.remove("control--active"),e.querySelectorAll(".control")[o/t*-1+1].classList.add("control--active")),setTimeout(function(){e.firstElementChild.classList.remove("slider__list--animate")},300)}}}}i(n),i(o),i(l),r(n),r(o),r(l),r(c)},function(e,t){for(var n=document.querySelector(".callback-modal-wrap"),o=n.querySelector(".callback-modal"),l=document.querySelectorAll(".social-btns__button--type_call"),c=o.querySelector(".callback-modal__close"),i=0;i<l.length;i++)l[i].addEventListener("click",function(e){e.preventDefault(),n.classList.add("callback-modal-wrap--open"),setTimeout(function(){o.classList.add("callback-modal--open")},10),o.querySelector(".callback-form__phone-number").focus()});c.addEventListener("click",function(e){o.classList.remove("callback-modal--open"),setTimeout(function(){n.classList.remove("callback-modal-wrap--open")},250)}),document.addEventListener("keydown",function(e){27===e.keyCode&&(o.classList.remove("callback-modal--open"),setTimeout(function(){n.classList.remove("callback-modal-wrap--open")},250))}),n.addEventListener("click",function(e){e.path[0]===n&&(o.classList.remove("callback-modal--open"),setTimeout(function(){n.classList.remove("callback-modal-wrap--open")},50))})},function(e,t){for(var n=document.querySelector(".feedback-modal-wrap"),o=n.querySelector(".feedback-modal"),l=document.querySelectorAll(".social-btns__button--type_mail"),c=o.querySelector(".feedback-modal__close"),i=0;i<l.length;i++)l[i].addEventListener("click",function(e){e.preventDefault(),n.classList.add("feedback-modal-wrap--open"),setTimeout(function(){o.classList.add("feedback-modal--open")},10),o.querySelector(".feedback-form__name").focus()});c.addEventListener("click",function(e){o.classList.remove("feedback-modal--open"),setTimeout(function(){n.classList.remove("feedback-modal-wrap--open")},250)}),document.addEventListener("keydown",function(e){27===e.keyCode&&(o.classList.remove("feedback-modal--open"),setTimeout(function(){n.classList.remove("feedback-modal-wrap--open")},250))}),n.addEventListener("click",function(e){e.path[0]===n&&(o.classList.remove("feedback-modal--open"),setTimeout(function(){n.classList.remove("feedback-modal-wrap--open")},50))})}]);
//# sourceMappingURL=bundle.js.map