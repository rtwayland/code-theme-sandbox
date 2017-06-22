import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from "../../../Services/theme.service";

@Component({
  selector: 'app-javascript-controls',
  templateUrl: './javascript-controls.component.html',
  styleUrls: ['./javascript-controls.component.scss']
})
export class JavascriptControlsComponent implements OnInit {
  @Input() theme: any;
  hexPattern: string | RegExp;
  hideGlobals: boolean = false;
  hideNotation: boolean = false;
  hideComments: boolean = false;
  hideKeywords: boolean = false;
  hideFunctions: boolean = false;
  hideVariables: boolean = false;
  hideStrings: boolean = false;
  grammarsShareDefaultColor: boolean = false;
  languagesShareBGColor: boolean = false;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.hexPattern = '^(?:[0-9a-fA-F]{3}){1,2}$';
  }
  applyColorToLanguages() {
    if (this.languagesShareBGColor) {
      let color = this.theme.background;
      this.themeService.setAllBGColors(color);
    }
  }
  applyColorToGrammars() {
    if (this.grammarsShareDefaultColor) {
      let color = this.theme.defaultText;
      this.theme.braces = color;
      this.theme.brackets = color;
      this.theme.parenthesis = color;
      this.theme.semicolon = color;
      this.theme.dot = color;
      this.theme.comma = color;
      this.theme.badChar = color;
    }
  }
}
