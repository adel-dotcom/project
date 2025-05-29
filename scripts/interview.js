/* Для раздела "Интервью" */

document.querySelectorAll('.interview-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = header.nextElementSibling;

        // Закрываем все открытые интервью кроме текущего
        document.querySelectorAll('.interview-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.interview-content').style.maxHeight = null;
            }
        });

        // Переключаем текущее интервью
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});