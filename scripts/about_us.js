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
    // Уникальные переменные для этой формы
    const collabForm = document.getElementById('collaborationForm');
    const collabMessage = document.getElementById('collab-message');

    // Загрузка сохраненных данных из LocalStorage (с уникальным ключом)
    const savedCollabData = JSON.parse(localStorage.getItem('collaborationFormData')) || {};
    if (savedCollabData) {
        document.getElementById('collab-name').value = savedCollabData.collabName || '';
        document.getElementById('collab-email').value = savedCollabData.collabEmail || '';
        document.getElementById('collab-specialization').value = savedCollabData.collabSpecialization || '';
        document.getElementById('collab-experience').value = savedCollabData.collabExperience || '';
        document.getElementById('collab-links').value = savedCollabData.collabLinks || '';
    }

    // Обработка отправки формы
    if (collabForm) {
        collabForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Собираем данные формы с уникальными именами свойств
            const formData = {
                collabName: document.getElementById('collab-name').value,
                collabEmail: document.getElementById('collab-email').value,
                collabSpecialization: document.getElementById('collab-specialization').value,
                collabExperience: document.getElementById('collab-experience').value,
                collabLinks: document.getElementById('collab-links').value
            };
            
            // Сохраняем в LocalStorage с уникальным ключом
            localStorage.setItem('collaborationFormData', JSON.stringify(formData));
            
            // Показываем сообщение об успехе
            collabMessage.textContent = 'Ваша заявка на сотрудничество сохранена! Мы свяжемся с вами.';
            collabMessage.style.color = 'green';
            collabMessage.style.fontWeight = '600';
            
            // Автоматическое скрытие сообщения
            setTimeout(() => {
                collabMessage.textContent = '';
            }, 5000);
        });
    }
});