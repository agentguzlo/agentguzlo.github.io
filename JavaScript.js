document.addEventListener('DOMContentLoaded', function () {
  const openPopupLink = document.querySelector('.open-popup');

  openPopupLink.addEventListener('click', function () {
    const popupTarget = this.getAttribute('data-popup-target');
    const popup = document.getElementById(popupTarget);
    popup.style.display = 'block';
  });

  const closePopupLinks = document.querySelectorAll('.popup button');

  closePopupLinks.forEach(function (button) {
    button.addEventListener('click', function () {
      const popup = this.closest('.popup');
      popup.style.display = 'none';
    });
  });
});