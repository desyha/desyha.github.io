class FooterContact extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <link rel="stylesheet" href="./css/footer.css" />
        <div id="contacts-content">
          <h2>Say Hi!</h2>
          <p>If you're interested, you can reach out and find out more about me here.</p>
          <div id="socials">
            <a href="https://github.com/desyha" target="_blank">
              <img src="./assets/icon-github.png" />
            </a>
            <a href="mailto: deasyahbila16@gmail.com" target="_blank">
              <img src="./assets/icon-email.png" />
            </a>
            <a
              href="https://www.linkedin.com/in/dea-syahbilah-a-75891b2b8"
              target="_blank"
            >
              <img src="./assets/icon-linkedin.png" />
            </a>
          </div>
        </div>
        `;
  }
}

customElements.define("footer-contacts", FooterContact);
