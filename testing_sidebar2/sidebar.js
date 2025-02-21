document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-button');
  const iframe = document.getElementById('content-frame');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('data-url');
      iframe.src = url;
    });
  });

  iframe.addEventListener('load', () => {
    if (iframe.contentDocument.body.innerHTML.includes('blocked')) {
      iframe.style.display = 'none';
      alert('This content cannot be displayed in the sidebar.');
    } else {
      iframe.style.display = 'block';
    }
  });
});
