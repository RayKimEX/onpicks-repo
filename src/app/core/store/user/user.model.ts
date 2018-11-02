
// Acount -> customer, seller
export interface UserState {
  email: string;
  nickName: string;

  // thumbnailLargeImgSrc: string;
  thumbnailSmallImgSrc: string;

  // account: string;
  // savedShippingAddress: ShippingAddress[];
  // notificationList: [];
  // gradeInfo: string;
}


export interface UserSignUpAPI {
  email: string;
  nickname: string;
  password: string;

  // account: string;
  // savedShippingAddress: ShippingAddress[];
  // notificationList: [];
  // gradeInfo: string;
}
