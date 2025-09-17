 // menu section
  function menuToggle() {
    var menuIcon = document.getElementById('menuicon');
    var mainMenu = document.getElementById('mainmenu');
    var closeIcon = document.getElementById('closeicon');


    mainMenu.classList.toggle('opacity-0')
    mainMenu.classList.toggle('duration-700')
    closeIcon.classList.toggle('hidden')
    menuIcon.classList.toggle('hidden')

  }

// Accordion section
   function toggleAnswer(element) {
      const answer = element.querySelector('[name = "answer"]')
      answer.classList.toggle('hidden')
    }