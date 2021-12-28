class ShowNewDateButton extends HTMLButtonElement {
  constructor() {
    super();
    this.innerText = `Click to render new data`;
    this.onclick = this.onClickHandler;
    this.dateElementsCounter = 0;
  }

  get dateContainer() {
    return document.getElementsByClassName('date-container')[0];
  }

  checkIfBtnShouldBeDisabled() {
    if (this.dateElementsCounter >= 5) {
      this.disabled = true;
    }
  }

  onClickHandler() {
    const newDateElement = document.createElement('current-date-info');
    this.dateContainer.appendChild(newDateElement);
    this.dateElementsCounter++;
    this.checkIfBtnShouldBeDisabled();
  }
}

window.customElements.define('show-new-date-btn', ShowNewDateButton, {extends: 'button'});

