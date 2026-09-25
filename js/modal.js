const modal = document.querySelector('[data-modal]');
const openModalButton = document.querySelector('[data-modal-open]');
const closeModalButton = document.querySelector('[data-modal-close]');

const toggleModal = () => {
  modal.classList.toggle('is-open');
};

openModalButton.addEventListener('click', toggleModal);
closeModalButton.addEventListener('click', toggleModal);

modal.addEventListener('click', event => {
  if (event.target === modal) {
    toggleModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    toggleModal();
  }
});
