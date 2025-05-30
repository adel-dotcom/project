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

    const AnalyticsContainer = document.querySelector(".analytics");
    if (AnalyticsContainer) {
        const dataTitleAnalytics = [
            "Мнения",
            "Интервью",
            "История",
        ];
        const titleAnalytics =
            AnalyticsContainer.querySelectorAll(".analytics__name");
        titleAnalytics.forEach((item, index) => {
            item.textContent = dataTitleAnalytics[index];
        });
    }
});



/* Модальное окно */

const asideButtonModal = document.querySelector(".aside__button");
const modalApplication = document.querySelector(".applications");
const formApplication = document.getElementById("formApplication");
const usernameInput = document.getElementById("username");
const articlenameInput = document.getElementById("articlename");
const emailInput = document.getElementById("email");
const messageElement = document.getElementById("application-message");

// Загрузка сохраненных данных из LocalStorage при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    const savedFormData = JSON.parse(localStorage.getItem("applicationFormData")) || {};
    usernameInput.value = savedFormData.username || "";
    articlenameInput.value = savedFormData.articlename || "";
    emailInput.value = savedFormData.email || "";
});

if (asideButtonModal && modalApplication) {
    asideButtonModal.addEventListener("click", () => {
        modalApplication.removeAttribute("hidden");
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modalApplication) {
        modalApplication.setAttribute("hidden", true);
    }
});

const closeModalButton = document.querySelector(".application__close");
closeModalButton.addEventListener("click", () => {
    modalApplication.setAttribute("hidden", true);
});

// Обработка отправки формы
formApplication.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Собираем данные формы
    const formData = {
        username: usernameInput.value,
        articlename: articlenameInput.value,
        email: emailInput.value
    };
    
    // Сохраняем в LocalStorage
    localStorage.setItem("applicationFormData", JSON.stringify(formData));
    
    // Показываем сообщение об успешной отправке
    messageElement.textContent = "Ваша заявка сохранена! Мы свяжемся с вами в ближайшее время.";
    messageElement.style.color = "green";
    
    // Очищаем форму (опционально)
    // formApplication.reset();
    
    // Закрываем модальное окно через 3 секунды (опционально)
    setTimeout(() => {
        modalApplication.setAttribute("hidden", true);
    }, 3000);
});


// Динамический вывод меню
const headerMenu = document.querySelector('.header__menu');
if (headerMenu) {
    const headerList = headerMenu.querySelector('.menu');

    const menuData = {
        // Каждая ссылка содержит link (адрес ссылки; если ссылка никуда не ведет, то можно оставить #) и title (текст ссылки).
        link1: {
            link: '#',
            title: 'Главная',
        },
        link2: {
            link: '#',
            title: 'О сайте',
        },
        link3: {
            link: 'news.html',
            title: 'Новости',
        },
        link5: {
            link: '#',
            title: 'Контакты',
        }

    }

    const createLink = (UrlLink, title) => {
        const link = `
            <li class="menu__item"><a href="${UrlLink}" class="menu__link">${title}</a></li>
            `;
        return link;
    }

    for (const linkItem in menuData) {
        const link = menuData[linkItem];
        const linkIndex = createLink(link.UrlLink, link.title);
        headerList.insertAdjacentHTML('beforeend', linkIndex);

    }
}

// Динамический вывод меню (ДЛЯ ФУТЕРА!)
const footerMenu = document.querySelector('.footer__menu');
if (footerMenu) {
    const footerList = footerMenu.querySelector('.menu-footer');

    const menuFooterData = {
        // Каждая ссылка содержит link (адрес ссылки; если ссылка никуда не ведет, то можно оставить #) и title (текст ссылки).
        link1: {
            link: '#',
            title: 'Главная',
        },
        link2: {
            link: '#',
            title: 'О сайте',
        },
        link3: {
            link: 'news.html',
            title: 'Новости',
        },
        link4: {
            link: '#',
            title: 'Контакты',
        }

    }

    const createLink = (UrlLink, title) => {
        const link = `
            <li class="menu-footer__item"><a href="${UrlLink}" class="menu-footer__link">${title}</a></li>
            `;
        return link;
    }

    for (const linkItem in menuFooterData) {
        const link = menuFooterData[linkItem];
        const linkIndex = createLink(link.UrlLink, link.title);
        footerList.insertAdjacentHTML('beforeend', linkIndex);

    }
}

const cardsImages = document.querySelector(".images");
if (cardsImages) {
    const cardListImages = cardsImages.querySelector(".images__list");

    // Пример URL для получения данных с сервера
    const apiUrl = "images.json";

    // Функция для создания карточки
    const createCard = (imageUrl, imageAlt, imageWidth) => {
        // Шаблонные строки и подстановки
        const image = `
            <li class="images__item">
                <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
                <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
            </li>
        `;

        return image;
    };
    fetch(apiUrl)
        .then((response) => response.json())
        .then((images) => {
            console.log(images);
            console.log(typeof images);

            images.forEach((item) => {
                const cardElement = createCard(
                    item.imageUrl,
                    item.imageAlt,
                    item.imageWidth
                );
                cardListImages.insertAdjacentHTML("beforeend", cardElement);
            });
            const pictures = document.querySelectorAll(".images__picture");
            if (pictures) {
                pictures.forEach((picture) => {
                    picture.addEventListener("click", () => {
                        const parentItem = picture.parentElement;

                        const parentPictures =
                            parentItem.querySelectorAll(".images__picture");

                        parentPictures.forEach((parentPictures) => {
                            if (parentPictures !== picture) {
                                parentPictures.style.display = "block";
                            } else {
                                parentPictures.style.display = "none";
                            }
                        });
                    });
                });
            }

        });
}

const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        content.style.display = "block";

        preloader.remove();
    }, 3000); // Задержка 3 секунды
}



document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.swiper');
    if (slider) {
        new Swiper('.swiper', { // Используем селектор класса
            // Опциональные параметры
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            
            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'fraction', // или 'bullets', 'progressbar'
            },
            
            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // Дополнительные настройки
            effect: 'slide', // или 'fade', 'cube', 'coverflow' и др.
            speed: 800,
            slidesPerView: 1,
            spaceBetween: 0
        });
    }
});

