!function(e){"use strict";function r(e,r,o){if(e>=o)return 0;if(o>=r)return 1;var n=(o-e)/(r-e);return n*n*(3-2*n)}var o=e.querySelector("#app");o.displayInstalledToast=function(){e.querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Hello, folks! It is Hoverboard by GDG Lviv. Contact Oleh Zasadnyy for more details.")}),window.addEventListener("WebComponentsReady",function(){}),o.onMenuSelect=function(){var r=e.querySelector("#paperDrawerPanel");r.narrow&&r.closeDrawer()},o.findByPropertyValue=function(e,r,o){for(var n=0;n<e.length;n++)if(e[n][r]==o)return e[n]},o.scrollToTop=function(){for(var r=e.querySelectorAll("#hero"),n=r.length-1;n>=0;n--)o.smoothScroll(r[n],1e3)},o.generateClass=function(e){return e.replace(/\s+/g,"-").toLowerCase()},o.smoothScroll=function(o,n,t){var a=n||1,l=e.querySelector("paper-drawer-panel [main]"),c=window.performance.now(),i=c+a,u=l.scrollTop,s=o.getBoundingClientRect().top;if(0===s)return void(t&&t());var f=function(e){i>e&&requestAnimationFrame(f);var o=r(c,i,e),n=Math.round(u+s*o);l.scrollTop=n,1===o&&t&&t()};f(c)}}(document);