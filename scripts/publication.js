document.addEventListener('DOMContentLoaded', function () {
    // Открытие/закрытие комментариев
    const commentBtns = document.querySelectorAll('.comment-btn');

    commentBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const commentsSection = this.closest('.publication-card').querySelector('.comments-section');
            const isActive = commentsSection.classList.contains('active');

            // Закрываем все открытые секции комментариев
            document.querySelectorAll('.comments-section').forEach(section => {
                section.classList.remove('active');
            });

            // Открываем текущую, если она была закрыта
            if (!isActive) {
                commentsSection.classList.add('active');
                this.textContent = 'Скрыть комментарии';
            } else {
                this.textContent = 'Комментировать (' + commentsSection.querySelectorAll('.comment').length + ')';
            }
        });
    });

    // Фильтрация публикаций
    const filterBtns = document.querySelectorAll('.filter-btn');
    const publicationCards = document.querySelectorAll('.publication-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Удаляем активный класс у всех кнопок
            filterBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');

            const filter = this.textContent;

            publicationCards.forEach(card => {
                if (filter === 'Все' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Отправка комментария
    const commentForms = document.querySelectorAll('.comment-form');

    commentForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const textarea = this.querySelector('textarea');
            const commentText = textarea.value.trim();

            if (commentText) {
                const commentList = this.previousElementSibling;
                const now = new Date();
                const dateStr = now.toLocaleDateString('ru-RU');

                const newComment = document.createElement('div');
                newComment.className = 'comment';
                newComment.innerHTML = `
                            <div class="comment-header">
                                <span class="comment-author">Анонимный пользователь</span>
                                <span class="comment-date">${dateStr}</span>
                            </div>
                            <div class="comment-content">${commentText}</div>
                        `;

                commentList.appendChild(newComment);
                textarea.value = '';

                // Обновляем счетчик комментариев
                const commentBtn = this.closest('.publication-card').querySelector('.comment-btn');
                const commentCount = commentList.querySelectorAll('.comment').length;
                commentBtn.textContent = 'Комментировать (' + commentCount + ')';
            }
        });
    });
});