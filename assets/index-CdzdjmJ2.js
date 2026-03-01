(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();function v(e){e.innerHTML=`
    <div id="boot">
      <div class="boot-lines">
        <p id="line1"></p>
        <p id="line2"></p>
        <p id="line3"></p>
        <p id="line4" class="success"></p>
      </div>

      <button id="boot-btn" class="boot-button">
        ▶ PRESS ENTER
      </button>
    </div>
  `;const t=()=>{location.hash="#/menu",document.removeEventListener("keydown",s)},s=i=>{i.key==="Enter"&&t()};function o(i,a,u=30){return new Promise(m=>{let d=0;i.textContent="";function p(){d<a.length?(i.textContent+=a[d],d++,setTimeout(p,u)):m()}p()})}async function n(){await o(document.getElementById("line1"),"Initializing system..."),await o(document.getElementById("line2"),"Loading profile data..."),await o(document.getElementById("line3"),"Preparing experience..."),await o(document.getElementById("line4"),"System Ready."),document.getElementById("boot-btn").classList.add("show")}n(),document.addEventListener("keydown",s),document.getElementById("boot-btn").addEventListener("click",t)}const r=["about","skills","projects","contact"];let c=0;function g(e){l(e);function t(s){s.key==="ArrowDown"&&(c=(c+1)%r.length,l(e)),s.key==="ArrowUp"&&(c=(c-1+r.length)%r.length,l(e)),s.key==="Enter"&&(location.hash=`#/${r[c]}`,document.removeEventListener("keydown",t))}document.addEventListener("keydown",t)}function l(e){e.innerHTML=`
    <div id="menu">
      ${r.map((t,s)=>`<p>${s===c?">":"&nbsp;"} ${t.toUpperCase()}</p>`).join("")}
    </div>
  `}function f(e){e.innerHTML=`
    <section class="retro-about">

      <div class="portrait-box">
        <img src="/images/portrait.png" alt="Pixel David">
      </div>

      <div class="info-box">
        <h1>KRISTOFORUS DAVID RENALDY</h1>
        <p class="role">Software Engineer</p>
        <p class="sub-role"> Web Developer - Backend Developer</p>

        <div class="description">
          <p>> Building modern web applications</p>
          <p>> Clean architecture enthusiast</p>
          <p>> Loves reactive systems</p>
        </div>

        <div class="techstack">
          <div class="tech">
            <img src="/icons/laravel-pixelated.png" alt="Laravel">
            <span>Laravel</span>
          </div>
          <div class="tech">
            <img src="/icons/livewire-pixelated.png" alt="Livewire">
            <span>Livewire</span>
          </div>
          <div class="tech">
            <img src="/icons/tailwind-pixelated.png" alt="Tailwind">
            <span>Tailwind</span>
          </div>
          <div class="tech">
            <img src="/icons/rabbitmq-pixelated.png" alt="RabbitMQ">
            <span>RabbitMQ</span>
          </div>
          <div class="tech">
            <img src="/icons/redis-pixelated.png" alt="Redis">
            <span>Redis</span>
          </div>
          <div class="tech">
            <img src="/icons/mysql-pixelated.png" alt="MySQL">
            <span>MySQL</span>
          </div>
          <div class="tech">
            <img src="/icons/vite-pixelated.png" alt="Vite">
            <span>Vite</span>
          </div>
          <div class="tech">
            <img src="/icons/vue-pixelated.png" alt="Vue">
            <span>Vue.js</span>
          </div>
        </div>

        <p class="back-hint">Press ESC to go back</p>
      </div>

    </section>
  `;const t=s=>{s.key==="Escape"&&(location.hash="#/menu",document.removeEventListener("keydown",t))};document.addEventListener("keydown",t)}const h={about:f};function y(e){const t=location.hash.replace("#/",""),s=h[t];s&&(e.innerHTML="",s(e))}function b(){const e=document.getElementById("app");v(e),window.addEventListener("hashchange",()=>{location.hash.replace("#/","")==="menu"?g(e):y(e)})}b();
