class NewDateButton extends HTMLButtonElement {
  constructor() {
    super();
    this.innerText = 'Click to render new date';
    this.onclick = this.onClickHandler;
    this.clickCounter = 0;
  }

  get dateContainer() {
    return document.querySelector('.new-dates-container');
  }

  checkIfBtnShouldBeDisabled() {
    if (this.clickCounter >= 5) {
      this.disabled = true;
      this.innerText = 'You cannot add more dates to the list';
    }
  }

  onClickHandler() {
    if (this.clickCounter < 5) {
      const newDateElement = document.createElement('current-date-info');
      this.dateContainer.appendChild(newDateElement);
      this.clickCounter++;
      this.checkIfBtnShouldBeDisabled();
    }
  }
}

window.customElements.define('show-new-date-btn', NewDateButton, {extends: 'button'});

