(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();$(document).ready(function(){$(".slider").slick({slidesToShow:1,slidesToScroll:2,infinite:!0,centerMode:!0,centerPadding:"85px"})});$(".details-slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" class="btn-to-left"></button>',nextArrow:'<button type="button" class="btn-to-right"></button>'});$(document).ready(function(){const i=$(".open-modal-btn"),o=$(".modal"),n=$(".close"),s=$("body");i.on("click",function(){const e=$(this).data("modal-target"),t=$("#"+e),l=$(".modal-content",t);t.css("display","block"),s.css("overflow","hidden"),l.removeClass("hide").addClass("show")}),n.on("click",function(){const e=$(this).data("modal-target"),t=$("#"+e),l=$(".modal-content",t);s.css("overflow","auto"),l.removeClass("show").addClass("hide"),setTimeout(function(){t.css("display","none")},400)}),o.on("click",function(e){e.target===this&&($(".modal-content",$(this)).removeClass("show").addClass("hide"),setTimeout(function(){$(this).css("display","none")}.bind(this),400))})});var d,c,m,g,p,r,a,u,f;d=document.getElementsByClassName("custom-select");g=d.length;for(c=0;c<g;c++){for(r=d[c].getElementsByTagName("select")[0],p=r.length,a=document.createElement("DIV"),a.setAttribute("class","select-selected"),a.innerHTML=r.options[r.selectedIndex].innerHTML,d[c].appendChild(a),u=document.createElement("DIV"),u.setAttribute("class","select-items select-hide"),m=1;m<p;m++)f=document.createElement("DIV"),f.innerHTML=r.options[m].innerHTML,f.addEventListener("click",function(i){var o,n,s,e,t,l,h;for(e=this.parentNode.parentNode.getElementsByTagName("select")[0],l=e.length,t=this.parentNode.previousSibling,n=0;n<l;n++)if(e.options[n].innerHTML==this.innerHTML){for(e.selectedIndex=n,t.innerHTML=this.innerHTML,o=this.parentNode.getElementsByClassName("same-as-selected"),h=o.length,s=0;s<h;s++)o[s].removeAttribute("class");this.setAttribute("class","same-as-selected");break}t.click()}),u.appendChild(f);d[c].appendChild(u),a.addEventListener("click",function(i){i.stopPropagation(),y(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function y(i){var o,n,s,e,t,l=[];for(o=document.getElementsByClassName("select-items"),n=document.getElementsByClassName("select-selected"),e=o.length,t=n.length,s=0;s<t;s++)i==n[s]?l.push(s):n[s].classList.remove("select-arrow-active");for(s=0;s<e;s++)l.indexOf(s)&&o[s].classList.add("select-hide")}document.addEventListener("click",y);