const AnimatedButtonTemplate = ({type}) => `
  <template id="animated-button-template">
    <style>
       button {
         padding: 10px;
         min-width: 300px;
         font-weight: bold;
         border-radius: 5px;
         border: none;
         background: mediumseagreen;
         cursor: pointer;
         color: white;
         transition: background 300ms ease-in-out;
       }
       
       button:hover {
         background: seagreen;
       }
       
       button:disabled {
         background: darkred;
         cursor: not-allowed;
       }
       
       button:disabled:hover {
         background: indianred;
       }
    </style>
    <button is=${type}></button>
  </template>
`

const appendToHtmlNewDateBtnTemplate = () => {
  const newDateBtnHtml = AnimatedButtonTemplate({type: "show-new-date-btn"});
  const htmlBody = document.getElementsByTagName("body")[0];
  htmlBody.insertAdjacentHTML("afterbegin", newDateBtnHtml);
}

appendToHtmlNewDateBtnTemplate();
