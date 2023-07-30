import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormDialogSkipTestsComponent } from './components/user-form-dialog-skip-tests/user-form-dialog-skip-tests.component';
import { UserFormDialogSkipTestsTableComponent } from './components/user-form-dialog-skip-tests-table/user-form-dialog-skip-tests-table.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogSkipTestsComponent,
    UserFormDialogSkipTestsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    UsersComponent,
  ]
})
export class UsersModule { }
