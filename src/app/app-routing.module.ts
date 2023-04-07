import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgCheckedAllComponent } from './ng-checked-all/ng-checked-all.component';
import { MultiselectDropdownComponent } from './multiselect-dropdown/multiselect-dropdown.component';

const routes: Routes = [
  // { path: 'selectCheckAll', component: NgCheckedAllComponent },
  {
    path: 'multiselect-dropdown',
    component: MultiselectDropdownComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
