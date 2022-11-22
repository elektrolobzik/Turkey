document.querySelector('#theme_toggle').addEventListener('click', (event) => {
    
    event.preventDefault(); // можно отключить обработчик и не будеь выполнен переход по ссылке
    
    document.querySelector('body').classList.toggle('dark_theme');

    if (document.querySelector('body').classList.contains('dark_theme')) {
        event.target.textContent = "Светлая тема";
    } else {
        event.target.textContent = "Тёмная тема";
    }
});