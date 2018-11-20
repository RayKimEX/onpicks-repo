
import {GET_CATEGORY_ALL, GET_CATEGORY_ALL_SUCCESS, UiActions, UPDATE_CATEGORY, UPDATE_SECOND_CATEGORY} from './ui.actions';
import {normalize, schema} from 'normalizr';
//
//
// export interface Course {
//   id:number;
//   description:string;
//   iconUrl?: string;
//   courseListIcon?: string;
//   longDescription?: string;
//   category:string;
//   seqNo: number;
//   lessonsCount?:number;
//   promo?:boolean;
// }
export interface UiState {
  currentCategoryList: any;
}



// initial List
let secondResultList = [];
let thirdResultList = {};
let fourthResultList = [];

// sorted List
let sortedSecondList = [];
let sortedThirdList = [];

// sortInfomation
const sortSecondInfo = {}
const sortThirdInfo = {}
const sortFourthInfo = {}


// exactly SortValue
let getSecondSortValue;
let getThirdSortValue;


export function UiReducer(state = initialState, action: UiActions): UiState {




  switch (action.type) {
    case GET_CATEGORY_ALL_SUCCESS:
      getSecondSortValue = 0;
      getThirdSortValue = 0;
      sortedSecondList = [];
      sortedThirdList = [];

      const normalizedFirstData = normalizer(action.payload.data);
      const secondCategoryData = normalizedFirstData.entities.secondCategory;
      const thirdCategoryData = normalizedFirstData.entities.thirdCategory;
      const fourthCategoryData = normalizedFirstData.entities.fourthCategory;

      Object.keys(secondCategoryData).forEach(function (key) {
        sortSecondInfo[secondCategoryData[key].slug] = parseInt(key, 10 );
        thirdResultList[key] = secondCategoryData[key].children;
      });

      getSecondSortValue = sortSecondInfo[action.payload.secondSortKey];

      Object.keys(thirdCategoryData).forEach(function (key) {
        sortThirdInfo[thirdCategoryData[key].slug] = parseInt(key, 10 );

        // })
        // do something with obj[key]
      });

      Object.keys(fourthCategoryData).forEach(function (key) {
        sortFourthInfo[fourthCategoryData[key].slug] = parseInt(key, 10 );
        // do something with obj[key]
      });

      // 초기값을 새로운 전역 변수에 넣어준다.
      secondResultList = normalizedFirstData.result;


      getThirdSortValue = sortThirdInfo[action.payload.thirdSortKey];

      console.log(thirdResultList);

      // thirdResultList = normalizedFirstData.entities.thirdCategory;
      // thirdResultList = {
      //   ;
      // }

      // console.log(getThirdSortValue);
      // fourthResultList = normalizedFirstData.entities.thirdCategory[getThirdSortValue].children;
      // console.log(thirdResultList);


      // fourthResultList = normalizedFirstData.entities.thirdCategory[action.payload.thirdSortBy].children;

      // 실제로 순서를 보여주게 하는것 순서 변환
      secondResultList.forEach( item => {
        console.log(item);
        if ( item === getSecondSortValue) {
          sortedSecondList.unshift(item) ;
        } else {
          sortedSecondList.push(item);
        }
      });

      thirdResultList[getSecondSortValue].forEach( item => {
        if ( item === getThirdSortValue) {
          sortedThirdList.unshift(item) ;
        } else {
          sortedThirdList.push(item);
        }
      })

      // console.log(getSecondSortValue);
      // console.log(getThirdSortValue);
      console.log(sortedThirdList);


      // 초기값에, 식품을 검은색으로
      const normalizedData = {
        ...normalizedFirstData,
        entities : {
          ...normalizedFirstData.entities,
          secondCategory : {
            ...normalizedFirstData.entities.secondCategory,
            [getSecondSortValue] : {
              ...normalizedFirstData.entities.secondCategory[getSecondSortValue],
              children : sortedThirdList,
              active : true,

            }
          },
          thirdCategory : {
            ...normalizedFirstData.entities.thirdCategory,
            [getThirdSortValue] : {
              ...normalizedFirstData.entities.thirdCategory[getThirdSortValue],
              active : true,
            }
          }
        },
        result : sortedSecondList,
        previous : {
          secondPrevious : getSecondSortValue,
          thirdPrevious : getThirdSortValue,
        },
        // sortSecondInfo : sortSecondInfo,
        // sortThirdInfo : sortThirdInfo,
        // sortFourthInfo : sortFourthInfo,
        isLoaded : true,
      }

      return {
        ...state,
        currentCategoryList : normalizedData,
      }
      break;


    case UPDATE_CATEGORY :
      getSecondSortValue = 0;
      getThirdSortValue = 0;
      sortedSecondList = [];
      sortedThirdList = [];

      console.log(state);

      getSecondSortValue = sortSecondInfo[action.payload.secondSortKey];
      getThirdSortValue = sortThirdInfo[action.payload.thirdSortKey];
      // 전역 변수에 넣은 초기값 (현재 값이아닌 ) 기준으로, 새로 가져와서 변화시킴
      // state에 있는값은 바뀐 값을 다시 가져오기 때문에 의미가 없음.
      secondResultList.forEach( item => {
        if ( item === getSecondSortValue) {
          sortedSecondList.unshift(item) ;
        } else {
          sortedSecondList.push(item);
        }
      });

      thirdResultList[getSecondSortValue].forEach( item => {
        if ( item === getThirdSortValue) {
          sortedThirdList.unshift(item) ;
        } else {
          sortedThirdList.push(item);
        }
      });


      console.log(getSecondSortValue);
      console.log(thirdResultList);
      console.log(sortedSecondList);

      // thirdResultList.forEach
      let notChangeSecondPrevious = false;
      let notChangeThirdPrevious = false;

      console.log(getSecondSortValue );
      if ( state.currentCategoryList.previous['secondPrevious'] === getSecondSortValue ) {
        notChangeSecondPrevious = true;
        console.log('notChangeSecondPrevious');
      }

      if ( state.currentCategoryList.previous['thirdPrevious'] === getThirdSortValue ) {
        notChangeThirdPrevious = true;
        console.log('notChangeSecondPrevious');
      }



      console.log(state.currentCategoryList.previous['secondPrevious']);
      // console.log(anotherResult);
      // console.log(state.currentCategoryList.result);

      return {
        ...state,
        currentCategoryList : {
          ...state.currentCategoryList,
          result : sortedSecondList,
          previous :  {
            secondPrevious : getSecondSortValue,
            thirdPrevious : getThirdSortValue,
          },
          entities : {
            ...state.currentCategoryList.entities,
            secondCategory : {
              ...state.currentCategoryList.entities.secondCategory,
              [getSecondSortValue] : {
                ...state.currentCategoryList.entities.secondCategory[getSecondSortValue],
                children : sortedThirdList,
                active : true,
              },
              [notChangeSecondPrevious ? null : state.currentCategoryList.previous['secondPrevious']] : {
                ...state.currentCategoryList.entities.secondCategory[state.currentCategoryList.previous['secondPrevious']],
                active: false,
              },
            },
            thirdCategory : {
              ...state.currentCategoryList.entities.thirdCategory,
              [getThirdSortValue] : {
                ...state.currentCategoryList.entities.thirdCategory[getThirdSortValue],
                active : true,
              },
              [notChangeThirdPrevious ? null : state.currentCategoryList.previous['thirdPrevious']] : {
                ...state.currentCategoryList.entities.thirdCategory[state.currentCategoryList.previous['thirdPrevious']],
                active: false,
              },
            }
          }
        }
      }
      break;

    default:
      return state;
  }
}

export const initialState: UiState = {
  currentCategoryList : {
    isLoaded : false,
  },
}


function normalizer ( data ) {
  const slug = new schema.Entity('slug', {

  });

  const fourthCategory = new schema.Entity('fourthCategory', {

  });

  // // // Define your comments schema
  const thirdCategory = new schema.Entity('thirdCategory', {
    name : name,
    children : [fourthCategory]
  });

  const secondCategory = new schema.Entity('secondCategory', {
    // idAttribute: () => slug
    children : [thirdCategory]
  });

  const object = new schema.Array(secondCategory);


  return normalize(data, object);
}
