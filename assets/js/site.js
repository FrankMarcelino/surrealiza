(function () {
  var cfg = window.SURREALIZA || {};
  var numero = String(cfg.WHATSAPP_NUMBER || "");
  var valido = /^\d{12,13}$/.test(numero);
  var msgs = cfg.WHATSAPP_MESSAGES || {};

  if (!valido) {
    console.warn("Surrealiza: WHATSAPP_NUMBER inválido em assets/js/config.js; botões apontam para #contato.");
  }

  document.querySelectorAll("[data-wa]").forEach(function (a) {
    if (!valido) return;
    var texto = msgs[a.getAttribute("data-wa")] || msgs["default"] || "";
    a.href = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);
    a.target = "_blank";
    a.rel = "noopener";
    a.addEventListener("click", function () {
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", { method: "whatsapp", pacote: a.getAttribute("data-wa") });
      }
    });
  });

  // Número exibido: +55 (88) 91234-5678, derivado da mesma constante.
  if (valido) {
    var m = numero.match(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/);
    var exibido = m ? "+" + m[1] + " (" + m[2] + ") " + m[3] + "-" + m[4] : "+" + numero;
    document.querySelectorAll("[data-wa-display]").forEach(function (el) {
      el.textContent = exibido;
    });
  }

  // Laudo do hero: a animação começa quando ele entra na tela.
  // Barra fixa de WhatsApp: some enquanto o botão principal do hero ou o CTA final estão visíveis.
  if ("IntersectionObserver" in window) {
    var laudo = document.querySelector(".laudo");
    if (laudo) {
      new IntersectionObserver(function (es, obs) {
        if (es[0].isIntersecting) {
          laudo.classList.add("is-on");
          obs.disconnect();
        }
      }, { threshold: 0.35 }).observe(laudo);
    }
    var barra = document.querySelector(".wa-bar");
    var alvos = document.querySelectorAll(".hero .btn, #contato");
    if (barra && alvos.length) {
      var visiveis = new Set();
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) visiveis.add(e.target);
          else visiveis.delete(e.target);
        });
        barra.classList.toggle("is-hidden", visiveis.size > 0);
      });
      alvos.forEach(function (el) { io.observe(el); });
    }
  } else {
    var l = document.querySelector(".laudo");
    if (l) l.classList.add("is-on");
  }

  document.querySelectorAll("[data-ano]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Google Analytics carregado depois da página, para não pesar na abertura pelo celular.
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", "G-NJEE4QLJ29");
  function carregaGA() {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=G-NJEE4QLJ29";
    document.head.appendChild(s);
  }
  if (document.readyState === "complete") setTimeout(carregaGA, 2500);
  else window.addEventListener("load", function () { setTimeout(carregaGA, 2500); });
})();
