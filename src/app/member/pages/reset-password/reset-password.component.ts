import {Component, OnInit, ChangeDetectionStrategy, ViewChildren, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {DisplayAlertMessage} from '../../../core/store/ui/ui.actions';

@Component({
  selector: 'onpicks-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnInit {

  @ViewChild('inputPasswordOrigin', {read : ElementRef}) inputPasswordOrigin;
  @ViewChild('inputPasswordConfirm', {read : ElementRef}) inputPasswordConfirm;

  uuid;
  secret;

  queryParams$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private store: Store<any>
  ) {
    this.queryParams$ = this.route.queryParams
      .subscribe((val: { uuid, secret }) => {
         this.uuid = val.uuid;
         this.secret = val.secret;
      });
  }

  ngOnInit() {

  }

  passwordReset() {
    console.log(this.inputPasswordOrigin);
    if ( this.inputPasswordOrigin.nativeElement.children[0].value !== this.inputPasswordConfirm.nativeElement.children[0].value){
      this.store.dispatch(new DisplayAlertMessage('비밀번호가 같지 않습니다.'));
      return ;
    }
    this.httpClient.post('/api/customers/password/reset/',
      {
        password : this.inputPasswordOrigin.nativeElement.children[0].value,
        uuid: this.uuid,
        secret: this.secret
      }).subscribe( response => {
        this.store.dispatch(new DisplayAlertMessage('정상적으로 변경되었습니다.'));
        this.router.navigate(['/shops']);
      }, response => {
        this.store.dispatch(new DisplayAlertMessage('잘못된 접근 방식입니다.'));
      });
  }

}
