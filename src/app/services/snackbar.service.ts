import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar : MatSnackBar) { }

  openSnackBar(message:string, action:string){
    if(action === 'error'){
      this.snackBar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:4000,
        panelClass:['red-snackbar']
      })
    }else{
      this.snackBar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:4000,
        panelClass:['green-snackbar']
      })
    }
  }
}
