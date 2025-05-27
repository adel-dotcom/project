'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
//* 1. Началою
//* 2. Получаем все элементы изображений с описанием.
//* 3. Для каждого изображения (проверяем есть ли такие изображения):
//*   3.1 Добавляем обработчик наведения курсора на изображение:
//*     3.1.1. Да:
//*         3.1.1.1. Показываем текст при наведении.
//*     3.1.2 Нет: продолжаем
//*   3.2 Добавляем обработчик курсор уходит с изображения:
//*     3.3.1. Да:
//*         3.3.1.1. Скрываем элемент с описанием.
//*     3.3.2. Нет: продолжаемю
//* 4. Конец
//* Блок-схема: /images/block-schema.png
    const intensiveImg = document.querySelectorAll(".main__img");
   

intensiveImg.forEach((item, index) => {
    const intensiveText = document.querySelectorAll('.main-block__link');
    item.addEventListener('mouseenter', () => {
      item.style.opacity = 0.5;
      intensiveText[index].removeAttribute('hidden');
    });


    item.addEventListener('mouseleave', () => {
      item.style.opacity = 1;
      intensiveText[index].setAttribute('hidden', true);
    });
});

});