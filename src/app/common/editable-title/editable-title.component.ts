import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editable-title',
  templateUrl: './editable-title.component.html',
  styleUrls: ['./editable-title.component.css']
})
export class EditableTitleComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  subTitle: string;
  @Input()
  buttonText: string;
  @Input()
  editable: boolean;
  editing: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
