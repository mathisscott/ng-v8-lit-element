import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showDropdown = true;
  textColor = 'blue';
  lightTheme = true;

  toggleTheme() {
    this.lightTheme = !this.lightTheme;

    (window as any).ShadyCSS.styleDocument({
      '--root-color': this.lightTheme ? '#2d2d2d' : '#fff',
      '--root-background-color': this.lightTheme ? '#fff' : '#2d2d2d',
      '--dropdown-color': this.lightTheme ? '#2d2d2d' : '#fff',
      '--dropdown-background-color': this.lightTheme ? '#ccc' : '#000',
    });
  }

  toggleTextColor() {
    this.textColor = this.textColor === '#000' ? '#fff' : '#000';
    (window as any).ShadyCSS.styleSubtree(document.querySelector('x-dropdown'), {'--dropdown-color' : this.textColor});
  }
}
