import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppState} from '../../../core/store/app.reducer';
import {Store} from '@ngrx/store';
import {Login} from '../../../core/store/auth/auth.actions';


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
    private store: Store<AppState>
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

    this.store.dispatch( new Login(this.info));
  }

  checkBox(persistent) {
    this.info.isPersistent = persistent.view.nativeElement.checked;
  }
  login (event: KeyboardEvent) {


//
//     // Define a users schema
//     const user = new schema.Entity('users');
//
// // Define your comments schema
//     const comment = new schema.Entity('comments', {
//       commenter: user
//     });
//
// // Define your article
//     const article = new schema.Entity('articles', {
//       author: user,
//       comments: [comment]
//     });
//
//
//     const hello = {
//       'id': '123',
//       'author': {
//         'id': '1',
//         'name': 'Paul'
//       },
//       'title': 'My awesome blog post',
//       'comments': [
//         {
//           'id': '324',
//           'commenter': {
//             'id': '2',
//             'name': 'Nicole'
//           }
//         }
//       ]
//     };
//
//     const normalizedData = normalize(hello, article);
//
//     console.log(normalizedData);

 // }

    if (event === undefined) {

      this.store.dispatch( new Login(this.info));
    } else {
      if ( event.key === 'Enter' ) {
        this.store.dispatch( new Login(this.info));
      }
    }

  }

}
