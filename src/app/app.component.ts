import { Component, OnInit } from "@angular/core";

import "@clr/core/icon/register.js";
import "@clr/core/progress-circle/register.js";
import "@clr/core/alert/register.js";
import "@clr/core/button/register.js";

// This code would ideally be loaded in main.ts before everything else
// For demonstration it is here with the rest of the theming logic
import cssVars from "css-vars-ponyfill";
import "./dropdown";
cssVars({
  shadowDOM: true,
  watch: true,
});

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  showDropdown = true;
  textColor = "blue";
  lightTheme = true;
  circleValue = "12";

  ngOnInit() {
    setInterval(() => {
      this.circleValue = Math.floor(Math.random() * (100 - 1)).toString();
    }, 250);
  }

  toggleTheme() {
    this.lightTheme = !this.lightTheme;

    // This forces ShadyCSS to update all web components using shadow DOM
    (window as any).ShadyCSS.styleDocument({
      "--root-color": this.lightTheme ? "#2d2d2d" : "#fff",
      "--root-background-color": this.lightTheme ? "#fff" : "#2d2d2d",
      "--dropdown-color": this.lightTheme ? "#2d2d2d" : "#fff",
      "--dropdown-background-color": this.lightTheme ? "#ccc" : "#000",
    });

    // This forces the CSS Vars Ponyfill to update global styles
    // TODO: need to clean up old style tags previously added
    const newStyle = document.createElement("style");
    document.head.appendChild(newStyle);
    newStyle.id = "ie-theme";
    newStyle.innerHTML = `
      :root {
        --root-color: ${this.lightTheme ? "#2d2d2d" : "#fff"};
        --root-background-color: ${this.lightTheme ? "#fff" : "#2d2d2d"};
        --dropdown-color: ${this.lightTheme ? "#2d2d2d" : "#fff"};
        --dropdown-background-color: ${this.lightTheme ? "#ccc" : "#000"};
      }
    `;
  }

  // This example updates a individual components shadow dom
  // This works until the element is added or removed and then "forgets" its state
  // Because of this it is ideal we use a flat global structure for CSS Vars
  toggleTextColor() {
    this.textColor = this.textColor === "#000" ? "#fff" : "#000";
    (window as any).ShadyCSS.styleSubtree(
      document.querySelector("x-dropdown"),
      { "--dropdown-color": this.textColor }
    );
  }
}
