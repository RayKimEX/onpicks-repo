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

export const REVIEW_SORT_LIST = new InjectionToken<any>( './core/global-constant/item-component.locale');
export const REVIEW_SORT_LIST_CONST = [
  {
    title : {
      ko : '최신순',
      en : 'Newest'
    },
    value : 'created'
  },
  {
    title : {
      ko : '별점 낮은순',
      en : 'Lowest to Highest'
    },
    value : '-rating'
  },
  {
    title : {
      ko : '별점 높은순',
      en : 'Highest to Lowest'
    },
    value : 'rating'
  }
]

