import {InjectionToken} from '@angular/core';

export const SORT_LIST = new InjectionToken<any>( './core/global-constant/item-component.locale');
export const SORT_LIST_CONST = [
  {
    title: {
      ko : '인기순',
      en : 'Popular'
    },
    value: 'most_popular'
  },
  {
    title: {
      ko : '리뷰 많은순',
      en : 'Most Reviews'
    },
    value: 'most_reviewed'
  },
  {
    title: {
      ko : '평점순',
      en : 'Most Ratings'
    },
    value: 'top_rated'
  },
  {
    title: {
      ko : '가격 높은순',
      en : 'High Price'
    },
    value: 'price_high'
  },
  {
    title: {
      ko : '가격 낮은순',
      en : 'Low Price'
    },
    value: 'price_low'
  }
]

// sortMap = {
//   'most_popular' : {
//     ko : '인기순',
//     en : 'Popular'
//   },
//   'most_reviewed' : {
//     ko : '리뷰 많은순',
//     en : 'Most Reviews'
//   },
//   'top_rated' : {
//     ko : '평점순',
//     en : 'Most Ratings'
//   },
//   'price_high' : {
//     ko : '가격 높은순',
//     en : 'High Price'
//   },
//   'price_low' : {
//     ko : '가격 낮은순',
//     en : 'Low Price'
//   }
// };
