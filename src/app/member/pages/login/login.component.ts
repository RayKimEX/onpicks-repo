import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/service/auth/auth.service';
import {HttpHeaders} from '../../../../../node_modules/@angular/common/http';
import {AppState} from '../../../core/store/app.reducer';
import {Store} from '@ngrx/store';
import {Login} from '../../../core/store/auth/auth.actions';

@Component({
  selector: 'onpicks-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {

  }

  login () {
    const info = { email : 'dev@mojostudioio', password : 'mojostudio0!'}
    this.store.dispatch( new Login(info));
  }

}
