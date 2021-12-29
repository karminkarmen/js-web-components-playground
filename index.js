const dateBtnContainer = document.querySelector('.new-date-with-btn-container');
const newDatesContainer = document.querySelector('.new-dates-container');

let animatedButtonTemplate = document.getElementById('animated-button-template');

dateBtnContainer.insertBefore(animatedButtonTemplate.content.cloneNode(true), newDatesContainer);
