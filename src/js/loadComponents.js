async function loadComponent(selector, file) {
  const container = document.querySelector(selector);
  if (container) {
    const res = await fetch(file);
    const html = await res.text();
    container.innerHTML = html;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', 'components/header.html');
  loadComponent('footer', 'components/footer.html');
});
