class Counter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      // Create button element
      const button = document.createElement('button');
      button.textContent = '0'; // Initial count
      button.style.cursor = 'pointer';
      button.addEventListener('click', this.increment.bind(this));
  
      // Append button to shadow DOM
      this.shadowRoot.appendChild(button);
  
      this.count = 0; // Initial count
    }
  
    increment() {
      this.count++;
      this.render();
    }
  
    render() {
      const button = this.shadowRoot.querySelector('button');
      button.textContent = this.count;
    }
  }
  
  customElements.define('my-counter-without', Counter);
  