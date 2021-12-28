class CurrentDateInfo extends HTMLElement {
  constructor() {
    super();
  }

  get currentFormattedDate() {
    const todayDate = new Date();
    return `${todayDate.getFullYear()}.${todayDate.getMonth()}.${todayDate.getDate()} ${todayDate.getHours()}:${todayDate.getMinutes()}:${todayDate.getSeconds()}`;
  }

  render() {
    this.innerHTML = `<p>Your date is ${this.getAttribute('dateTime') || this.currentFormattedDate} </p>`;
  }

  connectedCallback() {
    this.render();
  }
}

window.customElements.define('current-date-info', CurrentDateInfo);
