// import Swiper JS
import Swiper from 'swiper/swiper-bundle.mjs';

// Кол-во слайдов
const slidesQuantity = 5;

// Swiper dll делаем слайдер
const swiper = new Swiper('.swiper', {
  // Optional parameters

  // Для скипа ошибки библиотеки
  enabled: false,

  direction: 'horizontal',

  loop: true,

  keyboard: {
    enablee: true,
    onlyInViewport: true,
  },

  autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const slidesAppend = function (data) {
  for (let i = 0; i < slidesQuantity - 1; i++) {
    swiper.appendSlide(`<div class="swiper-slide"><img src="${data[i].image}"></div>`);
  }
  // Удаляем слайд-заглушку для скипа ошибки библиотеки и запускаем слайдер.
  swiper.removeSlide(1);
  swiper.enable();

  console.log(swiper);
};

// Запрос к фейк-API на выдачу картиночек для слайдера.
(async function () {
  try {
    const response = await fetch('https://fakestoreapi.com/products/');
    if (!response.ok) throw new Error(`Ошибка связи с FakeAPI: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
})()
  .then((data) => slidesAppend(data))
  .catch((error) => console.error('Ошибка работы с FakeAPI: ' + error));
