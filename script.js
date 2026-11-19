const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('supportForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const service = document.getElementById('service').value;
  const issue = document.getElementById('issue').value.trim();

  if (!name || !phone || !service || !issue) return;

  const message = [
    'Hello DevTech IT Solutions, I need IT support.',
    '',
    `Name: ${name}`,
    `Contact number: ${phone}`,
    `Service: ${service}`,
    `Issue: ${issue}`
  ].join('\n');

  document.getElementById('formStatus').textContent = 'Opening WhatsApp with your support request…';
  const whatsappUrl = `https://wa.me/916395555954?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
