import {
  AfterViewInit, ChangeDetectionStrategy,
  Component, Inject, LOCALE_ID,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {TestService} from '../../../../../core/service/test/test.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../../../core/service/auth/auth.service';
import {AppState} from '../../../../../core/store/app.reducer';
import {select, Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {AuthState} from '../../../../../core/store/auth/auth.model';
import {Logout} from '../../../../../core/store/auth/auth.actions';
import {APP_BASE_HREF} from '@angular/common';
import {CURRENCY} from '../../../../../app.config';
import {Router} from '@angular/router';
import {UiState} from '../../../../../core/store/ui/ui.reducer';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})



export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('menu') menuRef;
  @ViewChild('shops') shopsRef;
  @ViewChild('form') form;

  signupForm: FormGroup;
  tempDiv;
  auth$: Observable<AuthState>;
  url$: Observable<any>;
  shopsRouterActive;



  // TODO: 이부분에 대해서 이방식이 맞는지? ngrx로 하려면, 한번더 update를 쳐야 되서 이방식이 아닌거같음 ->

  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    @Inject(LOCALE_ID) public locale: string,
    @Inject(APP_BASE_HREF) public region: string,
    @Inject(CURRENCY) public currency: string,
  ) {
    this.auth$ = this.store.pipe(
      select('auth')
    );
    this.url$ = this.store.pipe(
      select(state => state.ui.activeUrl)
    );
  }

  ngOnInit() {

    this.tempDiv = this.renderer.createElement('div');
  }


  ngAfterViewInit() {

  }

  outMenu() {
    this.renderer.removeChild(document.body, this.tempDiv);
    this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'none');
  }

  hoverMenu() {

    this.renderer.appendChild(document.body, this.tempDiv);
    this.renderer.setStyle(this.tempDiv, 'top', '0');
    this.renderer.setStyle(this.tempDiv, 'position', 'absolute');
    this.renderer.setStyle(this.tempDiv, 'display', 'block');
    this.renderer.setStyle(this.tempDiv, 'width', '100%');
    this.renderer.setStyle(this.tempDiv, 'height', document.body.clientHeight + 'px');
    this.renderer.setStyle(this.tempDiv, 'z-index', '10');
    this.renderer.setStyle(this.tempDiv, 'background-color', '#000000');
    this.renderer.setStyle(this.tempDiv, 'opacity', '0.5');
    this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'block');
  }


  logout() {
    this.store.dispatch(new Logout());
  }

}



