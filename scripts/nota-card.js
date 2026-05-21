class NotaCard extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const id       = this.dataset.id
    const titulo   = this.dataset.titulo
    const contenido = this.dataset.contenido
    const fecha    = this.dataset.fecha
    const favorita = this.dataset.favorita === 'true'

    this.innerHTML = `
      <div class="nota-card" data-id="${id}">
        <h3 class="nota-titulo">${titulo}</h3>
        <p class="nota-contenido">${contenido}</p>
        <span class="nota-fecha">${fecha}</span>
        <div class="nota-acciones">
          <button class="btn-favorita" data-id="${id}">
            ${favorita ? '★' : '☆'}
          </button>
          <button class="btn-eliminar" data-id="${id}">Eliminar</button>
        </div>
      </div>
    `
  }
}

customElements.define('nota-card', NotaCard)