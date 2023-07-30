import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormDialogSkipTestsComponent } from './user-form-dialog-skip-tests.component';

describe('UserFormDialogSkipTestsComponent', () => {
  let component: UserFormDialogSkipTestsComponent;
  let fixture: ComponentFixture<UserFormDialogSkipTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormDialogSkipTestsComponent]
    });
    fixture = TestBed.createComponent(UserFormDialogSkipTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
