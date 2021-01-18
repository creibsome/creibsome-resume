import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public darkMode: boolean;

  constructor() {
    let themeSettings = localStorage.getItem("ThemeSettings");
    if (themeSettings) {
      this.darkMode = themeSettings === 'dark';
    } else {
      this.darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    this.applyTheme();
  }

  public toggleTheme(): void {
    this.darkMode = !this.darkMode;
    this.applyTheme();
  }

  public applyTheme(): void {
    localStorage.setItem("ThemeSettings", this.darkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark', this.darkMode);
  }
}
