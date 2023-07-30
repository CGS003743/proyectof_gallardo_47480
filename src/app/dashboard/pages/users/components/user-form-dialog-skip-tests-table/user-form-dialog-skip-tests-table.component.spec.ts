import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormDialogSkipTestsTableComponent } from './user-form-dialog-skip-tests-table.component';

describe('UserFormDialogSkipTestsTableComponent', () => {
  let component: UserFormDialogSkipTestsTableComponent;
  let fixture: ComponentFixture<UserFormDialogSkipTestsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormDialogSkipTestsTableComponent]
    });
    fixture = TestBed.createComponent(UserFormDialogSkipTestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
