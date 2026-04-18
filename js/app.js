/* ================================================
   RAÍZES DO NORDESTE — Utilitários & Lógica Compartilhada
   Gerenciamento de carrinho, sessão e navegação
   ================================================ */

/* ---- CHAVES DO LOCALSTORAGE ---- */
const KEY_CARRINHO = 'rdn_carrinho';
const KEY_USUARIO  = 'rdn_usuario';
const KEY_UNIDADE  = 'rdn_unidade';
const KEY_PEDIDO   = 'rdn_pedido';
const KEY_LGPD     = 'rdn_lgpd_aceito';

/* ---- MODO DO CANAL (URL param ?modo=totem|web|app) ---- */
function getModo() {
  return new URLSearchParams(window.location.search).get('modo') || 'web';
}

function aplicarModo() {
  const modo = getModo();
  if (modo === 'totem') {
    document.body.classList.add('modo-totem');
    const el = document.querySelector('.totem-header');
    if (el) el.style.display = 'block';
  }
}

/* ---- CARRINHO ---- */
function getCarrinho() {
  try { return JSON.parse(localStorage.getItem(KEY_CARRINHO)) || []; }
  catch { return []; }
}

function setCarrinho(carrinho) {
  localStorage.setItem(KEY_CARRINHO, JSON.stringify(carrinho));
  atualizarBadgeCarrinho();
}

function adicionarAoCarrinho(produto) {
  const carrinho = getCarrinho();
  const idx = carrinho.findIndex(i => i.id === produto.id);
  if (idx >= 0) {
    carrinho[idx].qtd += 1;
  } else {
    carrinho.push({ ...produto, qtd: 1 });
  }
  setCarrinho(carrinho);
}

function removerDoCarrinho(produtoId) {
  const carrinho = getCarrinho();
  const idx = carrinho.findIndex(i => i.id === produtoId);
  if (idx < 0) return;
  if (carrinho[idx].qtd > 1) {
    carrinho[idx].qtd -= 1;
  } else {
    carrinho.splice(idx, 1);
  }
  setCarrinho(carrinho);
}

function limparCarrinho() {
  localStorage.removeItem(KEY_CARRINHO);
  atualizarBadgeCarrinho();
}

function totalCarrinho() {
  return getCarrinho().reduce((sum, i) => sum + i.preco * i.qtd, 0);
}

function qtdCarrinho() {
  return getCarrinho().reduce((sum, i) => sum + i.qtd, 0);
}

function atualizarBadgeCarrinho() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const qtd = qtdCarrinho();
  badge.textContent = qtd;
  badge.style.display = qtd > 0 ? 'flex' : 'none';
}

/* ---- USUÁRIO / SESSÃO ---- */
function getUsuario() {
  try { return JSON.parse(localStorage.getItem(KEY_USUARIO)); }
  catch { return null; }
}

function setUsuario(usuario) {
  localStorage.setItem(KEY_USUARIO, JSON.stringify(usuario));
}

function logout() {
  localStorage.removeItem(KEY_USUARIO);
  localStorage.removeItem(KEY_CARRINHO);
  localStorage.removeItem(KEY_PEDIDO);
  window.location.href = 'index.html';
}

/* ---- UNIDADE SELECIONADA ---- */
function getUnidade() {
  try { return JSON.parse(localStorage.getItem(KEY_UNIDADE)); }
  catch { return null; }
}

function setUnidade(unidade) {
  localStorage.setItem(KEY_UNIDADE, JSON.stringify(unidade));
}

/* ---- PEDIDO ---- */
function getPedido() {
  try { return JSON.parse(localStorage.getItem(KEY_PEDIDO)); }
  catch { return null; }
}

function setPedido(pedido) {
  localStorage.setItem(KEY_PEDIDO, JSON.stringify(pedido));
}

function gerarNumeroPedido() {
  return String(Math.floor(Math.random() * 90 + 10));
}

/* ---- LGPD ---- */
function lgpdAceito() {
  return localStorage.getItem(KEY_LGPD) === '1';
}

function marcarLgpd() {
  localStorage.setItem(KEY_LGPD, '1');
}

/* ---- FORMATAÇÃO ---- */
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/* ---- NAVEGAÇÃO AUXILIAR ---- */
function irPara(pagina) {
  const modo = getModo();
  const sep  = pagina.includes('?') ? '&' : '?';
  window.location.href = `${pagina}${modo !== 'web' ? sep + 'modo=' + modo : ''}`;
}

/* ---- INICIALIZAÇÃO COMUM ---- */
document.addEventListener('DOMContentLoaded', () => {
  aplicarModo();
  atualizarBadgeCarrinho();

  /* Marcar item ativo no bottom nav */
  const pagina = window.location.pathname.split('/').pop();
  document.querySelectorAll('.bottom-nav__item, .desktop-nav a').forEach(el => {
    if (el.getAttribute('href') && el.getAttribute('href').startsWith(pagina)) {
      el.classList.add('active');
    }
  });

  /* Mostrar nome do usuário no header se logado */
  const usuario = getUsuario();
  const saudacao = document.getElementById('saudacao-usuario');
  if (saudacao && usuario) {
    saudacao.textContent = `Olá, ${usuario.nome.split(' ')[0]}!`;
  }

  /* Mostrar unidade selecionada no header */
  const unidadeLabel = document.getElementById('unidade-label');
  const unidade = getUnidade();
  if (unidadeLabel && unidade) {
    unidadeLabel.textContent = unidade.nome.replace('Raízes do Nordeste – ', '');
  }
});
