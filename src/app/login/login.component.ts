import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: any = FormGroup;
  responseMessage: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<LoginComponent>,
    private ngxUiLoaderService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.pattern(GlobalConstants.userNameRagex)]],
      password: [null, [Validators.required]],
    })
  }

  handleSubmit() {
    this.ngxUiLoaderService.start();
    var formData = this.loginForm.value;
    var data = {
      userName: formData.userName,
      password: formData.password
    }
    this.userService.loginUser(data).subscribe((response: any) => {
      this.ngxUiLoaderService.stop();
      this.dialogRef.close();
      localStorage.setItem('token', response.token);
      this.router.navigate(['/cafe/dashboard']);
    }, (error) => {
      this.ngxUiLoaderService.stop();
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

}
