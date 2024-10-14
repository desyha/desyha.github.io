class ProjectCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
        <style>
            #project-card img {
              width: 100%;
            }
              #project-card a {
              text-decoration: none;
              color: #2A2A2A;
            }
            @media only screen and (max-width: 640px){
              #project-card{
              padding: 1rem;
              }
            }
        </style>
        <div id="project-card">
          <a href="">
            <img src="" alt="Project Image" />
            <h3></h3>
          </a>
        </div>
      `;
  }

  static get observedAttributes() {
    return ["href", "src", "title"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const link = this.shadowRoot.querySelector("a");
    const img = this.shadowRoot.querySelector("img");
    const h3 = this.shadowRoot.querySelector("h3");

    if (name === "href") {
      link.href = newValue;
    }
    if (name === "src") {
      img.src = newValue;
    }
    if (name === "title") {
      h3.textContent = newValue;
    }
  }
}

customElements.define("project-card", ProjectCard);
