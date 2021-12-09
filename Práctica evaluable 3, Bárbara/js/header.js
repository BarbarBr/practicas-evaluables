const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>

    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>

  <header>
    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="acercadenos.html">Acerca de nos</a></li>
        <li><a href="osnososservizos.html">Os nosos servizos</a></li>
        <li><a href="#form">Contacto</a></li>
      </ul>
    </nav>
  </header>
`;

// Class declara su Headercomponente personalizado, con el constructormétodo y la súper palabra clave especial.
class Header extends HTMLElement {
  constructor() {
    super();
  }

  /*Hay cuatro devoluciones de llamada de ciclo de vida especiales para los elementos personalizados que podemos 
  utilizar para anexar rebaja cabecera de la página. De las más utilizadas. Se ejecuta cada vez que su elemento 
  personalizado se inserta en el DOM.*/ 
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
// Antes de que pueda comenzar a usar su elemento personalizado, deberá registrarlo con el customElements.define()método:
/*Este método toma al menos dos argumentos.

El primero es un DOMStringque usará al agregar el componente a la página, en este caso <header-component></header-component>,.

La siguiente es la clase del componente que creó anteriormente, aquí, la Headerclase.*/






/* class Header extends HTMLElement {
    constructor() {
      super();
    }
  }

  class Header extends HTMLElement {
    constructor() {
      super();
    }
  }
  
  customElements.define('header-component', Header);

  class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          nav {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
          }
  
          ul {
            padding: 0;
          }
          
          a {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
          
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        </style>
        <header>
          <nav>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="work.html">Work</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
  }
}

customElements.define('header-component', Header); */