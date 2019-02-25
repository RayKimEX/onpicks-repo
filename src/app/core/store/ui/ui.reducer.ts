
import {
  DISPLAY_ALERT_MESSAGE,
  GET_CATEGORY_ALL_SUCCESS,
  REMOVE_ALERT_MESSAGE,
  UiActions,
  UPDATE_CATEGORY,
  UPDATE_URL_ACTIVE
} from './ui.actions';

import {normalize, schema} from 'normalizr';

export interface UiState {
  currentCategoryList: any;
  // searchList: any;
  activeUrl: any;
  alertMessage: any;
}

export const initialState: UiState = {
  currentCategoryList : {
    isLoaded : false,
  },
  activeUrl : [],
  alertMessage: '',
};



// initial List
let secondResultList = [];
const thirdResultList = {};
const fourthResultList = [];

// sorted List
let sortedSecondList = [];
let sortedThirdList = [];

// sortInfomation
let sortAllInfo = {};
const sortSecondInfo = {};
const sortThirdInfo = {};
const sortFourthInfo = {};


// exactly SortValue
let getSecondSortValue;
let getThirdSortValue;
let getFourthSortValue;
let currentSlug;
let currentName;

let notChangeSecondPrevious;
let notChangeThirdPrevious;

export function UiReducer(state = initialState, action: UiActions): UiState {

  switch (action.type) {
    case UPDATE_URL_ACTIVE :

      return {
        ...state,
        activeUrl : action.payload,
      };

    case DISPLAY_ALERT_MESSAGE :
      return {
        ...state,
        alertMessage : {
          message: action.payload,
          display: true,
        }
      }

    case REMOVE_ALERT_MESSAGE :
      return {
        ...state,
        alertMessage : {
          message : '',
          display: false,
        },
      }

    case GET_CATEGORY_ALL_SUCCESS :

      getSecondSortValue = 0;
      getThirdSortValue = 0;
      getFourthSortValue = 0;
      sortedSecondList = [];
      sortedThirdList = [];
      currentSlug = '';
      currentName = '';

      console.log(action.payload);
      const normalizedCategoryData = normalizer(action.payload.data);
      const secondCategoryData = normalizedCategoryData.entities.secondCategory;
      const thirdCategoryData = normalizedCategoryData.entities.thirdCategory;
      const fourthCategoryData = normalizedCategoryData.entities.fourthCategory;

      // second category info에 관한것을, 정리
      Object.keys(secondCategoryData).forEach(function (key) {
        sortSecondInfo[secondCategoryData[key].slug] = parseInt(key, 10 );
        thirdResultList[key] = secondCategoryData[key].children;
      });

      getSecondSortValue = sortSecondInfo[action.payload.secondSortKey];

      // third category info에 관한것을, 정리
      Object.keys(thirdCategoryData).forEach(function (key) {
        sortThirdInfo[thirdCategoryData[key].slug] = parseInt(key, 10 );
      });


      getThirdSortValue = sortThirdInfo[action.payload.thirdSortKey];

      // fourth category info에 관한것을, 정리
      Object.keys(fourthCategoryData).forEach(function (key) {
        sortFourthInfo[fourthCategoryData[key].slug] = parseInt(key, 10 );
        // do something with obj[key]
      });

      // 초기값을 새로운 전역 변수에 넣어준다.
      secondResultList = normalizedCategoryData.result;
      getFourthSortValue = sortFourthInfo[action.payload.fourthSortKey];



      // 실제로 순서를 보여주게 하는것 순서 변환
      secondResultList.forEach( item => {
        if ( item === getSecondSortValue) {
          sortedSecondList.unshift(item) ;
        } else {
          sortedSecondList.push(item);
        }
      });

      thirdResultList[getSecondSortValue].forEach( item => {
        if ( item === getThirdSortValue ) {
          sortedThirdList.unshift(item);
        } else {
          sortedThirdList.push(item);
        }
      });

      currentSlug = secondCategoryData[getSecondSortValue].slug;
      currentName = secondCategoryData[getSecondSortValue].name;
      if (getThirdSortValue !== undefined ) {
        currentSlug = thirdCategoryData[getThirdSortValue].slug;
        currentName = thirdCategoryData[getThirdSortValue].name;
      }

      if (getFourthSortValue !== undefined ) {
        currentSlug = fourthCategoryData[getFourthSortValue].slug;
        currentName = fourthCategoryData[getFourthSortValue].name;
      }



      sortAllInfo = {
        ...sortSecondInfo,
        ...sortThirdInfo,
        ...sortFourthInfo
      };

      console.log(sortAllInfo);


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
        currentName : currentName,
        currentSlug : currentSlug,
        currentCode : sortAllInfo[currentSlug],
        currentTitle : action.payload.categoryTitle,
        type : action.payload.type,
        isLoaded : true,
      };

      return {
        ...state,
        currentCategoryList : normalizedData,
      };
      break;

    case UPDATE_CATEGORY :
      notChangeSecondPrevious = false;
      notChangeThirdPrevious = false;
      getSecondSortValue = 0;
      getThirdSortValue = 0;
      getFourthSortValue = 0;
      sortedSecondList = [];
      sortedThirdList = [];
      currentSlug = '';

      getSecondSortValue = sortSecondInfo[action.payload.secondSortKey];
      getThirdSortValue = sortThirdInfo[action.payload.thirdSortKey];
      getFourthSortValue = sortFourthInfo[action.payload.fourthSortKey];

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


      currentSlug = state.currentCategoryList.entities.secondCategory[getSecondSortValue].slug;
      currentName = state.currentCategoryList.entities.secondCategory[getSecondSortValue].name;

      if (getThirdSortValue !== undefined ) {
        currentSlug = state.currentCategoryList.entities.thirdCategory[getThirdSortValue].slug;
        currentName = state.currentCategoryList.entities.thirdCategory[getThirdSortValue].name;
      }

      if (getFourthSortValue !== undefined ) {
        currentSlug = state.currentCategoryList.entities.fourthCategory[getFourthSortValue].slug;
        currentName = state.currentCategoryList.entities.fourthCategory[getFourthSortValue].name;
      }



      if ( state.currentCategoryList.previous['secondPrevious'] === getSecondSortValue ) {
        notChangeSecondPrevious = true;
      }

      if ( state.currentCategoryList.previous['thirdPrevious'] === getThirdSortValue ) {
        notChangeThirdPrevious = true;
      }

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
          currentName : currentName,
          currentCode : sortAllInfo[currentSlug],
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
