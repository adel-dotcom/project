document.addEventListener('DOMContentLoaded', function () {
    const navBtns = document.querySelectorAll('.nav-btn');

    navBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Удаляем активный класс у всех кнопок и контента
            navBtns.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.about-content').forEach(content => {
                content.classList.remove('active');
            });

            // Добавляем активный класс к текущей кнопке
            this.classList.add('active');

            // Показываем соответствующий контент
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Обработка формы "Стать автором"
    const authorForm = document.querySelector('.author-form form');
    if (authorForm) {
        authorForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
});