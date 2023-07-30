import { Component } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidationErrors, Validators,ValidatorFn } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogSkipTestsComponent } from './components/user-form-dialog-skip-tests/user-form-dialog-skip-tests.component';
import { User } from './models';


const ELEMENT_DATA: User[] = [
  {
  id:1,
  name:'cesar',
  surname:'gallardo',
  email:'cgallardos@hotmail.es',
  password:'123456'
  },
  
  {
    id:2,
    name:'Andres',
    surname:'garcia',
    email:'cgallardos@hotmail.es',
    password:'123456'
    }

  ];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
public Users: User[] = ELEMENT_DATA;
  constructor( private matDialog: MatDialog  ){}



  OnCreateUser(): void{
    this.matDialog.open(UserFormDialogSkipTestsComponent)

     this.matDialog
     .open( UserFormDialogSkipTestsComponent )
     .afterClosed()
     .subscribe({
      next:(v)=>{
        if(v){
          this.Users =[
            ...this.Users,
            {
            id: this.Users.length + 1,
            name:v.name,
            email:v.email,
            password:v.password,
            surname:v.surname
          },
          

        
      ];
      console.log('recibimos valor',v);
    }else{

      console.log('se cancelo');
    }

    },

  });
  }

     




}