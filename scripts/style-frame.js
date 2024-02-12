'use strict';

{
  // Блок констант
  const hillWidth = 60;
  const hillHeight = 50;
  const plainWidth = 25;

  const styleBlock = document.querySelector('.omega-style-block');

  const viewPort = document.documentElement.clientWidth;
  // Шаблон прямой + кривой для наполненеия SVG
  const templateHillPlain = `\ l ${plainWidth},0 \ c 0,${hillHeight} ${hillWidth},${hillHeight} ${hillWidth},0 `;

  // Получаем кол-во бугорков
  const quantityHtill = Math.trunc((viewPort - plainWidth) / (hillWidth + plainWidth));

  // Получаем суммарную длину всех бугорков и равнин
  const widthAllHillsAndPlain = quantityHtill * hillWidth + (quantityHtill - 1) * plainWidth;

  // Получаем стартовое смещение для оцентровки бугорков.
  const startOffset = (viewPort - widthAllHillsAndPlain) / 2 - plainWidth;

  // Заполняем SVG
  const svg = `path('M ${startOffset},0 \ ${templateHillPlain.repeat(quantityHtill)}')`;
  styleBlock.style.clipPath = svg;
}
