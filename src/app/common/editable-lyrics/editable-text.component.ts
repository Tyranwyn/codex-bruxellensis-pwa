import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.css']
})
export class EditableTextComponent implements OnInit {

  @Input()
  text: string;
  @Input()
  buttonText: string;
  @Input()
  editable: boolean;
  editing: boolean;

  @Output()
  saved = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  save() {
    this.saved.emit(this.text);
    this.editing = !this.editing;
  }

}
