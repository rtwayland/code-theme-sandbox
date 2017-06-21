import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-sandbox',
  templateUrl: './typescript-sandbox.component.html',
  styleUrls: ['./typescript-sandbox.component.scss']
})
export class TypescriptSandboxComponent implements OnInit {
  @Input() codeModule: string;
  @Input() theme: {};
  constructor() { }

  ngOnInit() {
  }

}
