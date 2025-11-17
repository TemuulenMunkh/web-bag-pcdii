class placeCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' }); // Shadow DOM үүсгэх
    const template = document.getElementById('place-card-template');
    const templateContent = template.content.cloneNode(true);
    shadow.appendChild(templateContent);
  }