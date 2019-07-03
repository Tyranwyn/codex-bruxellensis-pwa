import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable-title',
  templateUrl: './editable-title.component.html',
  styleUrls: ['./editable-title.component.css']
})
export class EditableTitleComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  subtitle: string;
  @Input()
  buttonText: string;
  @Input()
  editable: boolean;
  editing: boolean;

  @Output()
  saved = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  save() {
    this.saved.emit({title: this.title, subtitle: this.subtitle});
    this.editing = !this.editing;
  }
}
