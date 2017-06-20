import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
  @Input() codeModule: string;
  @Input() theme: {};
  constructor() { }

  ngOnInit() {
  }

}
