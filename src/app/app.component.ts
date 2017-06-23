import { Component, OnDestroy } from '@angular/core';
import { log } from "util";
import { ThemeService } from "./Services/theme.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  selectedModule: string = 'js'
  themeSubscription: Subscription;
  themeColors: {};

  constructor(private themeService: ThemeService) {
    this.themeSubscriber();
  }

  private themeSubscriber() {
    switch (this.selectedModule) {
      case 'ts':
        this.themeSubscription = this.themeService.tsThemeColors$
          .subscribe((colorTheme) => this.themeColors = colorTheme)
        break;
      case 'css':
        this.themeSubscription = this.themeService.cssThemeColors$
          .subscribe((colorTheme) => this.themeColors = colorTheme)
        break;
      case 'sass':
        this.themeSubscription = this.themeService.sassThemeColors$
          .subscribe((colorTheme) => this.themeColors = colorTheme)
        break;
      case 'html':
        this.themeSubscription = this.themeService.htmlThemeColors$
          .subscribe((colorTheme) => this.themeColors = colorTheme)
        break;
      default:
        this.themeSubscription = this.themeService.jsThemeColors$
          .subscribe((colorTheme) => this.themeColors = colorTheme)
        break;
    }
  }

  onModuleSelected(language: string) {
    this.selectedModule = language;
    this.themeService.updateTheme(language);
    this.themeSubscriber();
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  // onColorSelected(colors) {
  //   this.themeColors = colors;
  // }
}
