import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() title = '';
  @Input() DetectedArray: any[] = [];
  @Output() SelectedData = new EventEmitter<any>();
  anyName = new FormControl('');
  DetectedData(e: any) {
    this.SelectedData.emit(e);
    console.log(e);
  }
  identify(ind: any, item: any) {
    return item.label;
  }
}
// @Input() all: boolean = true;
