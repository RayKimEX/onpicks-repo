import * as PActions from './p.actions';
import {normalize, schema} from 'normalizr';
import {TOGGLE_VOTE_REIVEW_SUCCESS} from './p.actions';


export interface PState {
  ui: {
    menuPosition: number;
  };
  reviews: {
    list: {};
    results: [];
  };
}

const initialState: PState = {
  ui: {
    menuPosition : 0,
  },
  reviews : {
    list : {
    },
    results : [],
  },
};

export function PReducer (state = initialState, action: PActions.PActions) {

  switch ( action.type ) {

    case PActions.TOGGLE_VOTE_REIVEW_SUCCESS :

      return {
        ...state,
        reviews : {
          ...state.reviews,
          list : {
            ...state.reviews.list,
            [action.payload['id']] : {
              ...action.payload
            }
          },

        }
      };

    case PActions.UPDATE_MENUPOSITION:
      return {
        ...state,
        ui: {
          ...state.ui,
          menuPosition : action.payload
        }

      };

    case PActions.GET_PRODUCT_INFO_SUCCESS :
      return {
        ...state,
        data : {
          ...action.payload
        },
        reviews : {
          ...state.reviews,
          extraInfo : {
            ...state.reviews['extraInfo'],
            reviewAvgRating : action.payload['review_avg_rating'],
            reviewRatingsDist : action.payload['review_ratings_dist']
          }
        }
      }

    case PActions.GET_REVIEWS_PRODUCT_SUCCESS :

      const data =  reviewNormalizer(action.payload.results);
      return {
        ...state,
        reviews : {
          ...state.reviews,
          list : {
            ...state.reviews.list,
            ...data.entities.reviews,
          },
          results :  data.result,
        }
      };


    /* loading화면을 위해 일부러 undefined를 강제적으로 넣어줌*/
    case PActions.TRY_GET_COMMENTS_PRODUCT :

      return {
        ...state,
        reviews: {
          ...state.reviews,
          list : {
            ...state.reviews.list,
            [action.payload.reviewsId] : {
              ...state.reviews.list[action.payload.reviewsId],
              comments : undefined,
              isCommentsLoaded : false,
              tryToLoadComments : true,
            }
          }
        }
      }

    case PActions.GET_COMMENTS_PRODUCT_SUCCESS :

      return {
        ...state,
        reviews: {
          ...state.reviews,
          list : {
            ...state.reviews.list,
            [action.payload.reviewsId] : {
              ...state.reviews.list[action.payload.reviewsId],
              comments : action.payload.currentComments,
              isCommentsLoaded : true
            }
          }
        }
      }

    case PActions.ADD_COMMENT_SUCCESS :
      const addedCommentState = state.reviews.list[action.payload.reviewsId].comments.results

      addedCommentState.push(action.payload.respond);
      return {
        ...state,
        reviews: {
          ...state.reviews,
          list : {
            ...state.reviews.list,
            [action.payload.reviewsId] : {
              ...state.reviews.list[action.payload.reviewsId],
              comments : {
                ...state.reviews.list[action.payload.reviewsId].comments,
                results : addedCommentState
              },
              isCommentsLoaded : true,
            }
          }
        }
      }
    default:
      return state;
  }
}



function reviewNormalizer ( data ) {
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
  const secondCategory = new schema.Entity('reviews', {
  });
  //
  const object = new schema.Array(secondCategory);


  return normalize(data, object);
}
