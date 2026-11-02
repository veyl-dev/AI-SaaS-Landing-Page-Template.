(() => {
  const config = window.NEURA_CONFIG || {};
  const pages = [{href:"index.html",label:"Home"},{href:"features.html",label:"Features"},{href:"pricing.html",label:"Pricing"},{href:"about.html",label:"About"},{href:"faq.html",label:"FAQ"}];
  const current = location.pathname.split("/").pop() || "index.html";
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) {
    header.innerHTML = '<header class="site-header wrap"><a class="brand" href="index.html"><span class="brand-mark">✦</span>'+(config.brand || "Neura")+'</a><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button><nav class="nav" aria-label="Main navigation">'+pages.map(p=>'<a href="'+p.href+'" '+(current===p.href?'aria-current="page"':'')+'>'+p.label+'</a>').join("")+'<a class="btn btn-primary header-cta" href="contact.html">Get in touch ↗</a></nav></header>';
    const toggle = header.querySelector(".menu-toggle"), nav = header.querySelector(".nav");
    toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕":"☰";});
  }
  if (footer) footer.innerHTML = '<footer class="site-footer"><div class="wrap"><div class="footer-main"><div class="footer-brand"><a class="brand" href="index.html"><span class="brand-mark">✦</span>'+(config.brand || "Neura")+'</a><p>'+(config.tagline || "Make room for what’s next.")+'</p></div><div class="footer-links"><div><b>EXPLORE</b><a href="features.html">Features</a><a href="pricing.html">Pricing</a><a href="about.html">About</a></div><div><b>RESOURCES</b><a href="faq.html">FAQ</a><a href="contact.html">Contact</a></div></div></div><div class="footer-bottom"><span>'+(config.footerNote || "© Neura")+'</span><span>Designed with intention · Universe404 Dev</span></div></div></footer>';
  document.querySelectorAll(".reveal").forEach(el => {
    if ("IntersectionObserver" in window) { const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});observer.observe(el); }
    else el.classList.add("visible");
  });
  document.querySelectorAll("[data-cta]").forEach(link=>{const href=(config.checkout||{}).pro;if(href && link.closest(".price-featured"))link.href=href;});
  document.querySelectorAll("[data-billing]").forEach(button=>button.addEventListener("click",()=>{
    document.querySelectorAll("[data-billing]").forEach(b=>b.classList.toggle("active",b===button));
    document.querySelectorAll(".price strong[data-monthly]").forEach(price=>{const value=price.dataset[button.dataset.billing];price.textContent=value==="0"?"$0":"$"+value;});
  }));
  const form=document.getElementById("contact-form");
  if(form) form.addEventListener("submit",async event=>{
    event.preventDefault();const status=document.getElementById("form-status");const endpoint=config.contactEndpoint;
    if(!endpoint){status.textContent="Demo only — add contactEndpoint in assets/js/config.js to receive submissions.";return;}
    if(!/^https:\/\//i.test(endpoint)){status.textContent="Please configure a valid HTTPS endpoint.";return;}
    const payload=Object.fromEntries(new FormData(form).entries());status.textContent="Sending…";
    try{const response=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});if(!response.ok)throw new Error("Request failed");status.textContent="Thanks — your message has been sent.";form.reset();}
    catch(error){status.textContent="Sorry, we couldn't send that message. Please try again later.";}
  });
})();