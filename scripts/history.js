document.addEventListener('DOMContentLoaded', function() {
        const buttons=document.querySelectorAll('.timeline-btn');

        buttons.forEach(button=> {
                button.addEventListener('click', function() {
                        /* Удаляем активный класс у всех кнопок и контента */
                        buttons.forEach(btn=> btn.classList.remove('active'));

                        document.querySelectorAll('.history-content').forEach(content=> {
                                content.classList.remove('active');
                            });

                        /* Добавляем активный класс к текущей кнопке */
                        this.classList.add('active');

                        /* Показываем соответствующий контент */
                        const targetId=this.getAttribute('data-target');
                        document.getElementById(targetId).classList.add('active');
                    });
            });
    });