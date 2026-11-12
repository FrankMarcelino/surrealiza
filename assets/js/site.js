(function () {
  var cfg = window.SURREALIZA || {};
  var numero = String(cfg.WHATSAPP_NUMBER || "");
  var valido = /^\d{12,13}$/.test(numero);
  var msgs = cfg.WHATSAPP_MESSAGES || {};

  if (!valido) {
    console.warn("Surrealiza: WHATSAPP_NUMBER inválido em assets/js/config.js; botões apontam para #contato.");
  }

  // Todo link com data-wa="<chave>" vira wa.me/<número>?text=<mensagem da chave>.
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

  // Número exibido (+55 (88) 91234-5678), derivado da mesma constante.
  if (valido) {
    var m = numero.match(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/);
    var exibido = m ? "+" + m[1] + " (" + m[2] + ") " + m[3] + "-" + m[4] : "+" + numero;
    document.querySelectorAll("[data-wa-display]").forEach(function (el) {
      el.textContent = exibido;
    });
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
