import { LitElement, html, css, property } from 'lit-element';

export const styles = css`
  :host {
    --dropdown-text-color: orange;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  .dropdown div {
    border: 1px solid #ccc;
    padding: 12px;
    color: inherit;
    font-size: 2rem;
  }

  .dropdown .btn {
    background-color: var(--global-dropdown-color, #2d2d2d);
    color: var(--dropdown-text-color);
    padding: 12px;
    font-family: inherit;
    font-size: 36px;
  }
`;

// @dynamic
export class XDropdown extends LitElement {
  @property({ type: Boolean }) visible = false;
  @property({ type: String }) title = 'dropdown';

  static get styles() { return styles; }

  render() {
    return html`
      <div class="dropdown">
        <button @click="${() => this.toggle()}" class="btn">${this.title}</button>
        ${this.visible ?
          html`
            <div>
              <slot></slot>
            </div>`
          : '' }
      </div>
    `;
  }

  toggle() {
    this.visible = !this.visible;
    this.dispatchEvent(new CustomEvent('visibleChange', { detail: this.visible }));
  }
}

customElements.define('x-dropdown', XDropdown);
