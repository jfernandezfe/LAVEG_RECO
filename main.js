window.addEventListener('DOMContentLoaded', function() {
    var popup = document.querySelector('.popup');
    var acceptButton = document.querySelector('.popup .accept-button');
    var skipButton = document.querySelector('.popup .skip-button');
    var welcomePopup = document.querySelector('.welcome-popup');
    var welcomeAcceptButton = document.querySelector('.welcome-popup .accept-button');
  
    acceptButton.addEventListener('click', function() {
      // Redirigir al navegador de Microsoft Edge
      window.location.href = 'microsoft-edge:https://sagcartogob2023lavegreco.netlify.app/'; // Cambia esta URL por la que desees abrir en Microsoft Edge
    });
  
    skipButton.addEventListener('click', function() {
      popup.style.display = 'none';
      welcomePopup.style.display = 'block';
    });
  
    welcomeAcceptButton.addEventListener('click', function() {
      welcomePopup.style.display = 'none';
    });
  
    popup.style.display = 'block';
  });
  
  
