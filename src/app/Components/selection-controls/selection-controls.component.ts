import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selection-controls',
  templateUrl: './selection-controls.component.html',
  styleUrls: ['./selection-controls.component.scss']
})
export class SelectionControlsComponent implements OnInit {
  @Input() codeModule: string;
  @Output() onColorSelected: EventEmitter<{}> = new EventEmitter();
  jsColors: {} = {
    js: true,
    background: 'fff',
    defaultText: '000',
    arrowFunction: '000',
    badChar: '000',
    blockComment: '000',
    braces: '000',
    brackets: '000',
    className: '000',
    comma: '000',
    docComment: '000',
    docMarkup: '000',
    docTag: '000',
    dot: '000',
    globalFunction: '000',
    globalVariable: '000',
    instanceMemberFunction: '000',
    instanceMemberVariable: '000',
    invalidStringEscape: '000',
    keyword: '000',
    label: '000',
    lineComment: '000',
    localVariable: '000',
    moduleName: '000',
    number: '000',
    operation: '000',
    parameter: '000',
    parenthesis: '000',
    regex: '000',
    semicolon: '000',
    staticMemberFunction: '000',
    staticMemberVariable: '000',
    string: '000',
    validStringEscape: '000'
  };
  tsColors: {} = {
    ts: true,
    background: 'fff',
    defaultText: '000',
    arrowFunction: '000',
    badChar: '000',
    blockComment: '000',
    braces: '000',
    brackets: '000',
    className: '000',
    comma: '000',
    docComment: '000',
    docMarkup: '000',
    docTag: '000',
    dot: '000',
    globalFunction: '000',
    globalVariable: '000',
    instanceMemberFunction: '000',
    instanceMemberVariable: '000',
    interfaceName: '000',
    invalidStringEscape: '000',
    keyword: '000',
    label: '000',
    lineComment: '000',
    localVariable: '000',
    moduleName: '000',
    number: '000',
    operation: '000',
    parameter: '000',
    parenthesis: '000',
    regex: '000',
    semicolon: '000',
    staticMemberFunction: '000',
    staticMemberVariable: '000',
    string: '000',
    typeParameter: '000',
    validStringEscape: '000'
  };
  cssColors: {} = {
    css: true,
    background: 'fff',
    defaultText: '000',
    badChar: '000',
    braces: '000',
    brackets: '000',
    colon: '000',
    comma: '000',
    comment: '000',
    dot: '000',
    function: '000',
    hexColor: '000',
    idSelector: '000',
    identifier: '000',
    important: '000',
    keyword: '000',
    number: '000',
    operation: '000',
    parenthesis: '000',
    propertyName: '000',
    propertyValue: '000',
    pseudoSelector: '000',
    semicolon: '000',
    string: '000',
    tagName: '000',
    unicodeRange: '000',
    url: '000'
  };
  sassColors: {} = {
    sass: true,
    background: 'fff',
    defaultText: '000',
    badChar: '000',
    braces: '000',
    brackets: '000',
    colon: '000',
    comma: '000',
    comment: '000',
    default: '000',
    dot: '000',
    extend: '000',
    function: '000',
    global: '000',
    hexColor: '000',
    idSelector: '000',
    identifier: '000',
    important: '000',
    interpolation: '000',
    keyword: '000',
    mixin: '000',
    number: '000',
    operation: '000',
    optional: '000',
    parenthesis: '000',
    propertyName: '000',
    propertyValue: '000',
    pseudoSelector: '000',
    semicolon: '000',
    string: '000',
    tagName: '000',
    unicodeRange: '000',
    url: '000',
    variable: '000'
  };
  htmlColors: {} = {
    html: true,
    background: 'fff',
    defaultText: '000',
    attributeName: '000',
    attributeValue: '000',
    comment: '000',
    entityRef: '000',
    htmlCode: '000',
    tag: '000',
    tagName: '000',
    tagTreeLevel1: '000',
    tagTreeLevel2: '000',
    tagTreeLevel3: '000',
    tagTreeLevel4: '000',
    tagTreeLevel5: '000',
    tagTreeLevel6: '000'
  };

  constructor() { }

  ngOnInit() {
  }

  setColor() {
    if (this.codeModule == 'ts') {
      this.onColorSelected.emit(this.tsColors);
    } else if (this.codeModule == 'css') {
      this.onColorSelected.emit(this.cssColors);
    } else if (this.codeModule == 'sass') {
      this.onColorSelected.emit(this.sassColors);
    } else if (this.codeModule == 'html') {
      this.onColorSelected.emit(this.htmlColors);
    } else {
      this.onColorSelected.emit(this.jsColors);
    }

  }
}
