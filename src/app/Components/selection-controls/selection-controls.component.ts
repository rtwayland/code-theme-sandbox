import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeService } from "../../Services/theme.service";

@Component({
  selector: 'app-selection-controls',
  templateUrl: './selection-controls.component.html',
  styleUrls: ['./selection-controls.component.scss']
})
export class SelectionControlsComponent implements OnInit {
  @Input() codeModule: string;
  @Input() theme: {};
  // @Output() onColorSelected: EventEmitter<{}> = new EventEmitter();
  jsColors: {};
  tsColors: {};
  cssColors: {};
  sassColors: {};
  htmlColors: {};

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
  }

  setColor(propertyName: string, hexCode: string) {
    if (hexCode.match(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/ig)) {
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
