import {
  ChangeDetectionStrategy,
  Component,
  ElementRef, Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import {AppState} from '../../../core/store/app.reducer';
import {Store} from '@ngrx/store';
import {TryLogin} from '../../../core/store/auth/auth.actions';
import {AuthService} from '../../../core/service/auth/auth.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {REGION_ID} from '../../../core/global-constant/app.config';


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
    @Inject(REGION_ID) public region: string,
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

  getQueryString(...xArguments) {
    let key = 'false';
    const res = {}
    let itm = null;
    // get the query string without the ?
    const qs = location.search.substring(1);
    // check for the key as an argument
    if (xArguments.length > 0 && xArguments[0].length > 1){

      key = arguments[0];
    }
    // make a regex pattern to grab key/value
    const pattern = /([^&=]+)=([^&]*)/g;
    // loop the items in the query string, either
    // find a match to the argument, or build an object
    // with key/value pairs

    while (itm = pattern.exec(qs)) {
      if ( key !== 'false' && decodeURIComponent(itm[1]) === key ) {
        return decodeURIComponent(itm[2]);
      } else if (key === 'false') {
        res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
      }
    }

    return key === 'false' ? res : null;
  }

  loginClick() {
    console.log('hello');
    // const url = new URL(location.href);
    const returnURL = this.getQueryString('return');
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
    this.authService.loginWithSocial(xType).subscribe( v => location.href = v.authorization_url);
  }

}
