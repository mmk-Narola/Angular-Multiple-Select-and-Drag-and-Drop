import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-checked-all',
  templateUrl: './ng-checked-all.component.html',
  styleUrls: ['./ng-checked-all.component.scss'],
})
export class NgCheckedAllComponent implements OnInit {
  isMasterSel: boolean | undefined;
  categoryList: any;
  checkedCategoryList: any;
  constructor() {}

  ngOnInit(): void {
    this.isMasterSel = false;
    this.categoryList = [
      { id: 1, value: 'PHP', isSelected: true },
      { id: 2, value: 'Laravel', isSelected: false },
      { id: 3, value: 'Angular', isSelected: false },
      { id: 4, value: 'React', isSelected: false },
      { id: 5, value: 'Vue', isSelected: false },
      { id: 6, value: 'JQuery', isSelected: false },
      { id: 7, value: 'Javascript', isSelected: false },
    ];

    this.getCheckedItemList();
  }

  checkUncheckAll() {
    for (var i = 0; i < this.categoryList.length; i++) {
      this.categoryList[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.isMasterSel = this.categoryList.every(function (item: any) {
      return item.isSelected == true;
    });

    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedCategoryList = [];
    for (var i = 0; i < this.categoryList.length; i++) {
      if (this.categoryList[i].isSelected)
        this.checkedCategoryList.push(this.categoryList[i]);
    }
    this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  }
}
