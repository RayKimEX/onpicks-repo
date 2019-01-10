import { Action } from '@ngrx/store';
import {
  GET_FIRST_CATEGORY,
  GET_FIRST_CATEGORY_SUCCESS,
  GET_FOURTH_CATEGORY,
  GET_FOURTH_CATEGORY_SUCCESS,
  GET_SECOND_CATEGORY,
  GET_SECOND_CATEGORY_SUCCESS,
  GET_THIRD_CATEGORY,
  GET_THIRD_CATEGORY_SUCCESS, SearchActions
} from './search.actions';

import {normalize, schema} from 'normalizr';

export interface SearchState {
  categoryList: any;
}

export const initialState: SearchState = {
  categoryList: {
    status : {
      firstCategory : 'notLoaded',
      secondCategory : 'notLoaded',
      thirdCategory : 'notLoaded',
      fourthCategory : 'notLoaded',
    }
  },
};

export function SearchReducer(state = initialState, action: SearchActions): SearchState {
  switch (action.type) {

    case GET_FIRST_CATEGORY_SUCCESS :
    case GET_FIRST_CATEGORY :

      return {
        ...state,
        categoryList : {
          ...state.categoryList,

        }
      }

    case GET_SECOND_CATEGORY_SUCCESS :
    case GET_SECOND_CATEGORY :

      return {
        // 각각 depth 마다 ...를 넣어주지 않으면, 이전 데이터가 유지가 되지 않음.
        ...state,
        categoryList : {
          ...state.categoryList,
          secondCategory :  action.payload.data,
          type : action.payload.type,
          status : {
            ...state.categoryList.status,
            secondCategory : 'loaded',
          }
        }
      }
      break;

    case GET_THIRD_CATEGORY_SUCCESS :
    case GET_THIRD_CATEGORY :

      return {
        ...state,
        categoryList : {
          ...state.categoryList,
          firstCategory : action.payload.data,
          type : action.payload,
        }
      };

    case GET_FOURTH_CATEGORY_SUCCESS:
    case GET_FOURTH_CATEGORY :

      return {
        ...state,
        categoryList : {
          ...state.categoryList,
          firstCategory : action.payload.data,
          type : action.payload,
        }
      }
      break;


    default:
      return state;
  }
}



function normalizer ( data ) {
  // const slug = new schema.Entity('slug', {
  //
  // });
  //
  // const fourthCategory = new schema.Entity('fourthCategory', {
  //
  // });
  //
  // // // // Define your comments schema
  // const thirdCategory = new schema.Entity('thirdCategory', {
  //   name : name,
  //   children : [fourthCategory]
  // });
  //
  const secondCategory = new schema.Entity('secondCategory', {},{ idAttribute: 'code' });

  const object = new schema.Array(secondCategory);


  return normalize(data, object);
}
