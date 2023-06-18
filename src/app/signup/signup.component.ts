import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  password=true;
  confirmPassword=true;
  signupForm:any=FormGroup;
  responseMessage:any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<SignupComponent>,
    private ngxUiLoaderService: NgxUiLoaderService
    ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[null,[Validators.required, Validators.pattern(GlobalConstants.nameRagex)]],
      email:[null,[Validators.required, Validators.pattern(GlobalConstants.emailRagex)]],
      contactNbr:[null,[Validators.required, Validators.pattern(GlobalConstants.contactNbrRagex)]],
      password:[null, [Validators.required]],
      confirmPassword:[null, [Validators.required]],
    })
  }

  validateSubmit(){
    // need to impl here
  }

}
