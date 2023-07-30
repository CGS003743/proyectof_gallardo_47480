import { Component } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidationErrors, Validators,ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-user-form-dialog-skip-tests',
  templateUrl: './user-form-dialog-skip-tests.component.html',
  styleUrls: ['./user-form-dialog-skip-tests.component.scss']
})
export class UserFormDialogSkipTestsComponent {
  
  nameControl =new FormControl(null,[
    Validators.required,
   Validators.minLength(3),
    this.noHomeroValidator(),
  ]);
  surnameControl =new FormControl(null,[Validators.required]);
  emailControl =new FormControl(null,[Validators.required]);
  passwordControl =new FormControl(null,[Validators.required]);

  userForm =  new FormGroup({
 name:this.nameControl,
 surname:this.surnameControl,
 email:this.emailControl,
 password:this.passwordControl,
 

})

noHomeroValidator():ValidatorFn{
return(control: AbstractControl): ValidationErrors| null =>{

if(control instanceof FormControl){
if (
  typeof control.value ==='string'
   && control.value?.toLowerCase().includes('homero')){
  return{
 noHomero:true,
  }

}
}
  return null;
};

}

constructor(private dialogRef:MatDialogRef<UserFormDialogSkipTestsComponent>){}

onSubmit():void{

  if(this.userForm.invalid){
    this.userForm.markAllAsTouched();

  }else{

   
  this.dialogRef.close(this.userForm.value);

  }
}


}


