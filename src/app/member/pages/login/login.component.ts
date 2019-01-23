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
import {Router} from '@angular/router';


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
    private authService: AuthService,
    private router: Router,
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
    const url = new URL(location.href);
    const returnURL = url.searchParams.get('return');
    console.log(returnURL);
    this.info.email = this.inputEmail.nativeElement.value;
    this.info.password = this.inputPassword.nativeElement.value;

    this.store.dispatch( new TryLogin({info : this.info, returnURL: returnURL }));
  }

  checkBox(persistent) {
    this.info.isPersistent = persistent.view.nativeElement.checked;
  }
  login (event: KeyboardEvent) {

    const url = new URL(location.href);
    const returnURL = url.searchParams.get('return');
    console.log(returnURL);
    if (event === undefined) {

      this.store.dispatch( new TryLogin({info : this.info, returnURL: returnURL }));
    } else {
      if ( event.key === 'Enter' ) {
        this.info.email = this.inputEmail.nativeElement.value;
        this.info.password = this.inputPassword.nativeElement.value;
        this.store.dispatch( new TryLogin({info : this.info, returnURL: returnURL }));
      }
    }
  }

  loginWithSocial (xType) {
    this.authService.loginWithSocial(xType).subscribe( v => this.router.navigateByUrl(v.authorization_url));
  }

}
