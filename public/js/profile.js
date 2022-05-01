
window.addEventListener('DOMContentLoaded', () => {
    const inputFile = document.querySelector('#input-image');
    const form = document.querySelector('form');
 
    form.addEventListener("click", () => {
      inputFile.click();
    });

    inputFile.addEventListener('change', () => {
        form.submit();
    });
});