(() => {
'use strict';
const data = window.FIVEGOLD_DATA;
if (!data) return;
const svgIcon = (path, extra = '') => '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" ' + extra + '><path d="' + path + '"/></svg>';
const arrowIcon = svgIcon('M5 12h14M13 6l6 6-6 6');
const plusIcon = svgIcon('M12 5v14M5 12h14');
const minusIcon = svgIcon('M5 12h14');
const priceFormatter = new Intl.NumberFormat('ko-KR');
const formatPrice = price => priceFormatter.format(price) + '원';
document.documentElement.classList.add('js');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reduce.matches) document.documentElement.classList.add('motion-on');
const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero');
let revealObserver;
if ('IntersectionObserver' in window && !reduce.matches) {
  revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('visible'); revealObserver.unobserve(entry.target);
    }
  }, {threshold: .12});
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
} else document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('visible'));
let headerObserver;
if (hero && 'IntersectionObserver' in window) {
  headerObserver = new IntersectionObserver(([entry]) => header.classList.toggle('scrolled', !entry.isIntersecting), {rootMargin:'-80px 0px 0px 0px'});
  headerObserver.observe(hero);
} else header?.classList.add('scrolled');
const opened = new Set();
const returnFocus = new WeakMap();
let previousOverflow = '';
let previousPadding = '';
function showDialog(dialog, opener) {
  if (!dialog || dialog.open) return;
  returnFocus.set(dialog, opener || document.activeElement);
  if (!opened.size) {
    previousOverflow = document.body.style.overflow;
    previousPadding = document.body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (gap) document.body.style.paddingRight = gap + 'px';
  }
  opened.add(dialog);
  dialog.showModal();
}
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
    if (event.target.closest('[data-close]')) dialog.close();
  });
  dialog.addEventListener('close', () => {
    opened.delete(dialog);
    if (!opened.size) {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
    }
    if (dialog.id === 'mobile-menu') document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
    const opener = returnFocus.get(dialog);
    if (opener?.isConnected) opener.focus({preventScroll:true});
  });
});
const menu = document.getElementById('mobile-menu');
document.querySelector('.menu-toggle')?.addEventListener('click', event => {
  showDialog(menu, event.currentTarget);
  event.currentTarget.setAttribute('aria-expanded','true');
});
const productDialog = document.getElementById('product-dialog');
const productMedia = productDialog?.querySelector('.product-dialog-media');
const zoomButton = productDialog?.querySelector('.zoom-button');
zoomButton?.addEventListener('click', () => {
  const zoomed = productMedia.classList.toggle('zoomed');
  zoomButton.setAttribute('aria-pressed',String(zoomed));
  zoomButton.innerHTML = zoomed ? '전체 보기 ' + minusIcon : '디테일 확대 ' + plusIcon;
});
function openProduct(id, opener) {
  const product = data.products.find(p => p.id === id);
  if (!product || !productDialog) return;
  const category = data.categories.find(c => c.id === product.category);
  const image = document.getElementById('product-image');
  image.src = product.image;
  image.alt = product.name + ' 옐로 골드 콘셉트';
  image.classList.remove('image-failed');
  document.getElementById('product-title').textContent = product.en;
  document.getElementById('product-korean').textContent = product.name;
  document.getElementById('product-price').textContent = formatPrice(product.price);
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-category').textContent = category.en;
  document.getElementById('product-kind').textContent = category.label;
  productMedia.classList.remove('zoomed');
  zoomButton.setAttribute('aria-pressed','false');
  zoomButton.innerHTML = '디테일 확대 ' + plusIcon;
  showDialog(productDialog, opener);
  productDialog.scrollTop = 0;
}
const escapeHtml = str => String(str).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const grid = document.getElementById('product-grid');
const validCategories = new Set(['all', ...data.categories.map(c => c.id)]);
const params = new URLSearchParams(location.search);
let selectedCategory = validCategories.has(params.get('category')) ? params.get('category') : 'all';
let searchQuery = params.get('q') || '';
let sortOrder = ['recommended','price-low','price-high','name'].includes(params.get('sort')) ? params.get('sort') : 'recommended';
let currentPage = Math.max(1, Number.parseInt(params.get('page'),10) || 1);
const pageSize = 12;
const searchInput = document.getElementById('product-search');
const sortSelect = document.getElementById('product-sort');
const categorySheet = document.getElementById('category-sheet');
const filterToggle = document.querySelector('.filter-toggle');
const clearSearch = document.getElementById('clear-search');
function normalizeText(value) {return value.toLocaleLowerCase('ko-KR').replace(/\s+/g,'');}
function renderProducts(category, resetPage = false) {
  if (!grid) return;
  selectedCategory = category;
  if (resetPage) currentPage = 1;
  const query = normalizeText(searchQuery.trim());
  let products = data.products.filter(p => (category === 'all' || p.category === category) && (!query || normalizeText(p.name + ' ' + p.en).includes(query)));
  if (sortOrder === 'price-low') products.sort((a,b) => a.price - b.price);
  if (sortOrder === 'price-high') products.sort((a,b) => b.price - a.price);
  if (sortOrder === 'name') products.sort((a,b) => a.name.localeCompare(b.name,'ko'));
  const pages = Math.max(1,Math.ceil(products.length / pageSize));
  currentPage = Math.min(currentPage,pages);
  const offset = (currentPage - 1) * pageSize;
  const visible = products.slice(offset, offset + pageSize);
  grid.innerHTML = visible.map((p,i) => '<button class="product-card" type="button" data-product="' + escapeHtml(p.id) + '" aria-label="' + escapeHtml(p.name + ' ' + p.en + ' ' + formatPrice(p.price) + ' 상세 보기') + '" style="--i:' + (i % 6) + '"><div class="media"><img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.name) + '" width="1254" height="1254" loading="lazy" decoding="async"></div><p class="product-label"><span>' + escapeHtml(p.name) + '</span>' + arrowIcon + '</p> <p class="product-en" lang="en">' + escapeHtml(p.en) + '</p> <p class="product-price">' + formatPrice(p.price) + '</p></button>').join('');
  document.getElementById('product-count').textContent = String(products.length);
  document.getElementById('page-range').textContent = products.length ? (offset + 1) + '–' + (offset + visible.length) + ' / ' + products.length : '';
  document.getElementById('selected-category').textContent = data.categories.find(c => c.id === category)?.label || '전체';
  filterToggle?.setAttribute('aria-label',document.getElementById('selected-category').textContent + ' 제품 품목 선택');
  document.querySelectorAll('[data-category]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.category === category)));
  document.getElementById('empty-results').hidden = products.length > 0;
  clearSearch.hidden = !searchQuery;
  const pager = document.getElementById('pagination');
  pager.hidden = pages <= 1;
  pager.innerHTML = pages > 1 ? '<button type="button" data-page-number="' + (currentPage - 1) + '" aria-label="이전 제품 페이지"' + (currentPage === 1 ? ' disabled' : '') + '>' + svgIcon('M19 12H5M11 6l-6 6 6 6') + '</button>' + Array.from({length:pages},(_,i) => '<button type="button" data-page-number="' + (i + 1) + '" aria-label="' + (i + 1) + ' 제품 페이지"' + (i + 1 === currentPage ? ' aria-current="page"' : '') + '>' + (i + 1) + '</button>').join('') + '<button type="button" data-page-number="' + (currentPage + 1) + '" aria-label="다음 제품 페이지"' + (currentPage === pages ? ' disabled' : '') + '>' + arrowIcon + '</button>' : '';
  if (location.protocol !== 'file:') {
    const url = new URL(location.href);
    for (const [key,value] of [['category',category === 'all' ? '' : category],['q',searchQuery],['sort',sortOrder === 'recommended' ? '' : sortOrder],['page',currentPage === 1 ? '' : String(currentPage)]]) {
      if (value) url.searchParams.set(key,value); else url.searchParams.delete(key);
    }
    history.replaceState(null,'',url.href);
  }
}
grid?.addEventListener('click', event => {
  const button = event.target.closest('[data-product]');
  if (button) openProduct(button.dataset.product,button);
});
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
  renderProducts(button.dataset.category,true);
  if (categorySheet?.open) categorySheet.close();
}));
filterToggle?.addEventListener('click', () => {showDialog(categorySheet,filterToggle);filterToggle.setAttribute('aria-expanded','true');});
categorySheet?.addEventListener('close', () => filterToggle.setAttribute('aria-expanded','false'));
let searchTimer;
searchInput?.addEventListener('input', () => {
  searchQuery = searchInput.value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => renderProducts(selectedCategory,true),160);
});
clearSearch?.addEventListener('click', () => {clearTimeout(searchTimer);searchQuery = '';searchInput.value = '';renderProducts(selectedCategory,true);searchInput.focus();});
sortSelect?.addEventListener('change', () => {sortOrder = sortSelect.value;renderProducts(selectedCategory,true);});
document.getElementById('reset-catalog')?.addEventListener('click', () => {clearTimeout(searchTimer);searchQuery = '';sortOrder = 'recommended';searchInput.value = '';sortSelect.value = sortOrder;renderProducts('all',true);searchInput.focus();});
document.getElementById('pagination')?.addEventListener('click', event => {
  const button = event.target.closest('[data-page-number]');
  if (!button || button.disabled) return;
  currentPage = Number(button.dataset.pageNumber);
  renderProducts(selectedCategory);
  document.querySelector('.catalog-tools').scrollIntoView({behavior:reduce.matches ? 'instant' : 'smooth',block:'start'});
  document.querySelector('#pagination [aria-current="page"]')?.focus({preventScroll:true});
});
if (grid) {searchInput.value = searchQuery;sortSelect.value = sortOrder;renderProducts(selectedCategory);}
const navExpand = document.querySelector('.nav-expand');
const navDropdown = document.getElementById('product-menu');
function closeNavDropdown() {if (!navDropdown) return;navDropdown.hidden = true;navExpand.setAttribute('aria-expanded','false');}
navExpand?.addEventListener('click', () => {const open = navDropdown.hidden;navDropdown.hidden = !open;navExpand.setAttribute('aria-expanded',String(open));});
document.addEventListener('click', event => {if (!event.target.closest('.nav-product')) closeNavDropdown();});
document.addEventListener('keydown', event => {if (event.key === 'Escape' && navDropdown && !navDropdown.hidden) {closeNavDropdown();navExpand.focus();}});
document.querySelector('.nav-product')?.addEventListener('focusout', () => {setTimeout(() => {if (!document.activeElement.closest('.nav-product')) closeNavDropdown();},0);});
document.addEventListener('click', event => {
  const button = event.target.closest('[data-contact]');
  if (!button) return;
  const type = button.dataset.contact;
  if (type === 'phone' && /^\+?[\d -]{8,22}$/.test(data.store.phone || '')) {
    location.href = 'tel:' + data.store.phone.replace(/[ -]/g,''); return;
  }
  if (type === 'kakao' && data.store.kakaoUrl) {
    try {
      const url = new URL(data.store.kakaoUrl);
      if (url.protocol === 'https:' && ['pf.kakao.com','open.kakao.com'].includes(url.hostname)) {
        window.open(url.href,'_blank','noopener,noreferrer'); return;
      }
    } catch {}
  }
  showDialog(document.getElementById('contact-dialog'),button);
});
const video = document.querySelector('.hero-video');
function playHeroVideo() {
  if (!video || reduce.matches) return;
  video.play().catch(() => video.classList.remove('ready'));
}
if (video) {
  video.muted = true;
  video.addEventListener('loadeddata', () => {
    if (!reduce.matches) video.classList.add('ready');
  });
  video.addEventListener('playing', () => {
    if (!reduce.matches) video.classList.add('ready');
  });
  video.addEventListener('error', () => video.classList.remove('ready'), true);
  if (reduce.matches) video.pause();
  else playHeroVideo();
}
function motionPreferenceChanged() {
  if (reduce.matches) {
    document.documentElement.classList.remove('motion-on');
    video?.pause(); video?.classList.remove('ready');
    revealObserver?.disconnect();
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('visible'));
  } else playHeroVideo();
}
reduce.addEventListener('change',motionPreferenceChanged);
document.addEventListener('error', event => {
  if (event.target instanceof HTMLImageElement) {
    event.target.classList.add('image-failed');
    event.target.alt = '이미지를 불러오지 못했습니다. ' + event.target.alt;
  }
}, true);
window.addEventListener('pagehide', () => {revealObserver?.disconnect();headerObserver?.disconnect();});
window.addEventListener('pageshow', event => {
  if (event.persisted) {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('visible'));
    if (hero && headerObserver) headerObserver.observe(hero);
  }
});
})();
