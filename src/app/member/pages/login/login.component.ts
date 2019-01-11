import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {AppState} from '../../../core/store/app.reducer';
import {Store} from '@ngrx/store';
import {TryLogin} from '../../../core/store/auth/auth.actions';
import {AuthService} from '../../../core/service/auth/auth.service';


@Component({
  selector: 'onpicks-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @ViewChild('inputEmail') inputEmail;
  @ViewChild('inputPassword') inputPassword;
  @ViewChild('isPersistent', {read : ElementRef}) isPersistent;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {

  }

  info = {
    email : '',
    password : '',
    isPersistent : false,
  };

  ngOnInit() {

  }

  loginClick() {
    this.info.email = this.inputEmail.nativeElement.value;
    this.info.password = this.inputPassword.nativeElement.value;

    this.store.dispatch( new TryLogin(this.info));
  }

  checkBox(persistent) {
    this.info.isPersistent = persistent.view.nativeElement.checked;
  }
  login (event: KeyboardEvent) {

    if (event === undefined) {

      this.store.dispatch( new TryLogin(this.info));
    } else {
      if ( event.key === 'Enter' ) {
        this.info.email = this.inputEmail.nativeElement.value;
        this.info.password = this.inputPassword.nativeElement.value;
        this.store.dispatch( new TryLogin(this.info));
      }
    }
  }

  loginWithSocial (xType) {
    this.authService.loginWithSocial(xType).subscribe( v => console.log(v));
  }

}
