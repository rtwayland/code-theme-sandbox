import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from "../../../Services/theme.service";

@Component({
  selector: 'app-html-controls',
  templateUrl: './html-controls.component.html',
  styleUrls: ['./html-controls.component.scss']
})
export class HtmlControlsComponent implements OnInit {
  @Input() theme: any;
  hexPattern: string | RegExp;
  hideGlobals: boolean = false;
  hideTags: boolean = false;
  hideComments: boolean = false;
  hideAttributes: boolean = false;
  hideEntities: boolean = false;
  languagesShareBGColor: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.hexPattern = '^(?:[0-9a-fA-F]{3}){1,2}$';
  }
  applyColorToLanguages() {
    if (this.languagesShareBGColor) {
      let color = this.theme.background;
      this.themeService.setAllBGColors(color);
    }
  }

}
