import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-sandbox',
  templateUrl: './html-sandbox.component.html',
  styleUrls: ['./html-sandbox.component.scss']
})
export class HtmlSandboxComponent implements OnInit {
  @Input() theme: {};
  htmlEntityExample: string = '&#x00B7; &Alpha;';
  constructor() { }

  ngOnInit() {
  }

}
