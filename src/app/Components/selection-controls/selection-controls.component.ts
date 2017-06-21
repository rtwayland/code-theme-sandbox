import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ThemeService } from "../../Services/theme.service";

@Component({
  selector: 'app-selection-controls',
  templateUrl: './selection-controls.component.html',
  styleUrls: ['./selection-controls.component.scss']
})
export class SelectionControlsComponent implements OnInit, OnChanges {
  @Input() codeModule: string;
  @Input() theme: {};
  propertyArray: string[];
  hexPattern: string|RegExp;


  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.hexPattern = '([0-9A-Fa-f]{3}){1,2}';
  }
  ngOnChanges() {
    this.propertyArray = Object.keys(this.theme);
  }
  setColor(propertyName: string, hexCode: string) {
    if (hexCode.match(/([0-9A-Fa-f]{3}){1,2}/) && this.theme.hasOwnProperty(propertyName)) {
      this.theme[propertyName] = hexCode;

      if (this.codeModule == 'ts') {
        this.themeService.setTSTheme(this.theme);
      } else if (this.codeModule == 'css') {
        this.themeService.setCSSTheme(this.theme);
      } else if (this.codeModule == 'sass') {
        this.themeService.setSASSTheme(this.theme);
      } else if (this.codeModule == 'html') {
        this.themeService.setHTMLTheme(this.theme);
      } else {
        this.themeService.setJSTheme(this.theme);
      }
    }

  }
}
