import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() onModuleSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  setCodeSelection(language: string) {
    // console.log(language);
    this.onModuleSelected.emit(language);
  }
}
