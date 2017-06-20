import { Component } from '@angular/core';
import { log } from "util";
import { ThemeService } from "./Services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedModule: string = 'js'
  themeColors: {} = this.themeService.getTheme('js');

  constructor(private themeService: ThemeService) { }

  onModuleSelected(language: string) {
    this.selectedModule = language;
    this.themeColors = this.themeService.getTheme(language);
  }

  // onColorSelected(colors) {
  //   this.themeColors = colors;
  // }
}
