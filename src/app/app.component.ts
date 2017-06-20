import { Component } from '@angular/core';
import { log } from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedModule: string = 'js'
  themeColors: {};

  onModuleSelected(language: string) {
    this.selectedModule = language;
  }

  onColorSelected(colors) {
    this.themeColors = colors;
  }
}
