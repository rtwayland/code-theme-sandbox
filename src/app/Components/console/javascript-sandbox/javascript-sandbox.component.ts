import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-sandbox',
  templateUrl: './javascript-sandbox.component.html',
  styleUrls: ['./javascript-sandbox.component.scss']
})
export class JavascriptSandboxComponent implements OnInit {
  @Input() codeModule: string;
  @Input() theme: {};
  constructor() { }

  ngOnInit() {
  }

}
