class Headernav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <link rel="stylesheet" href="./css/header.css" />
    <header>
      <div id="left">
        <h1><a href="./index.html">Dea's Portfolio</a></h1>
      </div>
      <div id="right">
        <ul>
          <li><a href="./index.html#about">About Me</a></li>
          <li><a href="./index.html#projects">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </div>
    </header>
    `;
  }
}

customElements.define("header-nav", Headernav);
