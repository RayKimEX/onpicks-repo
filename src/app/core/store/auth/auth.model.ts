// 통화에 대한 정보

//
// export interface AppState {
//   currency: string;
//   bannerList: {
//     '1': 'http://exmaple.co.kr';
//   };
//   sessionState: SessionState;
// }
//
// export interface SessionState {
//   user: UserState;
//   auth: AuthState;
// }

import {UserState} from '../user/user.model';

export interface AuthState {
  user: UserState;
  isAuthenticated: boolean;
};



// export interface CategoryProductList {
//
//
// }

// RecommandProductList{
//
// }
//
//
// RecommandProductList{
//
// }
//
// PopularCategoryList {
//
// }
//
// PopularBrandList{
//
// }




// export interface CartState {
//   account: string;
//   savedShippingAddress: ShippingAddress[];
//   notificationList: [];
//   gradeInfo: string;
// }

// export interface ShippingAddress {
//   receiverName: string;
//   phoneNumber: string;
//   address: string;
//   detailAddress: string;
//   isDefault: boolean;
//
//   zipCode: string;
//
//   // 외국 사이트
//   city: string;
//   state: string;
//   country: string;
// }
// date_joined: "2018-10-25T06:23:51.494429Z"
// email: "dev@mojostudio.io"
// id: 1
// is_active: true
// last_login: "2018-10-31T07:40:46.294327Z"
// __proto__: Object
