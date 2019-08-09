import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import {AppState} from '../../../core/store/app.reducer';
import {Store} from '@ngrx/store';
import {Signup, TryLogin} from '../../../core/store/auth/auth.actions';
import {AuthService} from '../../../core/service/auth/auth.service';
import {REGION_ID} from '../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  @ViewChild('inputEmail') inputEmail;
  @ViewChild('inputNickName') inputNickName;
  @ViewChild('inputPassword') inputPassword;

  constructor(
    @Inject(REGION_ID) public region: string,
    private store: Store<AppState>,
    private authService: AuthService,
  ) { }

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
