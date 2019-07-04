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
  titleFieldName = 'title';
  @Input()
  subtitleFieldName = 'subtitle';
  @Input()
  subtitlePlaceholder = 'Subtitle';
  @Input()
  titlePlaceholder = 'Title';
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
    const returnObject = {[this.titleFieldName]: this.title};
    if (this.subtitle) {
      returnObject[this.subtitleFieldName] = this.subtitle;
    }
    this.saved.emit(returnObject);
    this.editing = !this.editing;
  }
}
