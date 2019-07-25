import {ChangeDetectionStrategy, Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {DisplayAlertMessage} from '../../../core/store/ui/ui.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/store/app.reducer';

@Component({
  selector: 'onpicks-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private store: Store<AppState>,
    private httpClient: HttpClient,
  ) {

  }

  ngOnInit() {

  }

  passwordReset(xEmail) {
    this.httpClient.post('/api/customers/password/recover/', { email : xEmail.value, redirect_url : 'http://www.naver.com'})
      .subscribe( (response) => {
        if (this.locale === 'ko') {
          this.store.dispatch(new DisplayAlertMessage( xEmail.value + '로 비밀번호 재설정을 위한 링크를 전송했습니다. '));
        } else {
          this.store.dispatch(new DisplayAlertMessage( 'We’ve sent an email with instructions on how to reset your password.We’ve sent an email with instructions on how to reset your password.'));
        }
      }, response => {
        this.store.dispatch(new DisplayAlertMessage(response.error.email));
      });
  }

}
