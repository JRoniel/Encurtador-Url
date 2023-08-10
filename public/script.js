const checkbox = document.getElementById('url_generator');
const inputShort = document.getElementById('url_short');

checkbox.addEventListener('click', () => {
    inputShort.style.display = checkbox.checked ? 'none' : 'block';
});