import {
  AfterViewInit,
  Component,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {TestService} from '../../../../core/service/test/test.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../../core/service/auth/auth.service';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('menu') menuRef;
  @ViewChild('shops') shopsRef;
  signupForm: FormGroup;
  @ViewChild('form') form;

  tempDiv;
  // TODO: 이부분에 대해서 이방식이 맞는지? ngrx로 하려면, 한번더 update를 쳐야 되서 이방식이 아닌거같음 ->

  constructor(
    private renderer: Renderer2,
    private testService: TestService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.tempDiv = this.renderer.createElement('div');
  };


  ngAfterViewInit() {
    console.log(this.signupForm);
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

  login() {
    // console.log('나는 로그인이다');
    this.testService.login();
  }


  getProfile() {
    this.authService.getProfile();
  }


}



