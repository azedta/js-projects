'use strict';
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const selectModal = function (i) {
  let modalName;
  switch (i) {
    case 0:
      modalName = 'modal';
      break;
    case 1:
      modalName = 'morning';
      break;

    case 2:
      modalName = 'evening';
      break;

    case 3:
      modalName = 'night';
      break;

    default:
      modalName = 'modal';
  }
  return document.querySelector(`.${modalName}`);
};

const openModal = function (modal) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (modal) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  let modal = selectModal(i + 1);
  btnsOpenModal[i].addEventListener('click', () => openModal(modal));
  btnsCloseModal[i].addEventListener('click', () => closeModal(modal));
  overlay.addEventListener('click', () => closeModal(modal));
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
      closeModal(modal);
  });
}
