
import {
  GET_CATEGORY_ALL_SUCCESS,
  UiActions,
  UPDATE_CATEGORY,
  UPDATE_URL_ACTIVE
} from './ui.actions';

import {normalize, schema} from 'normalizr';

export interface UiState {
  currentCategoryList: any;
  // searchList: any;
  activeUrl: any;
}

export const initialState: UiState = {
  currentCategoryList : {
    isLoaded : false,
  },
  activeUrl : [],
  // searchList : {},
};



// initial List
let secondResultList = [];
const thirdResultList = {};
const fourthResultList = [];

// sorted List
let sortedSecondList = [];
let sortedThirdList = [];

// sortInfomation
const sortSecondInfo = {};
const sortThirdInfo = {};
const sortFourthInfo = {};


// exactly SortValue
let getSecondSortValue;
let getThirdSortValue;
let currentSlug;

export function UiReducer(state = initialState, action: UiActions): UiState {

  switch (action.type) {


    case UPDATE_URL_ACTIVE :

      return {
        ...state,
        activeUrl : action.payload,
      };

    case GET_CATEGORY_ALL_SUCCESS:
      getSecondSortValue = 0;
      getThirdSortValue = 0;
      sortedSecondList = [];
      sortedThirdList = [];
      currentSlug = '';

      // const normalizeSearchData = normalizerSearch(searchConstList);

      const normalizedCategoryData = normalizer(action.payload.data);
      const secondCategoryData = normalizedCategoryData.entities.secondCategory;
      const thirdCategoryData = normalizedCategoryData.entities.thirdCategory;
      const fourthCategoryData = normalizedCategoryData.entities.fourthCategory;

      // second category info에 관한것을, 정리
      Object.keys(secondCategoryData).forEach(function (key) {
        sortSecondInfo[secondCategoryData[key].slug] = parseInt(key, 10 );
        thirdResultList[key] = secondCategoryData[key].children;
      });

      console.log(sortSecondInfo);
      console.log(action.payload.secondSortKey);
      getSecondSortValue = sortSecondInfo[action.payload.secondSortKey];

      // third category info에 관한것을, 정리
      Object.keys(thirdCategoryData).forEach(function (key) {
        sortThirdInfo[thirdCategoryData[key].slug] = parseInt(key, 10 );

        // })
        // do something with obj[key]
      });

      // fourth category info에 관한것을, 정리
      Object.keys(fourthCategoryData).forEach(function (key) {
        sortFourthInfo[fourthCategoryData[key].slug] = parseInt(key, 10 );
        // do something with obj[key]
      });

      // 초기값을 새로운 전역 변수에 넣어준다.
      secondResultList = normalizedCategoryData.result;
      getThirdSortValue = sortThirdInfo[action.payload.thirdSortKey];
      console.log(thirdResultList);

      // 실제로 순서를 보여주게 하는것 순서 변환
      secondResultList.forEach( item => {
        if ( item === getSecondSortValue) {
          sortedSecondList.unshift(item) ;
        } else {
          sortedSecondList.push(item);
        }
      });
      console.log('11111111')
      console.log(getSecondSortValue);

      thirdResultList[getSecondSortValue].forEach( item => {
        if ( item === getThirdSortValue) {
          sortedThirdList.unshift(item);
        } else {
          sortedThirdList.push(item);
        }
      });

      console.log('222222222')

      currentSlug = secondCategoryData[getSecondSortValue].slug;

      if (getThirdSortValue !== undefined ) {
        currentSlug = thirdCategoryData[getThirdSortValue].slug;

      }


      // 초기값에, 식품을 검은색으로
      const normalizedData = {
        ...normalizedCategoryData,
        entities : {
          ...normalizedCategoryData.entities,
          secondCategory : {
            ...normalizedCategoryData.entities.secondCategory,
            [getSecondSortValue] : {
              ...normalizedCategoryData.entities.secondCategory[getSecondSortValue],
              children : sortedThirdList,
              active : true,
            }
          },
          thirdCategory : {
            ...normalizedCategoryData.entities.thirdCategory,
            [getThirdSortValue] : {
              ...normalizedCategoryData.entities.thirdCategory[getThirdSortValue],
              active : true,
            }
          }
        },
        result : sortedSecondList,
        previous : {
          secondPrevious : getSecondSortValue,
          thirdPrevious : getThirdSortValue,
        },
        currentSlug : currentSlug,
        // sortSecondInfo : sortSecondInfo,
        // sortThirdInfo : sortThirdInfo,
        // sortFourthInfo : sortFourthInfo,
        isLoaded : true,
      };

      return {
        ...state,
        currentCategoryList : normalizedData,
        // searchList : {
        //   ...searchConstList,
        //   result : normalizeSearchData.result,
        //   data : normalizeSearchData.entities.searchList,
        // },
      };
      break;


    case UPDATE_CATEGORY :
      getSecondSortValue = 0;
      getThirdSortValue = 0;
      sortedSecondList = [];
      sortedThirdList = [];
      currentSlug = '';

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


      console.log('@@@@@@@@@@@@@@@@@@@@');
      console.log(getSecondSortValue);
      console.log(getThirdSortValue);
      console.log('@@@@@@@@@@@@@@@@@@@@');
      // console.log(sortedSecondList);

      currentSlug = state.currentCategoryList.entities.secondCategory[getSecondSortValue].slug;

      if (getThirdSortValue !== undefined ) {
        currentSlug = state.currentCategoryList.entities.thirdCategory[getThirdSortValue].slug;
      }

      // thirdResultList.forEach
      let notChangeSecondPrevious = false;
      let notChangeThirdPrevious = false;

      if ( state.currentCategoryList.previous['secondPrevious'] === getSecondSortValue ) {
        notChangeSecondPrevious = true;
        console.log('notChangeSecondPrevious');
      }

      if ( state.currentCategoryList.previous['thirdPrevious'] === getThirdSortValue ) {
        notChangeThirdPrevious = true;
        console.log('notChangeSecondPrevious');
      }

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
          },
          currentSlug : currentSlug,
        }
      };
      break;

    default:
      return state;
  }
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



function normalizerSearch ( data ) {
  console.log(data);

  const resultList = new schema.Entity('resultsList');

  const normalSearchList = new schema.Entity('searchList');


  return normalize(data.results, new schema.Array(normalSearchList));
}
