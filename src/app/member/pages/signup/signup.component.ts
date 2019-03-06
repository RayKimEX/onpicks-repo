import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {AppState} from '../../../core/store/app.reducer';
import {Store} from '@ngrx/store';
import {Signup, TryLogin} from '../../../core/store/auth/auth.actions';
import {AuthService} from '../../../core/service/auth/auth.service';

@Component({
  selector: 'onpicks-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  @ViewChild('inputEmail') inputEmail;
  @ViewChild('inputNickName') inputNickName;
  @ViewChild('inputPassword') inputPassword;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) { }

  ngOnInit() {

  }

  signUp(event: KeyboardEvent) {

    if (event === undefined) {

      this.store.dispatch( new Signup({
        email: this.inputEmail.nativeElement.value,
        nickname: this.inputNickName.nativeElement.value,
        password: this.inputPassword.nativeElement.value,
      }));

    } else {
      if ( event.key === 'Enter' ) {
        this.store.dispatch(new Signup(
          {
            email: this.inputEmail.nativeElement.value,
            nickname: this.inputNickName.nativeElement.value,
            password: this.inputPassword.nativeElement.value,
          }
        ));
      }
    }
  }

  loginWithSocial (xType) {
    this.authService.loginWithSocial(xType).subscribe( v => location.href = v.authorization_url);
  }


}
