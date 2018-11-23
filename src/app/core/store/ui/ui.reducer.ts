
import {GET_CATEGORY_ALL, GET_CATEGORY_ALL_SUCCESS, UiActions, UPDATE_CATEGORY, UPDATE_URL_ACTIVE} from './ui.actions';
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
  searchList: any;
  activeUrl: any;
}



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

      const normalizeSearchData = normalizerSearch(searchConstList);
      console.log(normalizeSearchData);
      const normalizedFirstData = normalizer(action.payload.data);
      const secondCategoryData = normalizedFirstData.entities.secondCategory;
      const thirdCategoryData = normalizedFirstData.entities.thirdCategory;
      const fourthCategoryData = normalizedFirstData.entities.fourthCategory;

      // second category info에 관한것을, 정리
      Object.keys(secondCategoryData).forEach(function (key) {
        sortSecondInfo[secondCategoryData[key].slug] = parseInt(key, 10 );
        thirdResultList[key] = secondCategoryData[key].children;
      });

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
      secondResultList = normalizedFirstData.result;
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

      thirdResultList[getSecondSortValue].forEach( item => {
        if ( item === getThirdSortValue) {
          sortedThirdList.unshift(item);
        } else {
          sortedThirdList.push(item);
        }
      });

      currentSlug = secondCategoryData[getSecondSortValue].slug;

      if (getThirdSortValue !== undefined ) {
        currentSlug = thirdCategoryData[getThirdSortValue].slug;

      }


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
        currentSlug : currentSlug,
        // sortSecondInfo : sortSecondInfo,
        // sortThirdInfo : sortThirdInfo,
        // sortFourthInfo : sortFourthInfo,
        isLoaded : true,
      };

      return {
        ...state,
        currentCategoryList : normalizedData,
        searchList : {
          ...searchConstList,
          result : normalizeSearchData.result,
          data : normalizeSearchData.entities.searchList,
        },
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
        },
        searchList : {
          count: 2,
          next: null,
          previous: null,
          filters: {
            term: null,
            category: 1000000,
            brands: [
              '메서드'
            ],
            values: [],
            locations: []
          },
          sort: null,
          results: [
            {
              id: 1,
              thumbnail: 'https://jetimages.jetcdn.net/md5/687b683710db21b1d31cd7190aa2dee',
              brand: '메서드',
              title: '메서드 포밍 핸드 워시, 워터폴',
              review_avg_rating: 0.0,
              review_count: 0,
              price: 4390.0,
              msrp: 4500.0,
              ship_from: 'jfk',
              in_stock: true,
              quantity: 30
            },
            {
              id: 1,
              thumbnail: 'https://jetimages.jetcdn.net/md5/687b683710db21b1d31cd7190aa2dee',
              brand: '메서드',
              title: '메서드 포밍 핸드 워시, 워터폴',
              review_avg_rating: 0.0,
              review_count: 0,
              price: 4390.0,
              msrp: 4500.0,
              ship_from: 'jfk',
              in_stock: true,
              quantity: 30
            }
          ],
          aggregation: {
            categories: [
              {
                id: 1030000,
                name: '퍼스날케어'
              },
              {
                id: 1070000,
                name: '사무용품'
              }
            ],
            brands: [
              {
                id: 3,
                name: '메서드',
                count: 2
              }
            ],
            values: [
              {
                id: 2,
                name: '임상 실험 완료',
                count: 2
              },
              {
                id: 3,
                name: '100% 재활용 용기',
                count: 2
              },
              {
                id: 4,
                name: '무독성',
                count: 2
              },
              {
                id: 5,
                name: '동물 대상 실험 미실시',
                count: 2
              }
            ],
            locations: [
              {
                ship_from: 'jfk',
                count: 2
              }
            ]
          }
        }
      };
      break;

    default:
      return state;
  }
}

export const initialState: UiState = {
  currentCategoryList : {
    isLoaded : false,
  },
  searchList : {},
  activeUrl : []
};


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


const searchConstList = {
  count: 2,
    next: null,
    previous: null,
    filters: {
    term: null,
      category: 1000000,
      brands: [
      '메서드'
    ],
      values: [],
      locations: []
  },
  sort: null,
    results: [
    {
      id: 23,
      thumbnail: 'https://jetimages.jetcdn.net/md5/687b683710db21b1d31cd7190aa2dee',
      brand: '메서드',
      title: '메서드 포밍 핸드 워시, 워터폴',
      review_avg_rating: 0.0,
      review_count: 0,
      price: 4390.0,
      msrp: 4500.0,
      ship_from: 'jfk',
      in_stock: true,
      quantity: 30
    },
    {
      id: 34,
      thumbnail: 'https://jetimages.jetcdn.net/md5/687b683710db21b1d31cd7190aa2dee',
      brand: '메서드',
      title: '메서드 포밍 핸드 워시, 워터폴',
      review_avg_rating: 0.0,
      review_count: 0,
      price: 4390.0,
      msrp: 4500.0,
      ship_from: 'jfk',
      in_stock: true,
      quantity: 30
    }
  ],
    aggregation: {
    categories: [
      {
        id: 1030000,
        name: '퍼스날케어'
      },
      {
        id: 1070000,
        name: '사무용품'
      }
    ],
      brands: [
      {
        id: 3,
        name: '메서드',
        count: 2
      }
    ],
      values: [
      {
        id: 2,
        name: '임상 실험 완료',
        count: 2
      },
      {
        id: 3,
        name: '100% 재활용 용기',
        count: 2
      },
      {
        id: 4,
        name: '무독성',
        count: 2
      },
      {
        id: 5,
        name: '동물 대상 실험 미실시',
        count: 2
      }
    ],
      locations: [
      {
        ship_from: 'jfk',
        count: 2
      }
    ]
  }
}
