import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-module',
  templateUrl: './code-module.component.html',
  styleUrls: ['./code-module.component.scss']
})
export class CodeModuleComponent implements OnInit {
  @Input() codeModule: string;
  @Input() theme: {};
  background: string;
  defaultText: string;

  constructor() {
  }

  ngOnInit() {  }

}
