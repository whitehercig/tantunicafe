document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu button');
    
    // Прокрутка к секции
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Модальное окно
    const cards = document.querySelectorAll('.card');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="" alt="Изображение" class="modal-img">
        <h3 class="modal-title"></h3>
        <p class="modal-description"></p>
      </div>
    `;
    document.body.appendChild(modal);
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img').src;
        const title = card.querySelector('h3').innerText;
        const description = card.querySelector('p').innerText;
  
        modal.querySelector('.modal-img').src = img;
        modal.querySelector('.modal-title').innerText = title;
        modal.querySelector('.modal-description').innerText = description;
  
        modal.style.display = 'block';
      });
    });
  
    modal.querySelector('.close').addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  