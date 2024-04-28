class Counter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    // Create template element
    const template = document.createElement("template");
    template.innerHTML = `
        <style>
          button {
            cursor: pointer;
          }
        </style>
        <button><slot></slot></button>
      `;

    // Append template content to shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.button = this.shadowRoot.querySelector("button");
    this.count = parseInt(this.getAttribute("count")) || 0;
    this.render();
    this.button.addEventListener("click", this.increment.bind(this));
  }

  increment() {
    this.count++;
    this.render();
  }

  render() {
    this.button.textContent = this.count;
  }

  static get observedAttributes() {
    return ["count"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "count") {
      this.count = parseInt(newValue);
      this.render();
    }
  }
}

customElements.define("my-counter", Counter);
