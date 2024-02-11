// import Swiper JS
import Swiper from 'swiper/swiper-bundle.mjs';

// Кол-во слайдов
const slidesQuantity = 5;

// Swiper dll делаем слайдер
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

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

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

console.log(swiper);

const slidesAppend = function (data) {
  for (let i = 0; i < slidesQuantity - 1; i++) {
    swiper.appendSlide(`<div class="swiper-slide"><img src="${data[i].image}"></div>`);
  }
};

// Запрос к фейк-API на выдачу картиночек для слайдера.
const getPic = async function () {
  try {
    const response = await fetch('https://fakestoreapi.com/products/');
    console.log(response);
    if (!response.ok) throw new Error(`Ошибка связи с FakeAPI: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
getPic()
  .then((data) => slidesAppend(data))
  .catch((error) => console.error('Ошибка работы с FakeAPI: ' + error));
