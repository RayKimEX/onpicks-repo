import {Component, OnInit, ViewChild} from '@angular/core';
import {AppState} from '../../../core/store/app.reducer';
import {Store} from '@ngrx/store';
import {Signup} from '../../../core/store/auth/auth.actions';

@Component({
  selector: 'onpicks-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('inputEmail') inputEmail;
  @ViewChild('inputNickName') inputNickName;
  @ViewChild('inputPassword') inputPassword;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {

  }

  signUp() {
    this.store.dispatch( new Signup(
      {
        email: this.inputEmail.nativeElement.value,
        nickname: this.inputNickName.nativeElement.value,
        password: this.inputPassword.nativeElement.value,
      }
    ));
  }



}
