import { Component, Input } from '@angular/core';
import { User } from '../../models';




@Component({
  selector: 'app-user-form-dialog-skip-tests-table',
  templateUrl: './user-form-dialog-skip-tests-table.component.html',
  styleUrls: ['./user-form-dialog-skip-tests-table.component.scss']
})
export class UserFormDialogSkipTestsTableComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email'];

  @Input()
  dataSource: User[]=[] ;

}
