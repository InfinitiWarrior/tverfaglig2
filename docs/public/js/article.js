document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const article1 = document.getElementById('article1');
    const article2 = document.getElementById('article2');

    toggleButton.addEventListener('click', function () {
        console.log('Toggle button clicked');
        article1.classList.toggle('hidden');
        article2.classList.toggle('hidden');
    });
});
