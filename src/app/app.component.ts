import { Component } from '@angular/core';
import { log } from "util";
import { ThemeService } from "./Services/theme.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedModule: string = 'js'
  themeSubscription: Subscription;
  themeColors: {};
  constructor(private themeService: ThemeService) {
    if (this.selectedModule == 'ts') {
      this.themeSubscription = this.themeService.tsThemeColors$
        .subscribe((colorTheme) => this.themeColors = colorTheme)
    } else if (this.selectedModule == 'css') {
      this.themeSubscription = this.themeService.cssThemeColors$
        .subscribe((colorTheme) => this.themeColors = colorTheme)
    } else if (this.selectedModule == 'sass') {
      this.themeSubscription = this.themeService.sassThemeColors$
        .subscribe((colorTheme) => this.themeColors = colorTheme)
    } else if (this.selectedModule == 'html') {
      this.themeSubscription = this.themeService.htmlThemeColors$
        .subscribe((colorTheme) => this.themeColors = colorTheme)
    } else {
      this.themeSubscription = this.themeService.jsThemeColors$
        .subscribe((colorTheme) => this.themeColors = colorTheme)
    }
  }

  onModuleSelected(language: string) {
    this.selectedModule = language;
    this.themeColors = this.themeService.getTheme(language);
  }

  // onColorSelected(colors) {
  //   this.themeColors = colors;
  // }
}
