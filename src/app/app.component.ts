import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showDropdown = true;
  backgroundColor = 'green';
  textColor = 'blue';

  toggleBackgroundColor() {
    this.backgroundColor = this.backgroundColor === 'purple' ? 'green' : 'purple';
    (window as any).ShadyCSS.styleDocument({'--global-dropdown-color' : this.backgroundColor});
  }

  toggleTextColor() {
    this.textColor = this.textColor === 'blue' ? 'black' : 'blue';
    (window as any).ShadyCSS.styleSubtree(document.querySelector('x-dropdown'), {'--dropdown-text-color' : this.textColor});
  }
}