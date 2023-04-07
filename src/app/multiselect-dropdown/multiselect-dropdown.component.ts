import { Component, Input, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.scss'],
})
export class MultiselectDropdownComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSetting: IDropdownSettings = {};
  dropDownForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dropdownList = [
      { id: 1, value: 'HTML' },
      { id: 2, value: 'CSS' },
      { id: 3, value: 'Javascripts' },
      { id: 4, value: 'Angular' },
      { id: 5, value: 'React' },
      { id: 6, value: 'Vue' },
      { id: 7, value: 'Angular Material' },
      { id: 8, value: 'Bootstrap' },
      { id: 9, value: 'SCSS' },
      { id: 10, value: 'Node' },
    ];

    this.dropdownSetting = {
      idField: 'id',
      textField: 'value',
      enableCheckAll: true,
      selectAllText: 'Select All Items From List',
      unSelectAllText: 'UnSelect All Items From List',
      allowSearchFilter: true,
    };

    // this.selectedItems = [
    //   { id: 3, value: 'Javascripts' },
    //   { id: 4, value: 'Angular' },
    // ];

    // this.dropDownForm = this.fb.group({
    //   myItems: [this.selectedItems],
    // });
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onItemDeSelect(item: any) {
    console.log('onItemDeSelect', item);
  }
  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }
  onUnSelectAll() {
    console.log('onUnSelectAll fires');
  }
}
