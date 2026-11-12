/*
 * ÚNICO lugar onde ficam o número do WhatsApp e os textos pré-preenchidos.
 * Todos os botões com data-wa="<chave>" usam estes valores (ver site.js).
 *
 * WHATSAPP_NUMBER: só dígitos, com DDI e DDD. Ex.: 5588912345678
 * Enquanto não for um número válido, os botões levam para a seção #contato
 * em vez de abrir um WhatsApp errado.
 */
window.SURREALIZA = {
  WHATSAPP_NUMBER: "5588999418111",

  WHATSAPP_MESSAGES: {
    default: "Olá, Frank! Quero um diagnóstico grátis. O link do meu app/site é: ",
    diagnostico: "Olá, Frank! Quero um diagnóstico grátis. O link do meu app/site é: ",
    resgate: "Olá, Frank! Quero marcar uma call sobre o Resgate (colocar meu app no ar direito). O link é: ",
    manutencao: "Olá, Frank! Quero marcar uma call sobre a manutenção mensal do meu app. O link é: ",
    modernizacao: "Olá, Frank! Quero marcar uma call sobre modernizar o site da minha empresa. O link é: ",
  },
};
