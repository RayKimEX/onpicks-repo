import {InjectionToken} from '@angular/core';

export const CATEGORY_CODE_MAP = new InjectionToken<any>( './core/global-constant/app.category-database');
export const CATEGORY_MAP = new InjectionToken<any>( './core/global-constant/app.category-database');

export const CATEGORY_MAP_CONST = JSON.parse(`{
  "1000000": {
    "slug": "pantry-and-household",
    "code": 1000000,
    "name": {
      "en": "Pantry & Household",
      "ko": "식품·생활용품",
      "zh_hans": null
    },
    "children": [
      {
        "slug": "grocery",
        "code": 1010000,
        "name": {
          "en": "Grocery",
          "ko": "식품",
          "zh_hans": null
        },
        "children": [
          {
            "slug": "beverages",
            "code": 1010100,
            "name": {
              "en": "Beverages",
              "ko": "음료",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "water",
                "code": 1010101,
                "name": {
                  "en": "Water",
                  "ko": "물",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "sports-and-energy-drinks",
                "code": 1010102,
                "name": {
                  "en": "Sports & Energy Drinks",
                  "ko": "스포츠음료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "soft-drinks",
                "code": 1010103,
                "name": {
                  "en": "Soft Drinks",
                  "ko": "청량음료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "coffee",
                "code": 1010104,
                "name": {
                  "en": "Coffee",
                  "ko": "커피",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "tea",
                "code": 1010105,
                "name": {
                  "en": "Tea",
                  "ko": "차",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "milk",
                "code": 1010106,
                "name": {
                  "en": "Milk",
                  "ko": "우유",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "non-dairy-milk",
                "code": 1010107,
                "name": {
                  "en": "Non-dairy Milk",
                  "ko": "비유제품 우유",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "juice",
                "code": 1010108,
                "name": {
                  "en": "Juice",
                  "ko": "주스",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "drink-mixes-and-syrup",
                "code": 1010109,
                "name": {
                  "en": "Drink Mixes & Syrup",
                  "ko": "음료 믹스·시럽",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "snack-foods",
            "code": 1010200,
            "name": {
              "en": "Snack Foods",
              "ko": "스낵",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "fruit-cups-and-squeezes",
                "code": 1010201,
                "name": {
                  "en": "Fruit Cups & Squeezes",
                  "ko": "프루츠컵·스퀴즈",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "chips-and-pretzels",
                "code": 1010202,
                "name": {
                  "en": "Chips & Pretzels",
                  "ko": "칩·프레첼",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cookies",
                "code": 1010203,
                "name": {
                  "en": "Cookies",
                  "ko": "쿠키",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "bread-and-crackers",
                "code": 1010204,
                "name": {
                  "en": "Bread & Crackers",
                  "ko": "빵·크래커",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "fruit-and-vegetable-snacks",
                "code": 1010205,
                "name": {
                  "en": "Fruit & Vegetable Snacks",
                  "ko": "과일·야채스낵",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "protein-and-granola-bars",
                "code": 1010206,
                "name": {
                  "en": "Protein & Granola Bars",
                  "ko": "프로틴·곡물바",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "ice-cream-cones-and-toppings",
                "code": 1010207,
                "name": {
                  "en": "Ice Cream Cones & Toppings",
                  "ko": "아이스크림콘·토핑",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "jerky-and-dried-meats",
                "code": 1010208,
                "name": {
                  "en": "Jerky & Dried Meats",
                  "ko": "육포·건어물",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "nuts-seeds-and-trail-mix",
                "code": 1010209,
                "name": {
                  "en": "Nuts, Seeds & Trail Mix",
                  "ko": "견과류·믹스",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "popcorn-and-puffed-snacks",
                "code": 1010210,
                "name": {
                  "en": "Popcorn & Puffed Snacks",
                  "ko": "팝콘",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "pudding-and-gelatin",
                "code": 1010211,
                "name": {
                  "en": "Pudding & Gelatin",
                  "ko": "푸딩·젤라틴",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "candy-gum-and-chocolate",
            "code": 1010300,
            "name": {
              "en": "Candy, Gum & Chocolate",
              "ko": "캔디·껌·초콜릿",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "chocolate",
                "code": 1010301,
                "name": {
                  "en": "Chocolate",
                  "ko": "초콜릿",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "chewing-gum",
                "code": 1010302,
                "name": {
                  "en": "Chewing Gum",
                  "ko": "껌",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "candy",
                "code": 1010303,
                "name": {
                  "en": "Candy",
                  "ko": "캔디",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "other-sweets",
                "code": 1010304,
                "name": {
                  "en": "Other Sweets",
                  "ko": "디저트",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "breakfast-foods",
            "code": 1010400,
            "name": {
              "en": "Breakfast Foods",
              "ko": "아침식사",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "cold-cereals",
                "code": 1010401,
                "name": {
                  "en": "Cold Cereals",
                  "ko": "콜드시리얼",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "hot-cereals-and-oats",
                "code": 1010402,
                "name": {
                  "en": "Hot Cereals & Oats",
                  "ko": "핫시리얼·오트밀",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "toaster-pastries",
                "code": 1010403,
                "name": {
                  "en": "Toaster Pastries",
                  "ko": "토스터페이스트리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "granola-and-museli",
                "code": 1010404,
                "name": {
                  "en": "Granola & Museli",
                  "ko": "그래놀라·무슬리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "meal-replacement-proein-and-granola-bars",
                "code": 1010405,
                "name": {
                  "en": "Meal Replacement, Proein & Granola Bars",
                  "ko": "식사대용프로틴바·그래놀라바",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "soups-meals-and-side-dishes",
            "code": 1010500,
            "name": {
              "en": "Soups, Meals & Side Dishes",
              "ko": "식사·후식",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "macaroni-and-cheese",
                "code": 1010501,
                "name": {
                  "en": "Macaroni & Cheese",
                  "ko": "마카로니·치즈",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "soups",
                "code": 1010502,
                "name": {
                  "en": "Soups",
                  "ko": "수프",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "broth",
                "code": 1010503,
                "name": {
                  "en": "Broth",
                  "ko": "죽",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "chilis-and-stews",
                "code": 1010504,
                "name": {
                  "en": "Chilis & Stews",
                  "ko": "칠리·스튜",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "asian-meals",
                "code": 1010505,
                "name": {
                  "en": "Asian Meals",
                  "ko": "아시아식사",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "italian-meals",
                "code": 1010506,
                "name": {
                  "en": "Italian Meals",
                  "ko": "이탈리아식사",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "mexican-meals-and-taco-kits",
                "code": 1010507,
                "name": {
                  "en": "Mexican Meals & Taco Kits",
                  "ko": "멕시코식사·타코",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "indian-meals",
                "code": 1010508,
                "name": {
                  "en": "Indian Meals",
                  "ko": "인도식사",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "potatoes-and-stuffings",
                "code": 1010509,
                "name": {
                  "en": "Potatoes & Stuffings",
                  "ko": "감자·속재료",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "pantry",
            "code": 1010600,
            "name": {
              "en": "Pantry",
              "ko": "주방",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "spices-and-seasonings",
                "code": 1010601,
                "name": {
                  "en": "Spices & Seasonings",
                  "ko": "양념·향신료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "salt-and-pepper",
                "code": 1010602,
                "name": {
                  "en": "Salt & Pepper",
                  "ko": "소금·후추",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "condiments",
                "code": 1010603,
                "name": {
                  "en": "Condiments",
                  "ko": "조미료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "oils",
                "code": 1010604,
                "name": {
                  "en": "Oils",
                  "ko": "오일",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "vinegars",
                "code": 1010605,
                "name": {
                  "en": "Vinegars",
                  "ko": "식초",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "salad-dressings",
                "code": 1010606,
                "name": {
                  "en": "Salad Dressings",
                  "ko": "샐러드드레싱",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "salad-toppings",
                "code": 1010607,
                "name": {
                  "en": "Salad Toppings",
                  "ko": "샐러드토핑",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "sauces-and-marinades",
                "code": 1010608,
                "name": {
                  "en": "Sauces & Marinades",
                  "ko": "소스·마리네이드",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "salsas-and-dips",
                "code": 1010609,
                "name": {
                  "en": "Salsas & Dips",
                  "ko": "살사·딥스",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "butters",
                "code": 1010610,
                "name": {
                  "en": "Butters",
                  "ko": "버터",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "jams-jellies-and-preserves",
                "code": 1010611,
                "name": {
                  "en": "Jams, Jellies & Preserves",
                  "ko": "잼·젤리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "sweet-spreads",
                "code": 1010612,
                "name": {
                  "en": "Sweet Spreads",
                  "ko": "스위트스프레드",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "flours-and-meals",
                "code": 1010613,
                "name": {
                  "en": "Flours & Meals",
                  "ko": "곡물분말",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "sugar-and-other-sweeteners",
                "code": 1010614,
                "name": {
                  "en": "Sugar & Other Sweeteners",
                  "ko": "설탕·감미료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baking-ingredients",
                "code": 1010615,
                "name": {
                  "en": "Baking Ingredients",
                  "ko": "제빵재료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baking-mixes",
                "code": 1010616,
                "name": {
                  "en": "Baking Mixes",
                  "ko": "제빵분말",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "honey-and-syrups",
                "code": 1010617,
                "name": {
                  "en": "Honey & Syrups",
                  "ko": "꿀·시럽",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "pasta-and-pasta-sauce",
            "code": 1010700,
            "name": {
              "en": "Pasta & Pasta Sauce",
              "ko": "파스타·파스타소스",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "pasta-and-noodles",
                "code": 1010701,
                "name": {
                  "en": "Pasta & Noodles",
                  "ko": "파스타·누들",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "pasta-sauces",
                "code": 1010702,
                "name": {
                  "en": "Pasta Sauces",
                  "ko": "파스타소스",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "canned-and-jarred-food",
            "code": 1010800,
            "name": {
              "en": "Canned & Jarred Food",
              "ko": "통조림",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "canned-beans",
                "code": 1010801,
                "name": {
                  "en": "Canned Beans",
                  "ko": "콩통조림",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "canned-fruit",
                "code": 1010802,
                "name": {
                  "en": "Canned Fruit",
                  "ko": "과일통조림",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "canned-meat-and-seafood",
                "code": 1010803,
                "name": {
                  "en": "Canned Meat & Seafood",
                  "ko": "해산물·육류통조림",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "canned-vegetables",
                "code": 1010804,
                "name": {
                  "en": "Canned Vegetables",
                  "ko": "야채통조림",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "canned-tomatoes-and-paste",
                "code": 1010805,
                "name": {
                  "en": "Canned Tomatoes & Paste",
                  "ko": "토마토통조림",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "pickled-vegetables-and-olives",
                "code": 1010806,
                "name": {
                  "en": "Pickled Vegetables & Olives",
                  "ko": "피클·올리브통조림",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "cooking-and-baking-supplies",
            "code": 1010900,
            "name": {
              "en": "Cooking & Baking Supplies",
              "ko": "제과제빵",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "baking-mixes",
                "code": 1010901,
                "name": {
                  "en": "Baking Mixes",
                  "ko": "제빵분말",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baking-ingredients",
                "code": 1010902,
                "name": {
                  "en": "Baking Ingredients",
                  "ko": "제빵재료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "breadcrumbs",
                "code": 1010903,
                "name": {
                  "en": "Breadcrumbs",
                  "ko": "빵가루",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "doughs-shells-and-crusts",
                "code": 1010904,
                "name": {
                  "en": "Doughs, Shells & Crusts",
                  "ko": "도우·크러스트",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "extracts",
                "code": 1010905,
                "name": {
                  "en": "Extracts",
                  "ko": "추출물",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "flours-and-meals",
                "code": 1010906,
                "name": {
                  "en": "Flours & Meals",
                  "ko": "곡물 분말",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "frosting-and-decoration",
                "code": 1010907,
                "name": {
                  "en": "Frosting & Decoration",
                  "ko": "데코레이션",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "marshmallows",
                "code": 1010908,
                "name": {
                  "en": "Marshmallows",
                  "ko": "마시멜로우",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "sugar-and-other-sweeteners",
                "code": 1010909,
                "name": {
                  "en": "Sugar & Other Sweeteners",
                  "ko": "설탕·감미료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "honey-and-syrups",
                "code": 1010910,
                "name": {
                  "en": "Honey & Syrups",
                  "ko": "꿀·시럽",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "rice-beans-and-grains",
            "code": 1011000,
            "name": {
              "en": "Rice, Beans & Grains",
              "ko": "쌀·콩·곡물",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "dry-beans",
                "code": 1011001,
                "name": {
                  "en": "Dry Beans",
                  "ko": "콩",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "grains",
                "code": 1011002,
                "name": {
                  "en": "Grains",
                  "ko": "곡물",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "quinoa",
                "code": 1011003,
                "name": {
                  "en": "Quinoa",
                  "ko": "퀴노아",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "rice",
                "code": 1011004,
                "name": {
                  "en": "Rice",
                  "ko": "쌀",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "couscous",
                "code": 1011005,
                "name": {
                  "en": "Couscous",
                  "ko": "쿠스쿠스",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "international-food",
            "code": 1011100,
            "name": {
              "en": "International Food",
              "ko": "해외식품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "indian-cuisine",
                "code": 1011101,
                "name": {
                  "en": "Indian Cuisine",
                  "ko": "인도요리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "chinese-cuisine",
                "code": 1011102,
                "name": {
                  "en": "Chinese Cuisine",
                  "ko": "중식",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "japanese-cuisine",
                "code": 1011103,
                "name": {
                  "en": "Japanese Cuisine",
                  "ko": "일식",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "korean-cuisine",
                "code": 1011104,
                "name": {
                  "en": "Korean Cuisine",
                  "ko": "한식",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "asian-cuisine",
                "code": 1011105,
                "name": {
                  "en": "Asian Cuisine",
                  "ko": "아시아요리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "mexican-cuisine",
                "code": 1011106,
                "name": {
                  "en": "Mexican Cuisine",
                  "ko": "멕시코요리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "latin-american-cuisine",
                "code": 1011107,
                "name": {
                  "en": "Latin American Cuisine",
                  "ko": "라틴요리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "australiancuisine",
                "code": 1011108,
                "name": {
                  "en": "Australiancuisine",
                  "ko": "호주요리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "european-cuisine",
                "code": 1011109,
                "name": {
                  "en": "European Cuisine",
                  "ko": "유럽요리",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          }
        ]
      },
      {
        "slug": "household-supplies",
        "code": 1020000,
        "name": {
          "en": "Household Supplies",
          "ko": "생활용품",
          "zh_hans": null
        },
        "children": [
          {
            "slug": "paper-and-plastic-products",
            "code": 1020100,
            "name": {
              "en": "Paper & Plastic Products",
              "ko": "화장지·일회용품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "paper-towels",
                "code": 1020101,
                "name": {
                  "en": "Paper Towels",
                  "ko": "종이타월",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "toilet-paper",
                "code": 1020102,
                "name": {
                  "en": "Toilet Paper",
                  "ko": "화장지",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "facial-tissues",
                "code": 1020103,
                "name": {
                  "en": "Facial Tissues",
                  "ko": "미용티슈",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "disposable-tableware",
                "code": 1020104,
                "name": {
                  "en": "Disposable Tableware",
                  "ko": "일회용식탁용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "paper-napkins",
                "code": 1020105,
                "name": {
                  "en": "Paper Napkins",
                  "ko": "넵킨",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "disposable-coffee-filters",
                "code": 1020106,
                "name": {
                  "en": "Disposable Coffee Filters",
                  "ko": "일회용커피필터",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "laundry",
            "code": 1020200,
            "name": {
              "en": "Laundry",
              "ko": "세탁",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "laundry-detergent",
                "code": 1020201,
                "name": {
                  "en": "Laundry Detergent",
                  "ko": "세제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "fabric-softener",
                "code": 1020202,
                "name": {
                  "en": "Fabric Softener",
                  "ko": "섬유유연제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dryer-sheets-and-balls",
                "code": 1020203,
                "name": {
                  "en": "Dryer Sheets & Balls",
                  "ko": "건조시트·볼",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "stain-removers",
                "code": 1020204,
                "name": {
                  "en": "Stain Removers",
                  "ko": "얼룩제거제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "scent-boosters",
                "code": 1020205,
                "name": {
                  "en": "Scent Boosters",
                  "ko": "세탁방향제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "bleach",
                "code": 1020206,
                "name": {
                  "en": "Bleach",
                  "ko": "표백제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "washing-machine-cleaners",
                "code": 1020207,
                "name": {
                  "en": "Washing Machine Cleaners",
                  "ko": "세탁조청소",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "other-laundry-care",
                "code": 1020208,
                "name": {
                  "en": "Other Laundry Care",
                  "ko": "기타세탁용품",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "cleaning-products",
            "code": 1020300,
            "name": {
              "en": "Cleaning Products",
              "ko": "청소용품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "all-purpose-cleaners",
                "code": 1020301,
                "name": {
                  "en": "All-purpose Cleaners",
                  "ko": "다목적클리너",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cleaning-wipes",
                "code": 1020302,
                "name": {
                  "en": "Cleaning Wipes",
                  "ko": "청소용티슈",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "bleach",
                "code": 1020303,
                "name": {
                  "en": "Bleach",
                  "ko": "표백제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "sponges-and-brushes",
                "code": 1020304,
                "name": {
                  "en": "Sponges & Brushes",
                  "ko": "스펀지·브러쉬",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dishwashing-detergent",
                "code": 1020305,
                "name": {
                  "en": "Dishwashing Detergent",
                  "ko": "주방세제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dish-soap",
                "code": 1020306,
                "name": {
                  "en": "Dish Soap",
                  "ko": "주방비누",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "bathroom-cleaners",
                "code": 1020307,
                "name": {
                  "en": "Bathroom Cleaners",
                  "ko": "욕실청소",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "kitchen-cleaners",
                "code": 1020308,
                "name": {
                  "en": "Kitchen Cleaners",
                  "ko": "주방청소",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "produce-wash",
                "code": 1020309,
                "name": {
                  "en": "Produce Wash",
                  "ko": "식품세척",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "drain-cleaners",
                "code": 1020310,
                "name": {
                  "en": "Drain Cleaners",
                  "ko": "배수관청소",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "floor-cleaners",
                "code": 1020311,
                "name": {
                  "en": "Floor Cleaners",
                  "ko": "거실청소",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "specialty-cleaners",
                "code": 1020312,
                "name": {
                  "en": "Specialty Cleaners",
                  "ko": "특수청소",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "glass-cleaners",
                "code": 1020313,
                "name": {
                  "en": "Glass Cleaners",
                  "ko": "유리청소",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "cleaning-tools",
            "code": 1020400,
            "name": {
              "en": "Cleaning Tools",
              "ko": "청소도구",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "sponges-and-brushes",
                "code": 1020401,
                "name": {
                  "en": "Sponges & Brushes",
                  "ko": "스펀지·브러쉬",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "mops-and-accessories",
                "code": 1020402,
                "name": {
                  "en": "Mops & Accessories",
                  "ko": "대걸레·액세서리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dusting-tools-and-cloths",
                "code": 1020403,
                "name": {
                  "en": "Dusting Tools & Cloths",
                  "ko": "먼지청소",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cleaning-gloves",
                "code": 1020404,
                "name": {
                  "en": "Cleaning Gloves",
                  "ko": "청소용장갑",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "brooms",
                "code": 1020405,
                "name": {
                  "en": "Brooms",
                  "ko": "빗자루",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "bowl-brushes-and-plungers",
                "code": 1020406,
                "name": {
                  "en": "Bowl Brushes & Plungers",
                  "ko": "볼브러쉬·플런저",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dustbins",
                "code": 1020407,
                "name": {
                  "en": "Dustbins",
                  "ko": "휴지통",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "food-storage-and-trash-bags",
            "code": 1020500,
            "name": {
              "en": "Food Storage & Trash Bags",
              "ko": "보관용기·팩",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "food-storage-bags",
                "code": 1020501,
                "name": {
                  "en": "Food Storage Bags",
                  "ko": "비닐팩",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "foil",
                "code": 1020502,
                "name": {
                  "en": "Foil",
                  "ko": "호일",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "food-storage-containers",
                "code": 1020503,
                "name": {
                  "en": "Food Storage Containers",
                  "ko": "음식보관용기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "plastic-wrap",
                "code": 1020504,
                "name": {
                  "en": "Plastic Wrap",
                  "ko": "비닐랩",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "wax-and-parchment-paper",
                "code": 1020505,
                "name": {
                  "en": "Wax & Parchment Paper",
                  "ko": "왁스·파치먼트페이퍼",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "trash-bags",
                "code": 1020506,
                "name": {
                  "en": "Trash Bags",
                  "ko": "쓰레기봉투",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "home-fragrance",
            "code": 1020600,
            "name": {
              "en": "Home Fragrance",
              "ko": "방향",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "air-fresheners",
                "code": 1020601,
                "name": {
                  "en": "Air Fresheners",
                  "ko": "방향제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "candles",
                "code": 1020602,
                "name": {
                  "en": "Candles",
                  "ko": "향초",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "fragrance-diffusers",
                "code": 1020603,
                "name": {
                  "en": "Fragrance Diffusers",
                  "ko": "디퓨저",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "light-bulbs",
            "code": 1020700,
            "name": {
              "en": "Light Bulbs",
              "ko": "백열전구",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "insect-and-pest-control",
            "code": 1020800,
            "name": {
              "en": "Insect & Pest Control",
              "ko": "방충용품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "indoor-pest-control",
                "code": 1020801,
                "name": {
                  "en": "Indoor Pest Control",
                  "ko": "실내용해충",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "outdoor-pest-control",
                "code": 1020802,
                "name": {
                  "en": "Outdoor Pest Control",
                  "ko": "야외용해충",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "insect-repellent",
                "code": 1020803,
                "name": {
                  "en": "Insect Repellent",
                  "ko": "방충제",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          }
        ]
      },
      {
        "slug": "personal-care",
        "code": 1030000,
        "name": {
          "en": "Personal Care",
          "ko": "퍼스날케어",
          "zh_hans": null
        },
        "children": [
          {
            "slug": "oral-and-personal-care",
            "code": 1030100,
            "name": {
              "en": "Oral & Personal Care",
              "ko": "위생용품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "deodorant",
                "code": 1030101,
                "name": {
                  "en": "Deodorant",
                  "ko": "데오드란트",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "ear-care",
                "code": 1030102,
                "name": {
                  "en": "Ear Care",
                  "ko": "귀건강",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "eye-care",
                "code": 1030103,
                "name": {
                  "en": "Eye Care",
                  "ko": "눈건강",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "feminine-care",
                "code": 1030104,
                "name": {
                  "en": "Feminine Care",
                  "ko": "여성청결제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "toothbrushes",
                "code": 1030105,
                "name": {
                  "en": "Toothbrushes",
                  "ko": "칫솔",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "toothpaste",
                "code": 1030106,
                "name": {
                  "en": "Toothpaste",
                  "ko": "치약",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "mouthwash",
                "code": 1030107,
                "name": {
                  "en": "Mouthwash",
                  "ko": "구강청결제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dental-floss",
                "code": 1030108,
                "name": {
                  "en": "Dental Floss",
                  "ko": "치실",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "manual-toothbrushes",
                "code": 1030109,
                "name": {
                  "en": "Manual Toothbrushes",
                  "ko": "일반칫솔",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "electric-toothbrushes",
                "code": 1030110,
                "name": {
                  "en": "Electric Toothbrushes",
                  "ko": "전동칫솔",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "other-oral-care",
                "code": 1030111,
                "name": {
                  "en": "Other Oral Care",
                  "ko": "구강관리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "razors",
                "code": 1030112,
                "name": {
                  "en": "Razors",
                  "ko": "면도기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "shaving-cream",
                "code": 1030113,
                "name": {
                  "en": "Shaving Cream",
                  "ko": "면도크림",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "waxing-and-hair-removal",
                "code": 1030114,
                "name": {
                  "en": "Waxing & Hair Removal",
                  "ko": "왁싱·제모",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "safer-sex-and-contraceptives",
                "code": 1030115,
                "name": {
                  "en": "Safer Sex & Contraceptives",
                  "ko": "피임기구",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cotton-balls-and-rounds",
                "code": 1030116,
                "name": {
                  "en": "Cotton Balls & Rounds",
                  "ko": "코튼볼",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "incontinence",
                "code": 1030117,
                "name": {
                  "en": "Incontinence",
                  "ko": "요실금",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "wet-shave",
                "code": 1030118,
                "name": {
                  "en": "Wet Shave",
                  "ko": "면도",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "electric-shavers",
                "code": 1030119,
                "name": {
                  "en": "Electric Shavers",
                  "ko": "전기면도",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "tools-and-accessories",
            "code": 1030200,
            "name": {
              "en": "Tools & Accessories",
              "ko": "뷰티액세서리",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "bath-sponges-and-tools",
                "code": 1030201,
                "name": {
                  "en": "Bath Sponges & Tools",
                  "ko": "목욕용품·스펀지",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "eye-masks",
                "code": 1030202,
                "name": {
                  "en": "Eye Masks",
                  "ko": "아이마스크",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "beauty-and-spa-tools",
                "code": 1030203,
                "name": {
                  "en": "Beauty & Spa Tools",
                  "ko": "스파용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cotton-balls-and-rounds",
                "code": 1030204,
                "name": {
                  "en": "Cotton Balls & Rounds",
                  "ko": "화장솜",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "mirrors",
                "code": 1030205,
                "name": {
                  "en": "Mirrors",
                  "ko": "거울",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "toiletry-kits-and-cases",
                "code": 1030206,
                "name": {
                  "en": "Toiletry Kits & Cases",
                  "ko": "화장품주머니",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "tweezers",
                "code": 1030207,
                "name": {
                  "en": "Tweezers",
                  "ko": "핀셋",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "facial-tissues",
                "code": 1030208,
                "name": {
                  "en": "Facial Tissues",
                  "ko": "미용티슈",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "nail-care-tools",
                "code": 1030209,
                "name": {
                  "en": "Nail Care Tools",
                  "ko": "네일케어",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "top-beauty-tools-and-accessories",
                "code": 1030210,
                "name": {
                  "en": "Top Beauty Tools & Accessories",
                  "ko": "뷰티베스트",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "hair-care-products",
            "code": 1030300,
            "name": {
              "en": "Hair Care Products",
              "ko": "헤어케어",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "shampoos",
                "code": 1030301,
                "name": {
                  "en": "Shampoos",
                  "ko": "샴푸",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "conditioners",
                "code": 1030302,
                "name": {
                  "en": "Conditioners",
                  "ko": "컨디셔너",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "styling-products",
                "code": 1030303,
                "name": {
                  "en": "Styling Products",
                  "ko": "스타일링",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "scalp-treatments",
                "code": 1030304,
                "name": {
                  "en": "Scalp Treatments",
                  "ko": "두피관리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "hair-color",
                "code": 1030305,
                "name": {
                  "en": "Hair Color",
                  "ko": "염색",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "hair-loss-products",
                "code": 1030306,
                "name": {
                  "en": "Hair Loss Products",
                  "ko": "탈모관리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "hair-perms-and-texturizers",
                "code": 1030307,
                "name": {
                  "en": "Hair Perms & Texturizers",
                  "ko": "펌·텍스처",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "hair-relaxers-and-treatments",
                "code": 1030308,
                "name": {
                  "en": "Hair Relaxers & Treatments",
                  "ko": "트리트먼트",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "multicultural-hair-care-products",
                "code": 1030309,
                "name": {
                  "en": "Multicultural Hair Care Products",
                  "ko": "다문화 제품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "innovative-hair-care",
                "code": 1030310,
                "name": {
                  "en": "Innovative Hair Care",
                  "ko": "집중관리",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "hair-tools-and-accessories",
            "code": 1030400,
            "name": {
              "en": "Hair Tools & Accessories",
              "ko": "헤어액세서리",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "brushes",
                "code": 1030401,
                "name": {
                  "en": "Brushes",
                  "ko": "브러쉬",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dryers-irons-and-diffusers",
                "code": 1030402,
                "name": {
                  "en": "Dryers, Irons & Diffusers",
                  "ko": "드라이어·고데기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "hair-rollers",
                "code": 1030403,
                "name": {
                  "en": "Hair Rollers",
                  "ko": "롤러",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "hair-accessories",
                "code": 1030404,
                "name": {
                  "en": "Hair Accessories",
                  "ko": "액세서리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "haircutting-tools",
                "code": 1030405,
                "name": {
                  "en": "Haircutting Tools",
                  "ko": "이발용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "combs",
                "code": 1030406,
                "name": {
                  "en": "Combs",
                  "ko": "빗",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "makeup",
            "code": 1030500,
            "name": {
              "en": "Makeup",
              "ko": "메이크업",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "body-art-and-makeup",
                "code": 1030501,
                "name": {
                  "en": "Body Art & Makeup",
                  "ko": "바디아트",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "makeup-brushes",
                "code": 1030502,
                "name": {
                  "en": "Makeup Brushes",
                  "ko": "메이크업브러쉬",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "face-makeup",
                "code": 1030503,
                "name": {
                  "en": "Face Makeup",
                  "ko": "페이스메이크업",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "lip-makeup",
                "code": 1030504,
                "name": {
                  "en": "Lip Makeup",
                  "ko": "립메이크업",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "makeup-sets",
                "code": 1030505,
                "name": {
                  "en": "Makeup Sets",
                  "ko": "메이크업세트",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "eyeliner-and-brow-pencils",
                "code": 1030506,
                "name": {
                  "en": "Eyeliner & Brow Pencils",
                  "ko": "아이라이너·브로우펜슬",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "mascara-and-lashes",
                "code": 1030507,
                "name": {
                  "en": "Mascara & Lashes",
                  "ko": "마스카라·래쉬",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "eye-shadow",
                "code": 1030508,
                "name": {
                  "en": "Eye Shadow",
                  "ko": "아이섀도",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "makeup-sponges",
                "code": 1030509,
                "name": {
                  "en": "Makeup Sponges",
                  "ko": "메이크업스펀지",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "makeup-tools",
                "code": 1030510,
                "name": {
                  "en": "Makeup Tools",
                  "ko": "메이크업용품",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "nail-care",
            "code": 1030600,
            "name": {
              "en": "Nail Care",
              "ko": "네일케어",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "cuticle-care",
                "code": 1030601,
                "name": {
                  "en": "Cuticle Care",
                  "ko": "큐티클케어",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "nail-care-tools",
                "code": 1030602,
                "name": {
                  "en": "Nail Care Tools",
                  "ko": "네일케어용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "nail-polish",
                "code": 1030603,
                "name": {
                  "en": "Nail Polish",
                  "ko": "매니큐어",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "nail-polish-remover",
                "code": 1030604,
                "name": {
                  "en": "Nail Polish Remover",
                  "ko": "매니큐어리무버",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "skin-care",
            "code": 1030700,
            "name": {
              "en": "Skin Care",
              "ko": "스킨케어",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "bath-salts-and-bubbles",
                "code": 1030701,
                "name": {
                  "en": "Bath Salts & Bubbles",
                  "ko": "입욕제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "makeup-remover",
                "code": 1030702,
                "name": {
                  "en": "Makeup Remover",
                  "ko": "메이크업리무버",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "hand-soap",
                "code": 1030703,
                "name": {
                  "en": "Hand Soap",
                  "ko": "핸드워시",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "lip-care",
                "code": 1030704,
                "name": {
                  "en": "Lip Care",
                  "ko": "립케어",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "suncare",
                "code": 1030705,
                "name": {
                  "en": "Suncare",
                  "ko": "선케어",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "toners-and-astringents",
                "code": 1030706,
                "name": {
                  "en": "Toners & Astringents",
                  "ko": "스킨토너",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "body-powder",
                "code": 1030707,
                "name": {
                  "en": "Body Powder",
                  "ko": "바디파우더",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "body-moisturizers",
                "code": 1030708,
                "name": {
                  "en": "Body Moisturizers",
                  "ko": "바디모이스처",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "massage-oil-and-aromatherapy",
                "code": 1030709,
                "name": {
                  "en": "Massage Oil & Aromatherapy",
                  "ko": "마사지오일·아로마",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "hand-sanitizers-and-wipes",
                "code": 1030710,
                "name": {
                  "en": "Hand Sanitizers & Wipes",
                  "ko": "손세정제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "facial-cleansers",
                "code": 1030711,
                "name": {
                  "en": "Facial Cleansers",
                  "ko": "클랜저",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "facial-moisturizers-and-treatment",
                "code": 1030712,
                "name": {
                  "en": "Facial Moisturizers & Treatment",
                  "ko": "보습·미백",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "soap-and-body-wash",
                "code": 1030713,
                "name": {
                  "en": "Soap & Body Wash",
                  "ko": "바디워시",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "shaving-cream",
                "code": 1030714,
                "name": {
                  "en": "Shaving Cream",
                  "ko": "쉐이빙크림",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "mens-essentials",
            "code": 1030800,
            "name": {
              "en": "Men's Essentials",
              "ko": "남성용품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "beard-and-shave",
                "code": 1030801,
                "name": {
                  "en": "Beard & Shave",
                  "ko": "면도",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "body",
                "code": 1030802,
                "name": {
                  "en": "Body",
                  "ko": "바디",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "face",
                "code": 1030803,
                "name": {
                  "en": "Face",
                  "ko": "페이스",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "hair",
                "code": 1030804,
                "name": {
                  "en": "Hair",
                  "ko": "헤어",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cologne",
                "code": 1030805,
                "name": {
                  "en": "Cologne",
                  "ko": "향수",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "wellness",
                "code": 1030806,
                "name": {
                  "en": "Wellness",
                  "ko": "건강",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          }
        ]
      },
      {
        "slug": "health",
        "code": 1040000,
        "name": {
          "en": "Health",
          "ko": "건강",
          "zh_hans": null
        },
        "children": [
          {
            "slug": "medicine-cabinet",
            "code": 1040100,
            "name": {
              "en": "Medicine Cabinet",
              "ko": "의약품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "allergy-sinus-and-asthma",
                "code": 1040101,
                "name": {
                  "en": "Allergy, Sinus & Asthma",
                  "ko": "알러지·천식",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "childrens-medicine",
                "code": 1040102,
                "name": {
                  "en": "Children's Medicine",
                  "ko": "어린이용약품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cold-sore-and-blister-treatments",
                "code": 1040103,
                "name": {
                  "en": "Cold Sore & Blister Treatments",
                  "ko": "물집·발진",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cough-and-cold",
                "code": 1040104,
                "name": {
                  "en": "Cough & Cold",
                  "ko": "감기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "diabetes",
                "code": 1040105,
                "name": {
                  "en": "Diabetes",
                  "ko": "당뇨",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "digestion-and-nausea",
                "code": 1040106,
                "name": {
                  "en": "Digestion & Nausea",
                  "ko": "소화불량",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "foot-healthcare",
                "code": 1040107,
                "name": {
                  "en": "Foot Healthcare",
                  "ko": "발건강",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "incontinence",
                "code": 1040108,
                "name": {
                  "en": "Incontinence",
                  "ko": "요실금",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "pain-relievers",
                "code": 1040109,
                "name": {
                  "en": "Pain Relievers",
                  "ko": "진통제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "sleep-and-snoring",
                "code": 1040110,
                "name": {
                  "en": "Sleep & Snoring",
                  "ko": "수면·코골이",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "smoking-cessation",
                "code": 1040111,
                "name": {
                  "en": "Smoking Cessation",
                  "ko": "금연용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "therapeutic-ointments-and-powders",
                "code": 1040112,
                "name": {
                  "en": "Therapeutic Ointments & Powders",
                  "ko": "연고",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "thermometers",
                "code": 1040113,
                "name": {
                  "en": "Thermometers",
                  "ko": "체온계",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "ear-care",
                "code": 1040114,
                "name": {
                  "en": "Ear Care",
                  "ko": "귀건강",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "eye-care",
                "code": 1040115,
                "name": {
                  "en": "Eye Care",
                  "ko": "눈건강",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "medical-supplies-and-equipment",
            "code": 1040200,
            "name": {
              "en": "Medical Supplies & Equipment",
              "ko": "의료용품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "pills-cases-and-splitters",
                "code": 1040201,
                "name": {
                  "en": "Pills Cases & Splitters",
                  "ko": "약케이스",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "bathroom-aids-and-safety",
                "code": 1040202,
                "name": {
                  "en": "Bathroom Aids & Safety",
                  "ko": "욕실안전",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "beds-and-accessories",
                "code": 1040203,
                "name": {
                  "en": "Beds & Accessories",
                  "ko": "침대·액세서리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "braces-splints-and-slings",
                "code": 1040204,
                "name": {
                  "en": "Braces, Splints & Slings",
                  "ko": "보조기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "daily-living-aids",
                "code": 1040205,
                "name": {
                  "en": "Daily Living Aids",
                  "ko": "상비약품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "mobility-aids-and-equipment",
                "code": 1040206,
                "name": {
                  "en": "Mobility Aids & Equipment",
                  "ko": "이동장비",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "occupational-and-physical-therapy-aids",
                "code": 1040207,
                "name": {
                  "en": "Occupational & Physical Therapy Aids",
                  "ko": "치료장비",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "pen-lights",
                "code": 1040208,
                "name": {
                  "en": "Pen Lights",
                  "ko": "손전등",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "tests",
                "code": 1040209,
                "name": {
                  "en": "Tests",
                  "ko": "테스터",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "first-aid",
                "code": 1040210,
                "name": {
                  "en": "First Aid",
                  "ko": "구급약품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dehumidifiers",
                "code": 1040211,
                "name": {
                  "en": "Dehumidifiers",
                  "ko": "제습기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "humidifiers",
                "code": 1040212,
                "name": {
                  "en": "Humidifiers",
                  "ko": "가습기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "health-monitors",
                "code": 1040213,
                "name": {
                  "en": "Health Monitors",
                  "ko": "헬스모니터",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "sports-nutrition-and-diet",
            "code": 1040300,
            "name": {
              "en": "Sports Nutrition & Diet",
              "ko": "헬스·다이어트",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "protein-and-meal-replacement",
                "code": 1040301,
                "name": {
                  "en": "Protein & Meal Replacement",
                  "ko": "프로틴·식사대용",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "energy-and-endurance",
                "code": 1040302,
                "name": {
                  "en": "Energy & Endurance",
                  "ko": "에너지·지구력",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "weight-loss-supplements-and-cleanses",
                "code": 1040303,
                "name": {
                  "en": "Weight Loss Supplements & Cleanses",
                  "ko": "체중감량",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "mass-gainers",
                "code": 1040304,
                "name": {
                  "en": "Mass Gainers",
                  "ko": "체중증가",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "amino-acids-and-creatine",
                "code": 1040305,
                "name": {
                  "en": "Amino Acids & Creatine",
                  "ko": "크레아틴·아미노산",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "on-the-go-nutrition",
                "code": 1040306,
                "name": {
                  "en": "On-the-Go Nutrition",
                  "ko": "테이크아웃",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "slimfast-campaign",
                "code": 1040307,
                "name": {
                  "en": "Slimfast Campaign",
                  "ko": "슬림패스트캠페인",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "vitamins-and-dietary-supplements",
            "code": 1040400,
            "name": {
              "en": "Vitamins & Dietary Supplements",
              "ko": "건강기능식품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "minerals",
                "code": 1040401,
                "name": {
                  "en": "Minerals",
                  "ko": "미네랄",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "supplements",
                "code": 1040402,
                "name": {
                  "en": "Supplements",
                  "ko": "영양제",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "letter-vitamins",
                "code": 1040403,
                "name": {
                  "en": "Letter Vitamins",
                  "ko": "비타민",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "fish-oils-and-omegas",
                "code": 1040404,
                "name": {
                  "en": "Fish Oils & Omegas",
                  "ko": "오메가3·피쉬오일",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "probiotics",
                "code": 1040405,
                "name": {
                  "en": "Probiotics",
                  "ko": "프로바이오틱스",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "multivitamins",
                "code": 1040406,
                "name": {
                  "en": "Multivitamins",
                  "ko": "종합비타민",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "protein-and-meal-replacements",
                "code": 1040407,
                "name": {
                  "en": "Protein & Meal Replacements",
                  "ko": "프로틴·식사대용",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "pill-cases-and-splitters",
                "code": 1040408,
                "name": {
                  "en": "Pill Cases & Splitters",
                  "ko": "약케이스",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "amino-acids-and-creatine",
                "code": 1040409,
                "name": {
                  "en": "Amino Acids & Creatine",
                  "ko": "크레아틴·아미노산",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "weight-loss-supplements",
                "code": 1040410,
                "name": {
                  "en": "Weight Loss Supplements",
                  "ko": "체중감량",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "new-and-noteworthy-vitamins-and-supplements",
                "code": 1040411,
                "name": {
                  "en": "New & Noteworthy Vitamins & Supplements",
                  "ko": "베스트·추천",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "herbs-and-homeopathy",
                "code": 1040412,
                "name": {
                  "en": "Herbs & Homeopathy",
                  "ko": "허브",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          }
        ]
      },
      {
        "slug": "baby",
        "code": 1050000,
        "name": {
          "en": "Baby",
          "ko": "유아동",
          "zh_hans": null
        },
        "children": [
          {
            "slug": "baby-food-and-formula",
            "code": 1050100,
            "name": {
              "en": "Baby Food & Formula",
              "ko": "이유식·분유",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "baby-and-toddler-snacks",
                "code": 1050101,
                "name": {
                  "en": "Baby & Toddler Snacks",
                  "ko": "유아스낵",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-food",
                "code": 1050102,
                "name": {
                  "en": "Baby Food",
                  "ko": "이유식",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-formula",
                "code": 1050103,
                "name": {
                  "en": "Baby Formula",
                  "ko": "분유",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "toddler-juices-and-milk",
                "code": 1050104,
                "name": {
                  "en": "Toddler Juices & Milk",
                  "ko": "유아주스·우유",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "diapering",
            "code": 1050200,
            "name": {
              "en": "Diapering",
              "ko": "기저귀·교체용품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "diapers",
                "code": 1050201,
                "name": {
                  "en": "Diapers",
                  "ko": "기저귀",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-wipes",
                "code": 1050202,
                "name": {
                  "en": "Baby Wipes",
                  "ko": "아기티슈",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-wipe-holders-and-warmers",
                "code": 1050203,
                "name": {
                  "en": "Baby Wipe Holders & Warmers",
                  "ko": "아기티슈워머",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "changing-table-accessories",
                "code": 1050204,
                "name": {
                  "en": "Changing Table Accessories",
                  "ko": "아기탁자",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cloth-diapers",
                "code": 1050205,
                "name": {
                  "en": "Cloth Diapers",
                  "ko": "천기저귀",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cloth-diaper-accessories",
                "code": 1050206,
                "name": {
                  "en": "Cloth Diaper Accessories",
                  "ko": "천기저귀액세서리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "diaper-bags",
                "code": 1050207,
                "name": {
                  "en": "Diaper Bags",
                  "ko": "기저귀가방",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "diaper-cakes",
                "code": 1050208,
                "name": {
                  "en": "Diaper Cakes",
                  "ko": "기저귀케이크",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "diaper-changing-pads",
                "code": 1050209,
                "name": {
                  "en": "Diaper Changing Pads",
                  "ko": "기저귀교체패드",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "diaper-creams-and-ointments",
                "code": 1050210,
                "name": {
                  "en": "Diaper Creams & Ointments",
                  "ko": "기저귀크림",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "diaper-pails-and-refills",
                "code": 1050211,
                "name": {
                  "en": "Diaper Pails & Refills",
                  "ko": "기저귀휴지통",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "diaper-stackers-and-caddies",
                "code": 1050212,
                "name": {
                  "en": "Diaper Stackers & Caddies",
                  "ko": "기저귀정리함",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "baby-gear",
            "code": 1050300,
            "name": {
              "en": "Baby Gear",
              "ko": "유아용품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "baby-monitors",
                "code": 1050301,
                "name": {
                  "en": "Baby Monitors",
                  "ko": "아기모니터",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-seats",
                "code": 1050302,
                "name": {
                  "en": "Baby Seats",
                  "ko": "아기의자",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "bouncers-and-walkers",
                "code": 1050303,
                "name": {
                  "en": "Bouncers & Walkers",
                  "ko": "보행기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "car-seats",
                "code": 1050304,
                "name": {
                  "en": "Car Seats",
                  "ko": "카시트",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "carriers",
                "code": 1050305,
                "name": {
                  "en": "Carriers",
                  "ko": "캐리어",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "harnesses-and-leashes",
                "code": 1050306,
                "name": {
                  "en": "Harnesses & Leashes",
                  "ko": "아기띠",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "play-mats-and-activity-gyms",
                "code": 1050307,
                "name": {
                  "en": "Play Mats & Activity Gyms",
                  "ko": "아기매트",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "playards-and-travel-beds",
                "code": 1050308,
                "name": {
                  "en": "Playards & Travel Beds",
                  "ko": "아기침대",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "strollers",
                "code": 1050309,
                "name": {
                  "en": "Strollers",
                  "ko": "유모차",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "baby-gear-accessories",
            "code": 1050400,
            "name": {
              "en": "Baby Gear Accessories",
              "ko": "유아액세서리",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "car-seat-and-stroller-toys",
                "code": 1050401,
                "name": {
                  "en": "Car Seat & Stroller Toys",
                  "ko": "카시트·유모차 장난감",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "car-seat-accessories",
                "code": 1050402,
                "name": {
                  "en": "Car Seat Accessories",
                  "ko": "카시트액세서리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "carrier-accessories",
                "code": 1050403,
                "name": {
                  "en": "Carrier Accessories",
                  "ko": "캐리어액세서리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "crib-netting",
                "code": 1050404,
                "name": {
                  "en": "Crib Netting",
                  "ko": "침대커튼",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "shopping-cart-covers",
                "code": 1050405,
                "name": {
                  "en": "Shopping Cart Covers",
                  "ko": "쇼핑카트덮개",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "stroller-accessories",
                "code": 1050406,
                "name": {
                  "en": "Stroller Accessories",
                  "ko": "유모차액세서리",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "feeding-and-nursing",
            "code": 1050500,
            "name": {
              "en": "Feeding & Nursing",
              "ko": "수유·이유용품",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "baby-bottles-and-accessories",
                "code": 1050501,
                "name": {
                  "en": "Baby Bottles & Accessories",
                  "ko": "젖병·액세서리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-food",
                "code": 1050502,
                "name": {
                  "en": "Baby Food",
                  "ko": "이유식",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-formula",
                "code": 1050503,
                "name": {
                  "en": "Baby Formula",
                  "ko": "분유",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "bibs-and-burp-cloths",
                "code": 1050504,
                "name": {
                  "en": "Bibs & Burp Cloths",
                  "ko": "턱받이",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "breast-pump",
                "code": 1050505,
                "name": {
                  "en": "Breast Pump",
                  "ko": "유축기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "breast-pump-accessories",
                "code": 1050506,
                "name": {
                  "en": "Breast Pump Accessories",
                  "ko": "유축기액세서리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "food-and-formula-prep",
                "code": 1050507,
                "name": {
                  "en": "Food & Formula Prep",
                  "ko": "유아용식기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "food-storage-and-on-the-go",
                "code": 1050508,
                "name": {
                  "en": "Food Storage & On-the Go",
                  "ko": "보관용기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "highchairs-and-boosters",
                "code": 1050509,
                "name": {
                  "en": "Highchairs & Boosters",
                  "ko": "보조의자",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "kids-tabletop",
                "code": 1050510,
                "name": {
                  "en": "Kid's Tabletop",
                  "ko": "아기식탁",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "lunch-bags",
                "code": 1050511,
                "name": {
                  "en": "Lunch Bags",
                  "ko": "런치백",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "nursing-accessories",
                "code": 1050512,
                "name": {
                  "en": "Nursing Accessories",
                  "ko": "식기액세서리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "pacifiers-and-teethers",
                "code": 1050513,
                "name": {
                  "en": "Pacifiers & Teethers",
                  "ko": "젖꼭지",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "sippys-and-cups",
                "code": 1050514,
                "name": {
                  "en": "Sippys & Cups",
                  "ko": "역류방지컵",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "babyproofing",
            "code": 1050600,
            "name": {
              "en": "Babyproofing",
              "ko": "아기안전",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "baby-monitors",
                "code": 1050601,
                "name": {
                  "en": "Baby Monitors",
                  "ko": "아기모니터",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "bath-safety",
                "code": 1050602,
                "name": {
                  "en": "Bath Safety",
                  "ko": "욕실안전",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "edge-and-corner-guards",
                "code": 1050603,
                "name": {
                  "en": "Edge & Corner Guards",
                  "ko": "모서리안전",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "electrical-safety",
                "code": 1050604,
                "name": {
                  "en": "Electrical Safety",
                  "ko": "전기안전",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "gates-and-rails",
                "code": 1050605,
                "name": {
                  "en": "Gates & Rails",
                  "ko": "문·난간",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "kitchen-safety",
                "code": 1050606,
                "name": {
                  "en": "Kitchen Safety",
                  "ko": "주방안전",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "outdoor-safety",
                "code": 1050607,
                "name": {
                  "en": "Outdoor Safety",
                  "ko": "실외안전",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "rails-and-rail-guards",
                "code": 1050608,
                "name": {
                  "en": "Rails & Rail Guards",
                  "ko": "난간안전",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "sleep-positioners",
                "code": 1050609,
                "name": {
                  "en": "Sleep Positioners",
                  "ko": "수면 포지셔너",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "baby-care",
            "code": 1050700,
            "name": {
              "en": "Baby Care",
              "ko": "아기스킨케어",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "baby-bubble-bath",
                "code": 1050701,
                "name": {
                  "en": "Baby Bubble Bath",
                  "ko": "아기거품목욕",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-oil-and-lotion",
                "code": 1050702,
                "name": {
                  "en": "Baby Oil & Lotion",
                  "ko": "베이비로션·오일",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-powder",
                "code": 1050703,
                "name": {
                  "en": "Baby Powder",
                  "ko": "베이비파우더",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-shampoo-and-wash",
                "code": 1050704,
                "name": {
                  "en": "Baby Shampoo & Wash",
                  "ko": "아기샴푸",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "potty-training",
            "code": 1050800,
            "name": {
              "en": "Potty Training",
              "ko": "배변훈련",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "potties",
                "code": 1050801,
                "name": {
                  "en": "Potties",
                  "ko": "유아용변기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "potty-training-aids",
                "code": 1050802,
                "name": {
                  "en": "Potty Training Aids",
                  "ko": "배변훈련용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "seat-covers",
                "code": 1050803,
                "name": {
                  "en": "Seat Covers",
                  "ko": "변기커버",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "step-stools",
                "code": 1050804,
                "name": {
                  "en": "Step Stools",
                  "ko": "발판",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "training-pants",
                "code": 1050805,
                "name": {
                  "en": "Training Pants",
                  "ko": "트레이닝팬츠",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "baby-bathing",
            "code": 1050900,
            "name": {
              "en": "Baby Bathing",
              "ko": "아기목욕",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "baby-bath-accessories",
                "code": 1050901,
                "name": {
                  "en": "Baby Bath Accessories",
                  "ko": "아기목욕액세서리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-grooming",
                "code": 1050902,
                "name": {
                  "en": "Baby Grooming",
                  "ko": "아기단장",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-tubs",
                "code": 1050903,
                "name": {
                  "en": "Baby Tubs",
                  "ko": "아기욕조",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "baby-washcloths-and-towels",
                "code": 1050904,
                "name": {
                  "en": "Baby Washcloths & Towels",
                  "ko": "목욕가운·타월",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "bath-toys",
                "code": 1050905,
                "name": {
                  "en": "Bath Toys",
                  "ko": "욕조장난감",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "baby-gifts",
            "code": 1051000,
            "name": {
              "en": "Baby Gifts",
              "ko": "아기선물",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "baby-gift-sets-and-baskets",
                "code": 1051001,
                "name": {
                  "en": "Baby Gift Sets & Baskets",
                  "ko": "유아선물세트",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "keepsakes-and-albums",
                "code": 1051002,
                "name": {
                  "en": "Keepsakes & Albums",
                  "ko": "기념품·앨범",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "new-mom-gifts",
                "code": 1051003,
                "name": {
                  "en": "New Mom Gifts",
                  "ko": "첫출산 선물",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "toy-banks",
                "code": 1051004,
                "name": {
                  "en": "Toy Banks",
                  "ko": "장난감은행",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "toys",
                "code": 1051005,
                "name": {
                  "en": "Toys",
                  "ko": "Toys",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          }
        ]
      },
      {
        "slug": "pet-supplies",
        "code": 1060000,
        "name": {
          "en": "Pet Supplies",
          "ko": "반려용품",
          "zh_hans": null
        },
        "children": [
          {
            "slug": "dog-supplies",
            "code": 1060100,
            "name": {
              "en": "Dog Supplies",
              "ko": "강아지",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "collars-harnesses-and-leashes",
                "code": 1060101,
                "name": {
                  "en": "Collars, Harnesses & Leashes",
                  "ko": "강아지끈",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dog-apparel",
                "code": 1060102,
                "name": {
                  "en": "Dog Apparel",
                  "ko": "강아지옷",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dog-beds",
                "code": 1060103,
                "name": {
                  "en": "Dog Beds",
                  "ko": "강아지침구",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dog-bowls-and-feeders",
                "code": 1060104,
                "name": {
                  "en": "Dog Bowls & Feeders",
                  "ko": "강아지식기",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "travel-supplies",
                "code": 1060105,
                "name": {
                  "en": "Travel Supplies",
                  "ko": "강아지여행용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cleaning-supplies",
                "code": 1060106,
                "name": {
                  "en": "Cleaning Supplies",
                  "ko": "강아지목욕용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "crates-and-kennels",
                "code": 1060107,
                "name": {
                  "en": "Crates & Kennels",
                  "ko": "강아지집",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "flea-and-tick-control",
                "code": 1060108,
                "name": {
                  "en": "Flea & Tick Control",
                  "ko": "벼룩·진드기관리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dog-food",
                "code": 1060109,
                "name": {
                  "en": "Dog Food",
                  "ko": "강아지사료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "grooming",
                "code": 1060110,
                "name": {
                  "en": "Grooming",
                  "ko": "강아지단장",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dog-houses",
                "code": 1060111,
                "name": {
                  "en": "Dog Houses",
                  "ko": "그루밍",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "medication-and-health-supplies",
                "code": 1060112,
                "name": {
                  "en": "Medication & Health Supplies",
                  "ko": "강아지건강용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "modern-furniture",
                "code": 1060113,
                "name": {
                  "en": "Modern Furniture",
                  "ko": "강아지가구",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "dog-technology",
                "code": 1060114,
                "name": {
                  "en": "Dog Technology",
                  "ko": "강아지기술용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "toys",
                "code": 1060115,
                "name": {
                  "en": "Toys",
                  "ko": "장난감",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "training-and-behavior",
                "code": 1060116,
                "name": {
                  "en": "Training & Behavior",
                  "ko": "훈련",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "treats",
                "code": 1060117,
                "name": {
                  "en": "Treats",
                  "ko": "강아지치료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "gates-and-ramps",
                "code": 1060118,
                "name": {
                  "en": "Gates & Ramps",
                  "ko": "문·통로",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "poop-bags-and-housebreaking",
                "code": 1060119,
                "name": {
                  "en": "Poop Bags & Housebreaking",
                  "ko": "배변봉지",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          },
          {
            "slug": "cat-supplies",
            "code": 1060200,
            "name": {
              "en": "Cat Supplies",
              "ko": "고양이",
              "zh_hans": null
            },
            "children": [
              {
                "slug": "cat-beds",
                "code": 1060201,
                "name": {
                  "en": "Cat Beds",
                  "ko": "고양이침대",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "carriers",
                "code": 1060202,
                "name": {
                  "en": "Carriers",
                  "ko": "캐리어",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cleaning-supplies",
                "code": 1060203,
                "name": {
                  "en": "Cleaning Supplies",
                  "ko": "목욕용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "flea-and-tick-control",
                "code": 1060204,
                "name": {
                  "en": "Flea & Tick Control",
                  "ko": "벼룩·진드기관리",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cat-food",
                "code": 1060205,
                "name": {
                  "en": "Cat Food",
                  "ko": "고양이사료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cat-grooming",
                "code": 1060206,
                "name": {
                  "en": "Cat Grooming",
                  "ko": "고양이단장",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "health-supplies",
                "code": 1060207,
                "name": {
                  "en": "Health Supplies",
                  "ko": "건강용품",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "litter",
                "code": 1060208,
                "name": {
                  "en": "Litter",
                  "ko": "고양이배변",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "litter-boxes",
                "code": 1060209,
                "name": {
                  "en": "Litter Boxes",
                  "ko": "배변박스",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "scratchers",
                "code": 1060210,
                "name": {
                  "en": "Scratchers",
                  "ko": "스크래쳐",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cat-toys",
                "code": 1060211,
                "name": {
                  "en": "Cat Toys",
                  "ko": "고양이장난감",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "training-and-behavior-aids",
                "code": 1060212,
                "name": {
                  "en": "Training & Behavior Aids",
                  "ko": "고양이훈련",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cat-treats",
                "code": 1060213,
                "name": {
                  "en": "Cat Treats",
                  "ko": "고양이치료",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "cat-trees-and-condos",
                "code": 1060214,
                "name": {
                  "en": "Cat Trees & Condos",
                  "ko": "캣타워",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "collars-harnesses-and-leashes",
                "code": 1060215,
                "name": {
                  "en": "Collars, Harnesses & Leashes",
                  "ko": "고양이끈",
                  "zh_hans": null
                },
                "children": []
              },
              {
                "slug": "feeding-and-watering-supplies",
                "code": 1060216,
                "name": {
                  "en": "Feeding & Watering Supplies",
                  "ko": "고양이식기",
                  "zh_hans": null
                },
                "children": []
              }
            ]
          }
        ]
      },
      {
        "slug": "office-supplies",
        "code": 1070000,
        "name": {
          "en": "Office Supplies",
          "ko": "사무용품",
          "zh_hans": null
        },
        "children": [
          {
            "slug": "pens-pencils-and-markers",
            "code": 1070100,
            "name": {
              "en": "Pens, Pencils & Markers",
              "ko": "필기구",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "tape-and-adhesives",
            "code": 1070200,
            "name": {
              "en": "Tape & Adhesives",
              "ko": "테이프·접착제",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "office-paper",
            "code": 1070300,
            "name": {
              "en": "Office Paper",
              "ko": "종이",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "presentation-boards",
            "code": 1070400,
            "name": {
              "en": "Presentation Boards",
              "ko": "프레젠테이션보드",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "workspace-organizers",
            "code": 1070500,
            "name": {
              "en": "Workspace Organizers",
              "ko": "정리함",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "staplers-and-punches",
            "code": 1070600,
            "name": {
              "en": "Staplers & Punches",
              "ko": "스테이플러",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "labels-indexes-and-stamps",
            "code": 1070700,
            "name": {
              "en": "Labels, Indexes & Stamps",
              "ko": "라벨·인덱스",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "filing-products",
            "code": 1070800,
            "name": {
              "en": "Filing Products",
              "ko": "서류철",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "binders-and-binding-systems",
            "code": 1070900,
            "name": {
              "en": "Binders & Binding Systems",
              "ko": "바인더",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "scissors-cutters-and-measuring-devices",
            "code": 1071000,
            "name": {
              "en": "Scissors, Cutters & Measuring Devices",
              "ko": "문구용품",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "envelopes-and-shipping-supplies",
            "code": 1071100,
            "name": {
              "en": "Envelopes & Shipping Supplies",
              "ko": "봉투",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "calendars-and-planners",
            "code": 1071200,
            "name": {
              "en": "Calendars & Planners",
              "ko": "캘린더·플래너",
              "zh_hans": null
            },
            "children": []
          },
          {
            "slug": "stationery",
            "code": 1071300,
            "name": {
              "en": "Stationery",
              "ko": "기타 문구류",
              "zh_hans": null
            },
            "children": []
          }
        ]
      }
    ]
  },
  "2000000" : {
    "slug": "beauty",
    "code": 2000000,
    "name": {
        "en": "Beauty",
        "ko": "뷰티",
        "zh_hans": null
    },
    "children": [
        {
            "slug": "skin-care",
            "code": 2010000,
            "name": {
                "en": "Skin Care",
                "ko": "스킨케어",
                "zh_hans": null
            },
            "children": [
                {
                    "slug": "skin-and-toner",
                    "code": 2010100,
                    "name": {
                        "en": "Skin & Toner",
                        "ko": "스킨·토너",
                        "zh_hans": null
                    },
                    "children": [
                        {
                            "slug": "skin",
                            "code": 2010101,
                            "name": {
                                "en": "Skin",
                                "ko": "스킨",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "toner",
                            "code": 2010102,
                            "name": {
                                "en": "Toner",
                                "ko": "토너",
                                "zh_hans": null
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "slug": "mist",
                    "code": 2010200,
                    "name": {
                        "en": "Mist",
                        "ko": "미스트",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "face-moisturizer-and-treatment",
                    "code": 2010300,
                    "name": {
                        "en": "Face Moisturizer & Treatment",
                        "ko": "페이스 모이스쳐·트리트먼트",
                        "zh_hans": null
                    },
                    "children": [
                        {
                            "slug": "lotion",
                            "code": 2010301,
                            "name": {
                                "en": "Lotion",
                                "ko": "로션",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "emulsion",
                            "code": 2010302,
                            "name": {
                                "en": "Emulsion",
                                "ko": "에멀젼",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "oil",
                            "code": 2010303,
                            "name": {
                                "en": "Oil",
                                "ko": "오일",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "essence",
                            "code": 2010304,
                            "name": {
                                "en": "Essence",
                                "ko": "에센스",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "ample",
                            "code": 2010305,
                            "name": {
                                "en": "Ample",
                                "ko": "엠플",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "serum",
                            "code": 2010306,
                            "name": {
                                "en": "Serum",
                                "ko": "세럼",
                                "zh_hans": null
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "slug": "cream-and-gel",
                    "code": 2010400,
                    "name": {
                        "en": "Cream & Gel",
                        "ko": "크림·젤",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "mask-and-pack",
                    "code": 2010500,
                    "name": {
                        "en": "Mask & Pack",
                        "ko": "마스크·팩",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "eye-care",
                    "code": 2010600,
                    "name": {
                        "en": "Eye Care",
                        "ko": "아이케어",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "lip-care",
                    "code": 2010700,
                    "name": {
                        "en": "Lip Care",
                        "ko": "립케어",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "sun-care",
                    "code": 2010800,
                    "name": {
                        "en": "Sun Care",
                        "ko": "선케어",
                        "zh_hans": null
                    },
                    "children": [
                        {
                            "slug": "stick-and-balm",
                            "code": 2010801,
                            "name": {
                                "en": "Stick & Balm",
                                "ko": "스틱·밤",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "cream-and-gel",
                            "code": 2010802,
                            "name": {
                                "en": "Cream & Gel",
                                "ko": "크림·젤",
                                "zh_hans": null
                            },
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "slug": "cleansing-and-peeling",
            "code": 2020000,
            "name": {
                "en": "Cleansing & Peeling",
                "ko": "클렌징/필링",
                "zh_hans": null
            },
            "children": [
                {
                    "slug": "cleansing-foam-and-gel",
                    "code": 2020100,
                    "name": {
                        "en": "Cleansing Foam & Gel",
                        "ko": "클렌징 폼·젤",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "cleansing-water",
                    "code": 2020200,
                    "name": {
                        "en": "Cleansing Water",
                        "ko": "클렌징 워터",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "cleansing-oil",
                    "code": 2020300,
                    "name": {
                        "en": "Cleansing Oil",
                        "ko": "클렌징 오일",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "cleansing-lotion-and-cream",
                    "code": 2020400,
                    "name": {
                        "en": "Cleansing Lotion & Cream",
                        "ko": "클렌징 로션·크림",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "cleansing-soap",
                    "code": 2020500,
                    "name": {
                        "en": "Cleansing Soap",
                        "ko": "클렌징 비누",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "cleansing-wipe",
                    "code": 2020600,
                    "name": {
                        "en": "Cleansing Wipe",
                        "ko": "클렌징 티슈",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "lip-and-eye-cleanser",
                    "code": 2020700,
                    "name": {
                        "en": "Lip & Eye Cleanser",
                        "ko": "립·아이 리무버",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "scrubs-and-peeling",
                    "code": 2020800,
                    "name": {
                        "en": "Scrubs & Peeling",
                        "ko": "스크럽·필링",
                        "zh_hans": null
                    },
                    "children": []
                }
            ]
        },
        {
            "slug": "sun-care",
            "code": 2030000,
            "name": {
                "en": "Sun Care",
                "ko": "선케어",
                "zh_hans": null
            },
            "children": [
                {
                    "slug": "face",
                    "code": 2030100,
                    "name": {
                        "en": "Face",
                        "ko": "페이스",
                        "zh_hans": null
                    },
                    "children": [
                        {
                            "slug": "stick-and-balm",
                            "code": 2030101,
                            "name": {
                                "en": "Stick & Balm",
                                "ko": "스틱·밤",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "cream-and-gel",
                            "code": 2030102,
                            "name": {
                                "en": "Cream & Gel",
                                "ko": "크림·젤",
                                "zh_hans": null
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "slug": "body",
                    "code": 2030200,
                    "name": {
                        "en": "Body",
                        "ko": "바디",
                        "zh_hans": null
                    },
                    "children": [
                        {
                            "slug": "stick-and-balm",
                            "code": 2030201,
                            "name": {
                                "en": "Stick & Balm",
                                "ko": "스틱·밤",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "cream-and-gel",
                            "code": 2030202,
                            "name": {
                                "en": "Cream & Gel",
                                "ko": "크림·젤",
                                "zh_hans": null
                            },
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "slug": "makeup",
            "code": 2040000,
            "name": {
                "en": "Makeup",
                "ko": "메이크업",
                "zh_hans": null
            },
            "children": [
                {
                    "slug": "face",
                    "code": 2040100,
                    "name": {
                        "en": "Face",
                        "ko": "페이스",
                        "zh_hans": null
                    },
                    "children": [
                        {
                            "slug": "makeup-base",
                            "code": 2040101,
                            "name": {
                                "en": "Makeup Base",
                                "ko": "메이크업 베이스",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "primer",
                            "code": 2040102,
                            "name": {
                                "en": "Primer",
                                "ko": "프라이머",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "bb-and-cc-cream",
                            "code": 2040103,
                            "name": {
                                "en": "BB & CC Cream",
                                "ko": "BB·CC 크림",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "foundation",
                            "code": 2040104,
                            "name": {
                                "en": "Foundation",
                                "ko": "파운데이션",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "cushion-and-powder-and-pact",
                            "code": 2040105,
                            "name": {
                                "en": "Cushion & Powder & Pact",
                                "ko": "쿠션·파우더·팩트",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "concealer",
                            "code": 2040106,
                            "name": {
                                "en": "Concealer",
                                "ko": "컨실러",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "blusher",
                            "code": 2040107,
                            "name": {
                                "en": "Blusher",
                                "ko": "블러셔",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "highlighter-and-shading",
                            "code": 2040108,
                            "name": {
                                "en": "Highlighter & Shading",
                                "ko": "하이라이터·셰이딩",
                                "zh_hans": null
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "slug": "eye",
                    "code": 2040200,
                    "name": {
                        "en": "Eye",
                        "ko": "아이",
                        "zh_hans": null
                    },
                    "children": [
                        {
                            "slug": "eyeshadow",
                            "code": 2040201,
                            "name": {
                                "en": "Eyeshadow",
                                "ko": "아이섀도",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "eyeliner",
                            "code": 2040202,
                            "name": {
                                "en": "Eyeliner",
                                "ko": "아이라이너",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "eyebrow",
                            "code": 2040203,
                            "name": {
                                "en": "Eyebrow",
                                "ko": "아이브로우",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "mascara",
                            "code": 2040204,
                            "name": {
                                "en": "Mascara",
                                "ko": "마스카라",
                                "zh_hans": null
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "slug": "lip",
                    "code": 2040300,
                    "name": {
                        "en": "Lip",
                        "ko": "립",
                        "zh_hans": null
                    },
                    "children": [
                        {
                            "slug": "lipstick",
                            "code": 2040301,
                            "name": {
                                "en": "Lipstick",
                                "ko": "립스틱",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "lip-tint",
                            "code": 2040302,
                            "name": {
                                "en": "Lip Tint",
                                "ko": "립틴트",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "lip-glosse",
                            "code": 2040303,
                            "name": {
                                "en": "Lip Glosse",
                                "ko": "립글로스",
                                "zh_hans": null
                            },
                            "children": []
                        },
                        {
                            "slug": "lip-treatment-and-balm",
                            "code": 2040304,
                            "name": {
                                "en": "Lip Treatment & Balm",
                                "ko": "립케어·립밤",
                                "zh_hans": null
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "slug": "makeup-brush-and-applicator",
                    "code": 2040400,
                    "name": {
                        "en": "Makeup Brush & Applicator",
                        "ko": "메이크업 브러쉬·도구",
                        "zh_hans": null
                    },
                    "children": []
                }
            ]
        },
        {
            "slug": "body-care",
            "code": 2050000,
            "name": {
                "en": "Body Care",
                "ko": "바디케어",
                "zh_hans": null
            },
            "children": [
                {
                    "slug": "body-wash",
                    "code": 2050100,
                    "name": {
                        "en": "Body Wash",
                        "ko": "바디워시",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "body-lotion",
                    "code": 2050200,
                    "name": {
                        "en": "Body Lotion",
                        "ko": "바디로션",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "body-cream-and-gel",
                    "code": 2050300,
                    "name": {
                        "en": "Body Cream & Gel",
                        "ko": "바디크림·젤",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "body-oil-and-essence",
                    "code": 2050400,
                    "name": {
                        "en": "Body Oil & Essence",
                        "ko": "바디오일·에센스",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "body-scrub",
                    "code": 2050500,
                    "name": {
                        "en": "Body Scrub",
                        "ko": "바디스크럽",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "body-mist",
                    "code": 2050600,
                    "name": {
                        "en": "Body Mist",
                        "ko": "바디미스트",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "hand-and-foot-treatment",
                    "code": 2050700,
                    "name": {
                        "en": "Hand & Foot Treatment",
                        "ko": "핸드·풋케어",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "bath-salt-and-bubble",
                    "code": 2050800,
                    "name": {
                        "en": "Bath Salt & Bubble",
                        "ko": "입욕제",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "feminine-care",
                    "code": 2050900,
                    "name": {
                        "en": "Feminine Care",
                        "ko": "여성청결제",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "deodorant",
                    "code": 2051000,
                    "name": {
                        "en": "Deodorant",
                        "ko": "데오드란트",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "other-body-product",
                    "code": 2051100,
                    "name": {
                        "en": "Other Body Product",
                        "ko": "바디 기타",
                        "zh_hans": null
                    },
                    "children": []
                }
            ]
        },
        {
            "slug": "hair-care",
            "code": 2060000,
            "name": {
                "en": "Hair Care",
                "ko": "헤어케어",
                "zh_hans": null
            },
            "children": [
                {
                    "slug": "shampoo",
                    "code": 2060100,
                    "name": {
                        "en": "Shampoo",
                        "ko": "샴푸",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "conditioner-and-treatment",
                    "code": 2060200,
                    "name": {
                        "en": "Conditioner & Treatment",
                        "ko": "린스·트리트먼트",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "essence-and-oil",
                    "code": 2060300,
                    "name": {
                        "en": "Essence & Oil",
                        "ko": "에센스·오일",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "mist",
                    "code": 2060400,
                    "name": {
                        "en": "Mist",
                        "ko": "미스트",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "styling-product",
                    "code": 2060500,
                    "name": {
                        "en": "Styling Product",
                        "ko": "스타일링",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "other-hair-product",
                    "code": 2060600,
                    "name": {
                        "en": "Other Hair Product",
                        "ko": "헤어기타",
                        "zh_hans": null
                    },
                    "children": []
                }
            ]
        },
        {
            "slug": "fragrance",
            "code": 2070000,
            "name": {
                "en": "Fragrance",
                "ko": "향수",
                "zh_hans": null
            },
            "children": [
                {
                    "slug": "women",
                    "code": 2070100,
                    "name": {
                        "en": "Women",
                        "ko": "여자향수",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "men",
                    "code": 2070200,
                    "name": {
                        "en": "Men",
                        "ko": "남자향수",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "fragrance-set",
                    "code": 2070300,
                    "name": {
                        "en": "Fragrance Set",
                        "ko": "향수세트",
                        "zh_hans": null
                    },
                    "children": []
                }
            ]
        },
        {
            "slug": "candle-and-diffuser",
            "code": 2080000,
            "name": {
                "en": "Candle & Diffuser",
                "ko": "캔들·디퓨저",
                "zh_hans": null
            },
            "children": [
                {
                    "slug": "candle",
                    "code": 2080100,
                    "name": {
                        "en": "Candle",
                        "ko": "캔들",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "diffuser",
                    "code": 2080200,
                    "name": {
                        "en": "Diffuser",
                        "ko": "디퓨저",
                        "zh_hans": null
                    },
                    "children": []
                }
            ]
        },
        {
            "slug": "mens-grooming",
            "code": 2090000,
            "name": {
                "en": "Men's Grooming",
                "ko": "남성",
                "zh_hans": null
            },
            "children": [
                {
                    "slug": "skin",
                    "code": 2090100,
                    "name": {
                        "en": "Skin",
                        "ko": "스킨케어",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "body",
                    "code": 2090200,
                    "name": {
                        "en": "Body",
                        "ko": "바디케어",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "hair",
                    "code": 2090300,
                    "name": {
                        "en": "Hair",
                        "ko": "헤어케어",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "makeup",
                    "code": 2090400,
                    "name": {
                        "en": "Makeup",
                        "ko": "메이크업",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "cologne-and-deodorant",
                    "code": 2090500,
                    "name": {
                        "en": "Cologne & Deodorant",
                        "ko": "향수·데오드란트",
                        "zh_hans": null
                    },
                    "children": []
                },
                {
                    "slug": "shave",
                    "code": 2090600,
                    "name": {
                        "en": "Shave",
                        "ko": "쉐이빙·잡화",
                        "zh_hans": null
                    },
                    "children": []
                }
            ]
        },
        {
            "slug": "k-beauty",
            "code": 2100000,
            "name": {
                "en": "K Beauty",
                "ko": "K Beauty",
                "zh_hans": null
            },
            "children": []
        }
    ]
  }
}`);







export const CATEGORY_CODE_MAP_CONST = {
  'pantry-and-household': {
    'code': 1000000,
    'grocery': {
      'code': 1010000,
      'beverages': {
        'code': 1010100,
        'water': {
          'code': 1010101
        },
        'sports-and-energy-drinks': {
          'code': 1010102
        },
        'soft-drinks': {
          'code': 1010103
        },
        'coffee': {
          'code': 1010104
        },
        'tea': {
          'code': 1010105
        },
        'milk': {
          'code': 1010106
        },
        'non-dairy-milk': {
          'code': 1010107
        },
        'juice': {
          'code': 1010108
        }
      },
      'snack-foods': {
        'code': 1010200,
        'applesauce-fruit-cups-and-squeezes': {
          'code': 1010201
        },
        'chips-and-pretzels': {
          'code': 1010202
        },
        'cookies': {
          'code': 1010203
        },
        'bread-and-crackers': {
          'code': 1010204
        },
        'fruit-and-vegetable-snacks': {
          'code': 1010205
        },
        'protein-and-granola-bars': {
          'code': 1010206
        },
        'ice-cream-cones-and-toppings': {
          'code': 1010207
        },
        'jerky-and-dried-meats': {
          'code': 1010208
        },
        'nuts-seeds-and-trail-mix': {
          'code': 1010209
        },
        'popcorn-and-puffed-snacks': {
          'code': 1010210
        },
        'pudding-and-gelatin': {
          'code': 1010211
        }
      },
      'candy-gum-and-chocolate': {
        'code': 1010300,
        'chocolate': {
          'code': 1010301
        },
        'chewing-gum': {
          'code': 1010302
        },
        'candy': {
          'code': 1010303
        },
        'other-sweets': {
          'code': 1010304
        }
      },
      'breakfast-foods': {
        'code': 1010400,
        'cold-cereals': {
          'code': 1010401
        },
        'hot-cereals-and-oats': {
          'code': 1010402
        },
        'toaster-pastries': {
          'code': 1010403
        },
        'granola-and-museli': {
          'code': 1010404
        },
        'meal-replacement-proein-and-granola-bars': {
          'code': 1010405
        }
      },
      'soups-meals-and-side-dishes': {
        'code': 1010500,
        'macaroni-and-cheese': {
          'code': 1010501
        },
        'soups': {
          'code': 1010502
        },
        'broth': {
          'code': 1010503
        },
        'chilis-and-stews': {
          'code': 1010504
        },
        'asian-meals': {
          'code': 1010505
        },
        'italian-meals': {
          'code': 1010506
        },
        'mexican-meals-and-taco-kits': {
          'code': 1010507
        },
        'indian-meals': {
          'code': 1010508
        },
        'potatoes-and-stuffings': {
          'code': 1010509
        }
      },
      'pantry': {
        'code': 1010600,
        'spices-and-seasonings': {
          'code': 1010601
        },
        'salt-and-pepper': {
          'code': 1010602
        },
        'condiments': {
          'code': 1010603
        },
        'oils': {
          'code': 1010604
        },
        'vinegars': {
          'code': 1010605
        },
        'salad-dressings': {
          'code': 1010606
        },
        'salad-toppings': {
          'code': 1010607
        },
        'sauces-and-marinades': {
          'code': 1010608
        },
        'salsas-and-dips': {
          'code': 1010609
        },
        'butters': {
          'code': 1010610
        },
        'jams-jellies-and-preserves': {
          'code': 1010611
        },
        'sweet-spreads': {
          'code': 1010612
        },
        'flours-and-meals': {
          'code': 1010613
        },
        'sugar-and-other-sweeteners': {
          'code': 1010614
        },
        'baking-ingredients': {
          'code': 1010615
        },
        'baking-mixes': {
          'code': 1010616
        },
        'honey-and-syrups': {
          'code': 1010617
        }
      },
      'pasta-and-pasta-sauce': {
        'code': 1010700,
        'pasta-and-noodles': {
          'code': 1010701
        },
        'pasta-sauces': {
          'code': 1010702
        }
      },
      'canned-and-jarred-food': {
        'code': 1010800,
        'canned-beans': {
          'code': 1010801
        },
        'canned-fruit': {
          'code': 1010802
        },
        'canned-meat-and-seafood': {
          'code': 1010803
        },
        'canned-vegetables': {
          'code': 1010804
        },
        'canned-tomatoes-and-paste': {
          'code': 1010805
        },
        'pickled-vegetables-and-olives': {
          'code': 1010806
        }
      },
      'cooking-and-baking-supplies': {
        'code': 1010900,
        'baking-mixes': {
          'code': 1010901
        },
        'baking-ingredients': {
          'code': 1010902
        },
        'breadcrumbs': {
          'code': 1010903
        },
        'doughs-shells-and-crusts': {
          'code': 1010904
        },
        'extracts': {
          'code': 1010905
        },
        'flours-and-meals': {
          'code': 1010906
        },
        'frosting-and-decoration': {
          'code': 1010907
        },
        'marshmallows': {
          'code': 1010908
        },
        'sugar-and-other-sweeteners': {
          'code': 1010909
        },
        'honey-and-syrups': {
          'code': 1010910
        }
      },
      'rice-beans-and-grains': {
        'code': 1011000,
        'dry-beans': {
          'code': 1011001
        },
        'grains': {
          'code': 1011002
        },
        'quinoa': {
          'code': 1011003
        },
        'rice': {
          'code': 1011004
        },
        'couscous': {
          'code': 1011005
        }
      },
      'international-food': {
        'code': 1011100,
        'indian-cuisine': {
          'code': 1011101
        },
        'chinese-cuisine': {
          'code': 1011102
        },
        'japanese-cuisine': {
          'code': 1011103
        },
        'korean-cuisine': {
          'code': 1011104
        },
        'asian-cuisine': {
          'code': 1011105
        },
        'mexican-cuisine': {
          'code': 1011106
        },
        'latin-american-cuisine': {
          'code': 1011107
        },
        'european-cuisine': {
          'code': 1011108
        }
      }
    },
    'household-supplies': {
      'code': 1020000,
      'paper-and-plastic-products': {
        'code': 1020100,
        'paper-towels': {
          'code': 1020101
        },
        'toilet-paper': {
          'code': 1020102
        },
        'facial-tissues': {
          'code': 1020103
        },
        'disposable-tableware': {
          'code': 1020104
        },
        'paper-napkins': {
          'code': 1020105
        },
        'disposable-coffee-filters': {
          'code': 1020106
        }
      },
      'laundry': {
        'code': 1020200,
        'laundry-detergent': {
          'code': 1020201
        },
        'fabric-softener': {
          'code': 1020202
        },
        'dryer-sheets-and-balls': {
          'code': 1020203
        },
        'stain-removers': {
          'code': 1020204
        },
        'scent-boosters': {
          'code': 1020205
        },
        'bleach': {
          'code': 1020206
        },
        'washing-machine-cleaners': {
          'code': 1020207
        },
        'other-laundry-care': {
          'code': 1020208
        }
      },
      'cleaning-products': {
        'code': 1020300,
        'all-purpose-cleaners': {
          'code': 1020301
        },
        'cleaning-wipes': {
          'code': 1020302
        },
        'bleach': {
          'code': 1020303
        },
        'sponges-and-brushes': {
          'code': 1020304
        },
        'dishwashing-detergent': {
          'code': 1020305
        },
        'dish-soap': {
          'code': 1020306
        },
        'bathroom-cleaners': {
          'code': 1020307
        },
        'kitchen-cleaners': {
          'code': 1020308
        },
        'produce-wash': {
          'code': 1020309
        },
        'drain-cleaners': {
          'code': 1020310
        },
        'floor-cleaners': {
          'code': 1020311
        },
        'specialty-cleaners': {
          'code': 1020312
        },
        'glass-cleaners': {
          'code': 1020313
        }
      },
      'cleaning-tools': {
        'code': 1020400,
        'sponges-and-brushes': {
          'code': 1020401
        },
        'mops-and-accessories': {
          'code': 1020402
        },
        'dusting-tools-and-cloths': {
          'code': 1020403
        },
        'cleaning-gloves': {
          'code': 1020404
        },
        'brooms': {
          'code': 1020405
        },
        'bowl-brushes-and-plungers': {
          'code': 1020406
        },
        'dustbins': {
          'code': 1020407
        }
      },
      'food-storage-and-trash-bags': {
        'code': 1020500,
        'food-storage-bags': {
          'code': 1020501
        },
        'foil': {
          'code': 1020502
        },
        'food-storage-containers': {
          'code': 1020503
        },
        'plastic-wrap': {
          'code': 1020504
        },
        'wax-and-parchment-paper': {
          'code': 1020505
        },
        'trash-bags': {
          'code': 1020506
        }
      },
      'home-fragrance': {
        'code': 1020600,
        'air-fresheners': {
          'code': 1020601
        },
        'candles': {
          'code': 1020602
        },
        'fragrance-diffusers': {
          'code': 1020603
        }
      },
      'light-bulbs': {
        'code': 1020700
      },
      'insect-and-pest-control': {
        'code': 1020800,
        'indoor-pest-control': {
          'code': 1020801
        },
        'outdoor-pest-control': {
          'code': 1020802
        },
        'insect-repellent': {
          'code': 1020803
        }
      }
    },
    'personal-care': {
      'code': 1030000,
      'oral-and-personal-care': {
        'code': 1030100,
        'deodorant': {
          'code': 1030101
        },
        'ear-care': {
          'code': 1030102
        },
        'eye-care': {
          'code': 1030103
        },
        'feminine-care': {
          'code': 1030104
        },
        'toothbrushes': {
          'code': 1030105
        },
        'toothpaste': {
          'code': 1030106
        },
        'mouthwash': {
          'code': 1030107
        },
        'dental-floss': {
          'code': 1030108
        },
        'manual-toothbrushes': {
          'code': 1030109
        },
        'electric-toothbrushes': {
          'code': 1030110
        },
        'other-oral-care': {
          'code': 1030111
        },
        'razors': {
          'code': 1030112
        },
        'shaving-cream': {
          'code': 1030113
        },
        'waxing-and-hair-removal': {
          'code': 1030114
        },
        'safer-sex-and-contraceptives': {
          'code': 1030115
        },
        'cotton-balls-and-rounds': {
          'code': 1030116
        },
        'incontinence': {
          'code': 1030117
        },
        'wet-shave': {
          'code': 1030118
        },
        'electric-shavers': {
          'code': 1030119
        }
      },
      'tools-and-accessories': {
        'code': 1030200,
        'bath-sponges-and-tools': {
          'code': 1030201
        },
        'eye-masks': {
          'code': 1030202
        },
        'beauty-and-spa-tools': {
          'code': 1030203
        },
        'cotton-balls-and-rounds': {
          'code': 1030204
        },
        'mirrors': {
          'code': 1030205
        },
        'toiletry-kits-and-cases': {
          'code': 1030206
        },
        'tweezers': {
          'code': 1030207
        },
        'facial-tissues': {
          'code': 1030208
        },
        'nail-care-tools': {
          'code': 1030209
        },
        'top-beauty-tools-and-accessories': {
          'code': 1030210
        }
      },
      'hair-care-products': {
        'code': 1030300,
        'shampoos': {
          'code': 1030301
        },
        'conditioners': {
          'code': 1030302
        },
        'styling-products': {
          'code': 1030303
        },
        'scalp-treatments': {
          'code': 1030304
        },
        'hair-color': {
          'code': 1030305
        },
        'hair-loss-products': {
          'code': 1030306
        },
        'hair-perms-and-texturizers': {
          'code': 1030307
        },
        'hair-relaxers-and-treatments': {
          'code': 1030308
        },
        'multicultural-hair-care-products': {
          'code': 1030309
        },
        'innovative-hair-care': {
          'code': 1030310
        }
      },
      'hair-tools-and-accessories': {
        'code': 1030400,
        'brushes': {
          'code': 1030401
        },
        'dryers-irons-and-diffusers': {
          'code': 1030402
        },
        'hair-rollers': {
          'code': 1030403
        },
        'hair-accessories': {
          'code': 1030404
        },
        'haircutting-tools': {
          'code': 1030405
        },
        'combs': {
          'code': 1030406
        }
      },
      'makeup': {
        'code': 1030500,
        'body-art-and-makeup': {
          'code': 1030501
        },
        'makeup-brushes': {
          'code': 1030502
        },
        'face-makeup': {
          'code': 1030503
        },
        'lip-makeup': {
          'code': 1030504
        },
        'makeup-sets': {
          'code': 1030505
        },
        'eyeliner-and-brow-pencils': {
          'code': 1030506
        },
        'mascara-and-lashes': {
          'code': 1030507
        },
        'eye-shadow': {
          'code': 1030508
        },
        'makeup-sponges': {
          'code': 1030509
        },
        'makeup-tools': {
          'code': 1030510
        }
      },
      'nail-care': {
        'code': 1030600,
        'cuticle-care': {
          'code': 1030601
        },
        'nail-care-tools': {
          'code': 1030602
        },
        'nail-polish': {
          'code': 1030603
        },
        'nail-polish-remover': {
          'code': 1030604
        }
      },
      'skin-care': {
        'code': 1030700,
        'bath-salts-and-bubbles': {
          'code': 1030701
        },
        'makeup-remover': {
          'code': 1030702
        },
        'hand-soap': {
          'code': 1030703
        },
        'lip-care': {
          'code': 1030704
        },
        'suncare': {
          'code': 1030705
        },
        'toners-and-astringents': {
          'code': 1030706
        },
        'body-powder': {
          'code': 1030707
        },
        'body-moisturizers': {
          'code': 1030708
        },
        'massage-oil-and-aromatherapy': {
          'code': 1030709
        },
        'hand-sanitizers-and-wipes': {
          'code': 1030710
        },
        'facial-cleansers': {
          'code': 1030711
        },
        'facial-moisturizers-and-treatment': {
          'code': 1030712
        },
        'soap-and-body-wash': {
          'code': 1030713
        },
        'shaving-cream': {
          'code': 1030714
        }
      },
      'mens-essentials': {
        'code': 1030800,
        'beard-and-shave': {
          'code': 1030801
        },
        'body': {
          'code': 1030802
        },
        'face': {
          'code': 1030803
        },
        'hair': {
          'code': 1030804
        },
        'cologne': {
          'code': 1030805
        },
        'wellness': {
          'code': 1030806
        }
      }
    },
    'health': {
      'code': 1040000,
      'medicine-cabinet': {
        'code': 1040100,
        'allergy-sinus-and-asthma': {
          'code': 1040101
        },
        'childrens-medicine': {
          'code': 1040102
        },
        'cold-sore-and-blister-treatments': {
          'code': 1040103
        },
        'cough-and-cold': {
          'code': 1040104
        },
        'diabetes': {
          'code': 1040105
        },
        'digestion-and-nausea': {
          'code': 1040106
        },
        'foot-healthcare': {
          'code': 1040107
        },
        'incontinence': {
          'code': 1040108
        },
        'pain-relievers': {
          'code': 1040109
        },
        'sleep-and-snoring': {
          'code': 1040110
        },
        'smoking-cessation': {
          'code': 1040111
        },
        'therapeutic-ointments-and-powders': {
          'code': 1040112
        },
        'thermometers': {
          'code': 1040113
        },
        'ear-care': {
          'code': 1040114
        },
        'eye-care': {
          'code': 1040115
        }
      },
      'medical-supplies-and-equipment': {
        'code': 1040200,
        'pills-cases-and-splitters': {
          'code': 1040201
        },
        'bathroom-aids-and-safety': {
          'code': 1040202
        },
        'beds-and-accessories': {
          'code': 1040203
        },
        'braces-splints-and-slings': {
          'code': 1040204
        },
        'daily-living-aids': {
          'code': 1040205
        },
        'mobility-aids-and-equipment': {
          'code': 1040206
        },
        'occupational-and-physical-therapy-aids': {
          'code': 1040207
        },
        'pen-lights': {
          'code': 1040208
        },
        'tests': {
          'code': 1040209
        },
        'first-aid': {
          'code': 1040210
        },
        'dehumidifiers': {
          'code': 1040211
        },
        'humidifiers': {
          'code': 1040212
        },
        'health-monitors': {
          'code': 1040213
        }
      },
      'sports-nutrition-and-diet': {
        'code': 1040300,
        'protein-and-meal-replacement': {
          'code': 1040301
        },
        'energy-and-endurance': {
          'code': 1040302
        },
        'weight-loss-supplements-and-cleanses': {
          'code': 1040303
        },
        'mass-gainers': {
          'code': 1040304
        },
        'amino-acids-and-creatine': {
          'code': 1040305
        },
        'on-the-go-nutrition': {
          'code': 1040306
        },
        'slimfast-campaign': {
          'code': 1040307
        }
      },
      'vitamins-and-dietary-supplements': {
        'code': 1040400,
        'minerals': {
          'code': 1040401
        },
        'supplements': {
          'code': 1040402
        },
        'letter-vitamins': {
          'code': 1040403
        },
        'fish-oils-and-omegas': {
          'code': 1040404
        },
        'probiotics': {
          'code': 1040405
        },
        'multivitamins': {
          'code': 1040406
        },
        'protein-and-meal-replacements': {
          'code': 1040407
        },
        'pill-cases-and-splitters': {
          'code': 1040408
        },
        'amino-acids-and-creatine': {
          'code': 1040409
        },
        'weight-loss-supplements': {
          'code': 1040410
        },
        'new-and-noteworthy-vitamins-and-supplements': {
          'code': 1040411
        },
        'herbs-and-homeopathy': {
          'code': 1040412
        }
      }
    },
    'baby': {
      'code': 1050000,
      'baby-food-and-formula': {
        'code': 1050100,
        'baby-and-toddler-snacks': {
          'code': 1050101
        },
        'baby-food': {
          'code': 1050102
        },
        'baby-formula': {
          'code': 1050103
        },
        'toddler-juices-and-milk': {
          'code': 1050104
        }
      },
      'diapering': {
        'code': 1050200,
        'diapers': {
          'code': 1050201
        },
        'baby-wipes': {
          'code': 1050202
        },
        'baby-wipe-holders-and-warmers': {
          'code': 1050203
        },
        'changing-table-accessories': {
          'code': 1050204
        },
        'cloth-diapers': {
          'code': 1050205
        },
        'cloth-diaper-accessories': {
          'code': 1050206
        },
        'diaper-bags': {
          'code': 1050207
        },
        'diaper-cakes': {
          'code': 1050208
        },
        'diaper-changing-pads': {
          'code': 1050209
        },
        'diaper-creams-and-ointments': {
          'code': 1050210
        },
        'diaper-pails-and-refills': {
          'code': 1050211
        },
        'diaper-stackers-and-caddies': {
          'code': 1050212
        }
      },
      'baby-gear': {
        'code': 1050300,
        'baby-monitors': {
          'code': 1050301
        },
        'baby-seats': {
          'code': 1050302
        },
        'bouncers-and-walkers': {
          'code': 1050303
        },
        'car-seats': {
          'code': 1050304
        },
        'carriers': {
          'code': 1050305
        },
        'harnesses-and-leashes': {
          'code': 1050306
        },
        'play-mats-and-activity-gyms': {
          'code': 1050307
        },
        'playards-and-travel-beds': {
          'code': 1050308
        },
        'strollers': {
          'code': 1050309
        }
      },
      'baby-gear-accessories': {
        'code': 1050400,
        'car-seat-and-stroller-toys': {
          'code': 1050401
        },
        'car-seat-accessories': {
          'code': 1050402
        },
        'carrier-accessories': {
          'code': 1050403
        },
        'crib-netting': {
          'code': 1050404
        },
        'shopping-cart-covers': {
          'code': 1050405
        },
        'stroller-accessories': {
          'code': 1050406
        }
      },
      'feeding-and-nursing': {
        'code': 1050500,
        'baby-bottles-and-accessories': {
          'code': 1050501
        },
        'baby-food': {
          'code': 1050502
        },
        'baby-formula': {
          'code': 1050503
        },
        'bibs-and-burp-cloths': {
          'code': 1050504
        },
        'breast-pump': {
          'code': 1050505
        },
        'breast-pump-accessories': {
          'code': 1050506
        },
        'food-and-formula-prep': {
          'code': 1050507
        },
        'food-storage-and-on-the-go': {
          'code': 1050508
        },
        'highchairs-and-boosters': {
          'code': 1050509
        },
        'kids-tabletop': {
          'code': 1050510
        },
        'lunch-bags': {
          'code': 1050511
        },
        'nursing-accessories': {
          'code': 1050512
        },
        'pacifiers-and-teethers': {
          'code': 1050513
        },
        'sippys-and-cups': {
          'code': 1050514
        }
      },
      'babyproofing': {
        'code': 1050600,
        'baby-monitors': {
          'code': 1050601
        },
        'bath-safety': {
          'code': 1050602
        },
        'edge-and-corner-guards': {
          'code': 1050603
        },
        'electrical-safety': {
          'code': 1050604
        },
        'gates-and-rails': {
          'code': 1050605
        },
        'kitchen-safety': {
          'code': 1050606
        },
        'outdoor-safety': {
          'code': 1050607
        },
        'rails-and-rail-guards': {
          'code': 1050608
        },
        'sleep-positioners': {
          'code': 1050609
        }
      },
      'baby-care': {
        'code': 1050700,
        'baby-bubble-bath': {
          'code': 1050701
        },
        'baby-oil-and-lotion': {
          'code': 1050702
        },
        'baby-powder': {
          'code': 1050703
        },
        'baby-shampoo-and-wash': {
          'code': 1050704
        }
      },
      'potty-training': {
        'code': 1050800,
        'potties': {
          'code': 1050801
        },
        'potty-training-aids': {
          'code': 1050802
        },
        'seat-covers': {
          'code': 1050803
        },
        'step-stools': {
          'code': 1050804
        },
        'training-pants': {
          'code': 1050805
        }
      },
      'baby-bathing': {
        'code': 1050900,
        'baby-bath-accessories': {
          'code': 1050901
        },
        'baby-grooming': {
          'code': 1050902
        },
        'baby-tubs': {
          'code': 1050903
        },
        'baby-washcloths-and-towels': {
          'code': 1050904
        },
        'bath-toys': {
          'code': 1050905
        }
      },
      'baby-gifts': {
        'code': 1051000,
        'baby-gift-sets-and-baskets': {
          'code': 1051001
        },
        'keepsakes-and-albums': {
          'code': 1051002
        },
        'new-mom-gifts': {
          'code': 1051003
        },
        'toy-banks': {
          'code': 1051004
        }
      }
    },
    'pet-supplies': {
      'code': 1060000,
      'dog-supplies': {
        'code': 1060100,
        'collars-harnesses-and-leashes': {
          'code': 1060101
        },
        'dog-apparel': {
          'code': 1060102
        },
        'dog-beds': {
          'code': 1060103
        },
        'dog-bowls-and-feeders': {
          'code': 1060104
        },
        'travel-supplies': {
          'code': 1060105
        },
        'cleaning-supplies': {
          'code': 1060106
        },
        'crates-and-kennels': {
          'code': 1060107
        },
        'flea-and-tick-control': {
          'code': 1060108
        },
        'dog-food': {
          'code': 1060109
        },
        'grooming': {
          'code': 1060110
        },
        'dog-houses': {
          'code': 1060111
        },
        'medication-and-health-supplies': {
          'code': 1060112
        },
        'modern-furniture': {
          'code': 1060113
        },
        'dog-technology': {
          'code': 1060114
        },
        'toys': {
          'code': 1060115
        },
        'training-and-behavior': {
          'code': 1060116
        },
        'treats': {
          'code': 1060117
        },
        'gates-and-ramps': {
          'code': 1060118
        },
        'poop-bags-and-housebreaking': {
          'code': 1060119
        }
      },
      'cat-supplies': {
        'code': 1060200,
        'cat-beds': {
          'code': 1060201
        },
        'carriers': {
          'code': 1060202
        },
        'cleaning-supplies': {
          'code': 1060203
        },
        'flea-and-tick-control': {
          'code': 1060204
        },
        'cat-food': {
          'code': 1060205
        },
        'cat-grooming': {
          'code': 1060206
        },
        'health-supplies': {
          'code': 1060207
        },
        'litter': {
          'code': 1060208
        },
        'litter-boxes': {
          'code': 1060209
        },
        'scratchers': {
          'code': 1060210
        },
        'cat-toys': {
          'code': 1060211
        },
        'training-and-behavior-aids': {
          'code': 1060212
        },
        'cat-treats': {
          'code': 1060213
        },
        'cat-trees-and-condos': {
          'code': 1060214
        },
        'collars-harnesses-and-leashes': {
          'code': 1060215
        },
        'feeding-and-watering-supplies': {
          'code': 1060216
        }
      }
    },
    'office-supplies': {
      'code': 1070000,
      'pens-pencils-and-markers': {
        'code': 1070100
      },
      'tape-and-adhesives': {
        'code': 1070200
      },
      'office-paper': {
        'code': 1070300
      },
      'presentation-boards': {
        'code': 1070400
      },
      'workspace-organizers': {
        'code': 1070500
      },
      'staplers-and-punches': {
        'code': 1070600
      },
      'labels-indexes-and-stamps': {
        'code': 1070700
      },
      'filing-products': {
        'code': 1070800
      },
      'binders-and-binding-systems': {
        'code': 1070900
      },
      'scissors-cutters-and-measuring-devices': {
        'code': 1071000
      },
      'envelopes-and-shipping-supplies': {
        'code': 1071100
      },
      'calendars-and-planners': {
        'code': 1071200
      },
      'stationary': {
        'code': 1071300
      }
    }
  },
  'beauty': {
    'code': 2000000,
    'skin-care': {
      'code': 2010000,
      'skin-and-toner': {
        'code': 2010100,
        'skin': {
          'code': 2010101
        },
        'toner': {
          'code': 2010102
        }
      },
      'mist': {
        'code': 2010200
      },
      'face-moisturizer-and-treatment': {
        'code': 2010300,
        'lotion': {
          'code': 2010301
        },
        'emulsion': {
          'code': 2010302
        },
        'oil': {
          'code': 2010303
        },
        'essence': {
          'code': 2010304
        },
        'ample': {
          'code': 2010305
        },
        'serum': {
          'code': 2010306
        }
      },
      'cream-and-gel': {
        'code': 2010400
      },
      'mask-and-pack': {
        'code': 2010500
      },
      'eye-care': {
        'code': 2010600
      },
      'lip-care': {
        'code': 2010700
      },
      'sun-care': {
        'code': 2010800,
        'stick-and-balm': {
          'code': 2010801
        },
        'cream-and-gel': {
          'code': 2010802
        }
      }
    },
    'cleansing-and-peeling': {
      'code': 2020000,
      'cleansing-foam-and-gel': {
        'code': 2020100
      },
      'cleansing-water': {
        'code': 2020200
      },
      'cleansing-oil': {
        'code': 2020300
      },
      'cleansing-lotion-and-cream': {
        'code': 2020400
      },
      'cleansing-soap': {
        'code': 2020500
      },
      'cleansing-wipe': {
        'code': 2020600
      },
      'lip-and-eye-cleanser': {
        'code': 2020700
      },
      'scrubs-and-peeling': {
        'code': 2020800
      }
    },
    'sun-care': {
      'code': 2030000,
      'face': {
        'code': 2030100,
        'stick-and-balm': {
          'code': 2030101
        },
        'cream-and-gel': {
          'code': 2030102
        }
      },
      'body': {
        'code': 2030200,
        'stick-and-balm': {
          'code': 2030201
        },
        'cream-and-gel': {
          'code': 2030202
        }
      }
    },
    'makeup': {
      'code': 2040000,
      'face': {
        'code': 2040100,
        'makeup-base': {
          'code': 2040101
        },
        'primer': {
          'code': 2040102
        },
        'bb-and-cc-cream': {
          'code': 2040103
        },
        'foundation': {
          'code': 2040104
        },
        'cushion-and-powder-and-pact': {
          'code': 2040105
        },
        'concealer': {
          'code': 2040106
        },
        'blusher': {
          'code': 2040107
        },
        'highlighter-and-shading': {
          'code': 2040108
        }
      },
      'eye': {
        'code': 2040200,
        'eyeshadow': {
          'code': 2040201
        },
        'eyeliner': {
          'code': 2040202
        },
        'eyebrow': {
          'code': 2040203
        },
        'mascara': {
          'code': 2040204
        }
      },
      'lip': {
        'code': 2040300,
        'lipstick': {
          'code': 2040301
        },
        'lip-tint': {
          'code': 2040302
        },
        'lip-glosse': {
          'code': 2040303
        },
        'lip-treatment-and-balm': {
          'code': 2040304
        }
      },
      'makeup-brush-and-applicator': {
        'code': 2040400
      }
    },
    'body-care': {
      'code': 2050000,
      'body-wash': {
        'code': 2050100
      },
      'body-lotion': {
        'code': 2050200
      },
      'body-cream-and-gel': {
        'code': 2050300
      },
      'body-oil-and-essence': {
        'code': 2050400
      },
      'body-scrub': {
        'code': 2050500
      },
      'body-mist': {
        'code': 2050600
      },
      'hand-and-foot-treatment': {
        'code': 2050700
      },
      'bath-salt-and-bubble': {
        'code': 2050800
      },
      'feminine-care': {
        'code': 2050900
      },
      'deodorant': {
        'code': 2051000
      },
      'other-body-product': {
        'code': 2051100
      }
    },
    'hair-care': {
      'code': 2060000,
      'shampoo': {
        'code': 2060100
      },
      'conditioner-and-treatment': {
        'code': 2060200
      },
      'essence-and-oil': {
        'code': 2060300
      },
      'mist': {
        'code': 2060400
      },
      'styling-product': {
        'code': 2060500
      },
      'other-hair-product': {
        'code': 2060600
      }
    },
    'fragrance': {
      'code': 2070000,
      'women': {
        'code': 2070100
      },
      'men': {
        'code': 2070200
      },
      'fragrance-set': {
        'code': 2070300
      }
    },
    'candle-and-diffuser': {
      'code': 2080000,
      'candle': {
        'code': 2080100
      },
      'diffuser': {
        'code': 2080200
      }
    },
    'mens-grooming': {
      'code': 2090000,
      'skin': {
        'code': 2090100
      },
      'body': {
        'code': 2090200
      },
      'hair': {
        'code': 2090300
      },
      'makeup': {
        'code': 2090400
      },
      'cologne-and-deodorant': {
        'code': 2090500
      },
      'shave': {
        'code': 2090600
      }
    },
    'k-beauty': {
      'code': 2100000
    }
  },
  'home-and-living': {
    'code': 3000000,
    'furniture': {
      'code': 3010000,
      'bedding-basics': {
        'code': 3010100
      },
      'bedding': {
        'code': 3010200
      },
      'kids-bedding': {
        'code': 3010300
      }
    },
    'bath': {
      'code': 3020000,
      'bath-towels': {
        'code': 3020100
      },
      'bath-rugs-and-mats': {
        'code': 3020200
      },
      'beach-towels': {
        'code': 3020300
      },
      'shower-curtains-and-liners': {
        'code': 3020400
      },
      'shower-curtain-rods-and-hardware': {
        'code': 3020500
      },
      'shower-and-bathtub-caddies': {
        'code': 3020600
      },
      'bath-accessories': {
        'code': 3020700
      },
      'bathroom-storage-and-organization': {
        'code': 3020800
      },
      'bathroom-racks-and-shelves': {
        'code': 3020900
      },
      'bathroom-cabinets': {
        'code': 3021000
      },
      'bathroom-waste-baskets': {
        'code': 3021100
      },
      'bathroom-mirrors': {
        'code': 3021200
      }
    },
    'kitchen': {
      'code': 3030000,
      'kitchen-appliances': {
        'code': 3030100,
        'coffee-makers': {
          'code': 3030101
        },
        'blenders': {
          'code': 3030102
        },
        'toaster-ovens': {
          'code': 3030103
        },
        'mixers': {
          'code': 3030104
        },
        'food-processors': {
          'code': 3030105
        },
        'slow-cookers': {
          'code': 3030106
        },
        'microwaves': {
          'code': 3030107
        }
      },
      'specialty-appliances': {
        'code': 3030200,
        'rice-cookers': {
          'code': 3030201
        },
        'juicers': {
          'code': 3030202
        },
        'bread-machines': {
          'code': 3030203
        },
        'waffle-irons': {
          'code': 3030204
        },
        'ice-cream-machines': {
          'code': 3030205
        }
      },
      'cookware': {
        'code': 3030300,
        'skillets-and-frying-pans': {
          'code': 3030301
        },
        'cookware-sets': {
          'code': 3030302
        },
        'dutch-ovens': {
          'code': 3030303
        },
        'pressure-cookers': {
          'code': 3030304
        },
        'specialty-cookware': {
          'code': 3030305
        },
        'grill-pans': {
          'code': 3030306
        },
        'roasting-pans': {
          'code': 3030307
        }
      },
      'bakeware': {
        'code': 3030400,
        'baking-sheets-and-mats': {
          'code': 3030401
        },
        'cupcake-and-muffin-pans': {
          'code': 3030402
        },
        'cake-pans': {
          'code': 3030403
        },
        'pie-dishes-and-tart-pans': {
          'code': 3030404
        },
        'loaf-and-bread-pans': {
          'code': 3030405
        }
      },
      'utensils-and-gadgets': {
        'code': 3030500,
        'utensils-tongs-and-whisks': {
          'code': 3030501
        },
        'choppers-graters-and-slicers': {
          'code': 3030502
        },
        'measurers-and-timing-tools': {
          'code': 3030503
        },
        'kitchen-knives': {
          'code': 3030504
        },
        'cutting-boards-and-chopping-blocks': {
          'code': 3030505
        },
        'strainers-and-colanders': {
          'code': 3030506
        },
        'ice-cube-trays-and-molds': {
          'code': 3030507
        },
        'can-openers': {
          'code': 3030508
        },
        'mixing-and-prep-bowls': {
          'code': 3030509
        }
      },
      'kitchen-storage': {
        'code': 3030600
      },
      'dish-towels-and-aprons': {
        'code': 3030700
      },
      'oven-mitts-and-pot-holders': {
        'code': 3030800,
        'dinnerware': {
          'code': 3030801
        },
        'flatware': {
          'code': 3030802
        },
        'glassware-and-drinkware': {
          'code': 3030803
        },
        'coffee-mugs-and-tea-cups': {
          'code': 3030804
        },
        'table-linens': {
          'code': 3030805
        },
        'steak-knives': {
          'code': 3030806
        },
        'home-bar-tools': {
          'code': 3030807
        },
        'cheese-boards-and-knives': {
          'code': 3030808
        },
        'salt-and-pepper-shakers': {
          'code': 3030809
        }
      }
    },
    'decor': {
      'code': 3040000,
      'home-accents': {
        'code': 3040100,
        'picture-frames': {
          'code': 3040101
        },
        'decorative-pillows': {
          'code': 3040102
        },
        'throw-blankets': {
          'code': 3040103
        },
        'vases': {
          'code': 3040104
        },
        'faux-flowers-and-plants': {
          'code': 3040105
        },
        'candles': {
          'code': 3040106
        },
        'candle-holders-and-lanterns': {
          'code': 3040107
        },
        'clocks': {
          'code': 3040108
        },
        'decorative-trays': {
          'code': 3040109
        }
      },
      'wall-decor': {
        'code': 3040200,
        'decorative-mirrors': {
          'code': 3040201
        },
        'canvas-art': {
          'code': 3040202
        },
        'wall-accents': {
          'code': 3040203
        },
        'framed-art': {
          'code': 3040204
        },
        'decorative-shelves': {
          'code': 3040205
        }
      },
      'rugs': {
        'code': 3040300
      },
      'window-treatments': {
        'code': 3040400
      },
      'lighting-and-ceiling-fans': {
        'code': 3040500,
        'floor-lamps': {
          'code': 3040501
        },
        'table-lamps': {
          'code': 3040502
        },
        'desk-lamps': {
          'code': 3040503
        },
        'chandeliers-and-pendants': {
          'code': 3040504
        },
        'flush-mount-lighting': {
          'code': 3040505
        },
        'sconces': {
          'code': 3040506
        },
        'swing-arm-lamps': {
          'code': 3040507
        },
        'ceiling-fans': {
          'code': 3040508
        }
      }
    },
    'outdoor': {
      'code': 3050000,
      'outdoor-furniture': {
        'code': 3050100,
        'bistro-sets': {
          'code': 3050101
        },
        'patio-lounge-seating': {
          'code': 3050102
        },
        'garden-stools': {
          'code': 3050103
        }
      },
      'outdoor-decor': {
        'code': 3050200,
        'string-lights': {
          'code': 3050201
        },
        'outdoor-cushions-and-pillows': {
          'code': 3050202
        }
      },
      'outdoor-appliances': {
        'code': 3050300,
        'grills': {
          'code': 3050301
        },
        'smokers': {
          'code': 3050302
        }
      },
      'planters': {
        'code': 3050400,
        'planter-pots': {
          'code': 3050401
        },
        'hanging-planters': {
          'code': 3050402
        },
        'rail-planters': {
          'code': 3050403
        },
        'window-boxes': {
          'code': 3050404
        }
      },
      'gardening': {
        'code': 3050500,
        'gardening-tools': {
          'code': 3050501
        },
        'house-plants': {
          'code': 3050502
        },
        'garden-flowers': {
          'code': 3050503
        },
        'grow-kits': {
          'code': 3050504
        },
        'seeds': {
          'code': 3050505
        }
      }
    },
    'storage-and-organization': {
      'code': 3060000,
      'closet-organization': {
        'code': 3060100,
        'hangers': {
          'code': 3060101
        },
        'shoe-racks-and-organizers': {
          'code': 3060102
        },
        'closet-systems': {
          'code': 3060103
        }
      },
      'laundry-essentials': {
        'code': 3060200,
        'garment-racks': {
          'code': 3060201
        },
        'drying-racks': {
          'code': 3060202
        },
        'laundry-baskets': {
          'code': 3060203
        },
        'hampers': {
          'code': 3060204
        }
      },
      'jewelry-organization': {
        'code': 3060300,
        'jewelry-armoires': {
          'code': 3060301
        },
        'jewelry-boxes-and-organizers': {
          'code': 3060302
        }
      },
      'racks-and-shelves': {
        'code': 3060400
      },
      'storage-containers-and-drawers': {
        'code': 3060500
      },
      'seasonal-storage': {
        'code': 3060600
      },
      'trash-cans-and-recycling-bins': {
        'code': 3060700
      }
    },
    'kids': {
      'code': 3070000,
      'beds': {
        'code': 3070100
      },
      'bunk-bed': {
        'code': 3070200
      },
      'mattresses-and-box-springs': {
        'code': 3070300
      },
      'nightstands': {
        'code': 3070400
      },
      'dressers-and-chests': {
        'code': 3070500
      },
      'seating': {
        'code': 3070600
      },
      'tables-and-desks': {
        'code': 3070700
      },
      'table-and-chair-sets': {
        'code': 3070800
      },
      'step-stools': {
        'code': 3070900
      },
      'toy-storage': {
        'code': 3071000
      },
      'room-decor': {
        'code': 3071100
      }
    },
    'appliiance': {
      'code': 3080000,
      'heating-and-cooling': {
        'code': 3080100,
        'air-conditioners': {
          'code': 3080101
        },
        'household-fans': {
          'code': 3080102
        },
        'ceiling-fans': {
          'code': 3080103
        },
        'air-purifiers': {
          'code': 3080104
        },
        'dehumidifiers': {
          'code': 3080105
        },
        'space-heaters': {
          'code': 3080106
        }
      },
      'household-appliances': {
        'code': 3080200,
        'refrigerators': {
          'code': 3080201
        },
        'mini-refrigerators': {
          'code': 3080202
        },
        'wine-refrigerators': {
          'code': 3080203
        },
        'washers-and-dryers': {
          'code': 3080204
        },
        'dishwashers': {
          'code': 3080205
        }
      },
      'kitchen-appliances': {
        'code': 3080300,
        'coffee-makers': {
          'code': 3080301
        },
        'blenders': {
          'code': 3080302
        },
        'toaster-ovens': {
          'code': 3080303
        },
        'mixers': {
          'code': 3080304
        },
        'food-processors': {
          'code': 3080305
        },
        'slow-cookers': {
          'code': 3080306
        },
        'microwaves': {
          'code': 3080307
        },
        'rice-cookers': {
          'code': 3080308
        },
        'juicers': {
          'code': 3080309
        },
        'bread-machines': {
          'code': 3080310
        },
        'waffle-irons': {
          'code': 3080311
        },
        'ice-cream-machines': {
          'code': 3080312
        },
        'specialty-appliances': {
          'code': 3080313
        }
      },
      'vacuums-and-floor-care': {
        'code': 3080400,
        'vacuums': {
          'code': 3080401
        },
        'carpet-cleaners': {
          'code': 3080402
        },
        'steam-cleaners': {
          'code': 3080403
        },
        'carpet-sweepers': {
          'code': 3080404
        }
      }
    }
  },
  'electronics': {
    'code': 4000000,
    'tv-and-home-theater': {
      'code': 4010000,
      'televisions': {
        'code': 4010100,
        '4k-tvs': {
          'code': 4010101
        },
        'smart-tvs': {
          'code': 4010102
        }
      },
      'media-streaming-devices': {
        'code': 4010200
      },
      'blu-ray-players': {
        'code': 4010300
      },
      'home-theater-systems': {
        'code': 4010400
      },
      'speakers': {
        'code': 4010500,
        'wireless-and-bluetooth-speakers': {
          'code': 4010501
        },
        'bookshelf-speakers': {
          'code': 4010502
        },
        'floor-speakers': {
          'code': 4010503
        },
        'in-wall-and-in-ceiling-speakers': {
          'code': 4010504
        },
        'center-channel-speakers': {
          'code': 4010505
        },
        'subwoofer': {
          'code': 4010506
        }
      },
      'sound-bars': {
        'code': 4010600,
        'smart-sound-bars': {
          'code': 4010601
        }
      },
      'receivers-and-amplifiers': {
        'code': 4010700
      },
      'accessories': {
        'code': 4010800,
        'cables': {
          'code': 4010801
        },
        'speaker-accessories': {
          'code': 4010802
        },
        'remote-controls': {
          'code': 4010803
        },
        'tv-mounts': {
          'code': 4010804
        },
        'hdtv-antennas': {
          'code': 4010805
        },
        'cleaning-accessories': {
          'code': 4010806
        }
      },
      'projectors-and-screens': {
        'code': 4010900
      }
    },
    'computers-and-tablets': {
      'code': 4020000,
      'laptops': {
        'code': 4020100,
        'apple-macbook': {
          'code': 4020101
        },
        'windows-laptops': {
          'code': 4020102
        },
        'chromebooks': {
          'code': 4020103
        },
        '2-in-1-laptops': {
          'code': 4020104
        }
      },
      'all-in-one-desktop-computers': {
        'code': 4020200,
        'apple-imac': {
          'code': 4020201
        },
        'windows-desktops': {
          'code': 4020202
        }
      },
      'computer-accessories': {
        'code': 4020300,
        'wireless-mice': {
          'code': 4020301
        },
        'wireless-keyboards': {
          'code': 4020302
        },
        'printers-and-ink': {
          'code': 4020303
        },
        'external-hard-drives': {
          'code': 4020304
        },
        'usb-flash-drives': {
          'code': 4020305
        },
        'laptop-bags-and-cases': {
          'code': 4020306
        }
      },
      'tablets': {
        'code': 4020400,
        'apple-ipad': {
          'code': 4020401
        },
        'samsung-galaxy-tablets': {
          'code': 4020402
        },
        'android-tablets': {
          'code': 4020403
        },
        '4g-lte-tablets': {
          'code': 4020404
        }
      },
      'tablet-accessories': {
        'code': 4020500,
        'cases-covers-and-keyboard-folios': {
          'code': 4020501
        },
        'stands-and-mounts': {
          'code': 4020502
        },
        'chargers-cables-and-adapters': {
          'code': 4020503
        },
        'tablet-stylus-pens': {
          'code': 4020504
        },
        'tablet-keyboards': {
          'code': 4020505
        },
        'tablet-docking-stations': {
          'code': 4020506
        },
        'tablet-screen-protectors': {
          'code': 4020507
        },
        'portable-chargers-and-power-packs': {
          'code': 4020508
        }
      }
    },
    'audio': {
      'code': 4030000,
      'headphones': {
        'code': 4030100,
        'noise-cancelling': {
          'code': 4030101
        },
        'true-wireless-earbuds': {
          'code': 4030102
        },
        'wireless-headphones': {
          'code': 4030103
        },
        'over-ear-headphones': {
          'code': 4030104
        },
        'in-ear-headphones': {
          'code': 4030105
        },
        'sports-headphones': {
          'code': 4030106
        }
      },
      'bluetooth-speakers': {
        'code': 4030200
      },
      'speakers': {
        'code': 4030300,
        'wireless-and-bluetooth-speakers': {
          'code': 4030301
        },
        'bookshelf-speakers': {
          'code': 4030302
        },
        'floor-speakers': {
          'code': 4030303
        },
        'subwoofer': {
          'code': 4030304
        }
      },
      'sound-bars': {
        'code': 4030400
      },
      'home-theater-systems': {
        'code': 4030500
      },
      'receivers-and-amplifiers': {
        'code': 4030600
      },
      'dolby-atmos-sound': {
        'code': 4030700
      }
    },
    'smart-home': {
      'code': 4040000,
      'voice-assistants': {
        'code': 4040100,
        'google-home': {
          'code': 4040101
        },
        'apple-homepod': {
          'code': 4040102
        }
      },
      'smart-accessories': {
        'code': 4040200,
        'dimmers-and-switches': {
          'code': 4040201
        },
        'sensors-and-motion-detectors': {
          'code': 4040202
        },
        'security-cameras': {
          'code': 4040203
        },
        'smart-lighting': {
          'code': 4040204
        },
        'smart-plugs': {
          'code': 4040205
        }
      },
      'wi-fi-and-networking': {
        'code': 4040300,
        'wireless-routers': {
          'code': 4040301
        },
        'modems': {
          'code': 4040302
        },
        'mesh-wi-fi-systems': {
          'code': 4040303
        },
        'wi-fi-range-extenders': {
          'code': 4040304
        },
        'networking-cables': {
          'code': 4040305
        }
      }
    },
    'wearable-tech': {
      'code': 4050000,
      'activity-trackers': {
        'code': 4050100
      },
      'smart-watches': {
        'code': 4050200
      },
      'wearable-cameras': {
        'code': 4050300
      },
      'wearable-tech-accessories': {
        'code': 4050400
      },
      'featured-brands': {
        'code': 4050500
      }
    },
    'cameras': {
      'code': 4060000,
      'cameras-and-lenses': {
        'code': 4060100,
        'dslr-cameras': {
          'code': 4060101
        },
        'mirrorless-cameras': {
          'code': 4060102
        },
        'instant-print-cameras': {
          'code': 4060103
        },
        'camera-lenses': {
          'code': 4060104
        }
      },
      'camera-accessories': {
        'code': 4060200,
        'memory-cards': {
          'code': 4060201
        },
        'camera-bags-cases-and-straps': {
          'code': 4060202
        },
        'camera-batteries-and-power': {
          'code': 4060203
        },
        'flashes-and-lighting': {
          'code': 4060204
        },
        'lens-filters': {
          'code': 4060205
        },
        'camera-cleaning-equipment': {
          'code': 4060206
        },
        'film': {
          'code': 4060207
        },
        'tripods-and-monopods': {
          'code': 4060208
        }
      },
      'featured-brands': {
        'code': 4060300
      }
    },
    'toys-and-games': {
      'code': 4070000,
      'consoles-and-accessories': {
        'code': 4070100,
        'nintendo': {
          'code': 4070101
        },
        'playstation': {
          'code': 4070102
        },
        'xbox': {
          'code': 4070103
        }
      },
      'pc-gaming': {
        'code': 4070200,
        'laptops': {
          'code': 4070201
        },
        'desktops': {
          'code': 4070202
        },
        'gaming-keyboards': {
          'code': 4070203
        },
        'gaming-mice': {
          'code': 4070204
        }
      },
      'arvr': {
        'code': 4070300
      },
      'smart-toys': {
        'code': 4070400
      },
      'drones': {
        'code': 4070500
      }
    },
    'cellphone': {
      'code': 4080000,
      'cases-and-covers': {
        'code': 4080100
      },
      'cables': {
        'code': 4080200
      },
      'portable-chargers-and-power-packs': {
        'code': 4080300
      }
    }
  },
  'sports-fitness-outdoor': {
    'code': 5000000,
    'exercise-and-fitness': {
      'code': 5010000,
      'cardio-equipment': {
        'code': 5010100
      },
      'strength-training-equipment': {
        'code': 5010200
      },
      'training-apparel': {
        'code': 5010300,
        'towels': {
          'code': 5010301
        },
        'cross-training-shoes': {
          'code': 5010302
        },
        'compression-shorts': {
          'code': 5010303
        },
        'compression-tops': {
          'code': 5010304
        },
        'socks': {
          'code': 5010305
        },
        'sports-bras': {
          'code': 5010306
        },
        'wristbands-and-sweatbands': {
          'code': 5010307
        }
      },
      'training-and-recovery': {
        'code': 5010400
      },
      'yoga-and-studio': {
        'code': 5010500,
        'yoga-and-studio-accessories': {
          'code': 5010501
        },
        'foam-blocks': {
          'code': 5010502
        },
        'mat-bags': {
          'code': 5010503
        },
        'pilates-reformers': {
          'code': 5010504
        },
        'resistance-bands': {
          'code': 5010505
        },
        'yoga-blankets-and-cushions': {
          'code': 5010506
        },
        'yoga-mats': {
          'code': 5010507
        },
        'yoga-straps': {
          'code': 5010508
        },
        'yoga-towels': {
          'code': 5010509
        }
      },
      'sporting-good-accessories': {
        'code': 5010600,
        'water-bottles': {
          'code': 5010601
        },
        'sports-sunglasses': {
          'code': 5010602
        },
        'trophies-medals-and-awards': {
          'code': 5010603
        },
        'wristbands-and-sweatbands': {
          'code': 5010604
        },
        'air-pumps': {
          'code': 5010605
        },
        'ball-carts-and-racks': {
          'code': 5010606
        },
        'flashlights-and-headlamps': {
          'code': 5010607
        },
        'hand-and-foot-warmers': {
          'code': 5010608
        },
        'hydration': {
          'code': 5010609
        },
        'mouthguards': {
          'code': 5010610
        },
        'pads-guards-and-protective-gear': {
          'code': 5010611
        },
        'whristle-and-megaphones': {
          'code': 5010612
        },
        'inflation-devices-and-accessories': {
          'code': 5010613
        },
        'car-sports-racks': {
          'code': 5010614
        },
        'coach-and-referee-gear': {
          'code': 5010615
        },
        'reflective-gear': {
          'code': 5010616
        }
      }
    },
    'adventure-and-outdoor-fun': {
      'code': 5020000,
      'bikes': {
        'code': 5020100,
        'bike-racks-and-bags': {
          'code': 5020101
        },
        'bike-tools-and-maintenance': {
          'code': 5020102
        },
        'bike-trainers-and-accessories': {
          'code': 5020103
        },
        'complete-bikes': {
          'code': 5020104
        },
        'child-seats-and-cargo-trailers': {
          'code': 5020105
        },
        'helmets': {
          'code': 5020106
        },
        'bike-hydration': {
          'code': 5020107
        },
        'kids-bikes-and-accessories': {
          'code': 5020108
        },
        'kids-helmets': {
          'code': 5020109
        },
        'kids-tricycles': {
          'code': 5020110
        },
        'bike-lights-and-reflectors': {
          'code': 5020111
        },
        'bike-parts-and-components': {
          'code': 5020112
        },
        'bike-pedals-and-cleats': {
          'code': 5020113
        },
        'bicycle-tires-and-tubes': {
          'code': 5020114
        },
        'bike-transportation-and-storage': {
          'code': 5020115
        },
        'unicycles': {
          'code': 5020116
        },
        'triathlon-gear': {
          'code': 5020117
        },
        'bike-brakes': {
          'code': 5020118
        },
        'bike-chains-and-cassettes': {
          'code': 5020119
        },
        'bike-cranksets-chainrings-and-bottom-brackets': {
          'code': 5020120
        },
        'bike-derailleurs-and-shifters': {
          'code': 5020121
        },
        'bike-forks-headsets-and-stems': {
          'code': 5020122
        },
        'bike-handlebars-wraps-and-grips': {
          'code': 5020123
        },
        'bike-saddles-seats-and-seat-posts': {
          'code': 5020124
        },
        'bike-wheels': {
          'code': 5020125
        },
        'cycling-shorts-jerseys-and-accessories': {
          'code': 5020126
        },
        'car-bike-racks': {
          'code': 5020127
        },
        'pads-guards-and-protective-gear': {
          'code': 5020128
        }
      },
      'snowboard-shop': {
        'code': 5020200
      },
      'skateboards-skates-and-scooters': {
        'code': 5020300
      },
      'ski-shop': {
        'code': 5020400
      },
      'boating': {
        'code': 5020500
      },
      'camping-and-hiking': {
        'code': 5020600
      },
      'water-sports': {
        'code': 5020700
      }
    },
    'hunting-fishing-and-tactical': {
      'code': 5030000,
      'fishing': {
        'code': 5030100
      },
      'binoculars-and-scopes': {
        'code': 5030200
      }
    },
    'team-sports': {
      'code': 5040000,
      'baseball': {
        'code': 5040100
      },
      'basketball': {
        'code': 5040200
      },
      'field-hockey': {
        'code': 5040300
      },
      'football': {
        'code': 5040400
      },
      'lacrosse': {
        'code': 5040500
      },
      'soccer': {
        'code': 5040600
      },
      'softball': {
        'code': 5040700
      },
      'hockey-and-ice-skating': {
        'code': 5040800
      },
      'gymnastics-and-dance': {
        'code': 5040900
      }
    },
    'individual-sports': {
      'code': 5050000,
      'golf': {
        'code': 5050100,
        'golf-club-sets': {
          'code': 5050101
        },
        'drivers': {
          'code': 5050102
        },
        'woods': {
          'code': 5050103
        },
        'hybrids': {
          'code': 5050104
        },
        'irons': {
          'code': 5050105
        },
        'wedges': {
          'code': 5050106
        },
        'putters': {
          'code': 5050107
        },
        'golf-apparel': {
          'code': 5050108
        },
        'golf-shoes': {
          'code': 5050109
        },
        'golf-balls': {
          'code': 5050110
        },
        'golf-club-bags': {
          'code': 5050111
        },
        'golf-rangefinders-and-shot-trackers': {
          'code': 5050112
        },
        'golf-training-equipment': {
          'code': 5050113
        },
        'head-covers': {
          'code': 5050114
        },
        'golf-tees': {
          'code': 5050115
        },
        'golf-club-parts': {
          'code': 5050116
        },
        'golf-gloves': {
          'code': 5050117
        },
        'golf-club-cleaning-brush': {
          'code': 5050118
        },
        'golf-towels': {
          'code': 5050119
        },
        'golf-umbrella': {
          'code': 5050120
        },
        'golf-markers-and-divot-repair-tools': {
          'code': 5050121
        },
        'golf-cart-accessories': {
          'code': 5050122
        },
        'golf-accessories': {
          'code': 5050123
        }
      },
      'tennis': {
        'code': 5050200
      },
      'boxing': {
        'code': 5050300
      },
      'martial-arts': {
        'code': 5050400
      },
      'track-and-field': {
        'code': 5050500
      },
      'racquetball': {
        'code': 5050600
      },
      'equestrian-sports': {
        'code': 5050700
      }
    }
  },
  'fashion': {
    'code': 6000000,
    'women': {
      'code': 6010000,
      'featured-shops': {
        'code': 6010100
      },
      'clothing': {
        'code': 6010200,
        'activewear': {
          'code': 6010201
        },
        'coats-and-jackets': {
          'code': 6010202
        },
        'dresses': {
          'code': 6010203
        },
        'jeans': {
          'code': 6010204
        },
        'jumpsuits-and-rompers': {
          'code': 6010205
        },
        'lingerie-and-shapewear': {
          'code': 6010206
        },
        'pants-and-leggings': {
          'code': 6010207
        },
        'shorts': {
          'code': 6010208
        },
        'skirts': {
          'code': 6010209
        },
        'sleepwear-and-loungewear': {
          'code': 6010210
        },
        'sweaters': {
          'code': 6010211
        },
        'sweatshirts-and-hoodies': {
          'code': 6010212
        },
        'swimwear': {
          'code': 6010213
        },
        'tops-and-t-shirts': {
          'code': 6010214
        }
      },
      'shoes': {
        'code': 6010300,
        'booties': {
          'code': 6010301
        },
        'boots': {
          'code': 6010302
        },
        'espadrilles': {
          'code': 6010303
        },
        'flats': {
          'code': 6010304
        },
        'heels-and-pumps': {
          'code': 6010305
        },
        'mules-and-slides': {
          'code': 6010306
        },
        'loafers-and-slip-ons': {
          'code': 6010307
        },
        'sandals-and-flip-flops': {
          'code': 6010308
        },
        'slippers': {
          'code': 6010309
        },
        'sneakers-and-athletic': {
          'code': 6010310
        },
        'wedges': {
          'code': 6010311
        }
      },
      'handbags': {
        'code': 6010400,
        'backpacks': {
          'code': 6010401
        },
        'belt-bags': {
          'code': 6010402
        },
        'cosmetic-bags': {
          'code': 6010403
        },
        'clutches-and-pouches': {
          'code': 6010404
        },
        'crossbody-bags': {
          'code': 6010405
        },
        'hobo-bags': {
          'code': 6010406
        },
        'laptops-bags-and-briefcases': {
          'code': 6010407
        },
        'satchels': {
          'code': 6010408
        },
        'shoulder-bags': {
          'code': 6010409
        },
        'tote-bags': {
          'code': 6010410
        },
        'weekenders-and-duffels': {
          'code': 6010411
        }
      },
      'accessories': {
        'code': 6010500,
        'belts': {
          'code': 6010501
        },
        'gloves': {
          'code': 6010502
        },
        'hats': {
          'code': 6010503
        },
        'scarves-and-wraps': {
          'code': 6010504
        },
        'sunglasses-and-eyewear': {
          'code': 6010505
        },
        'tech-accessories-and-cases': {
          'code': 6010506
        },
        'umbrellas': {
          'code': 6010507
        },
        'wallet-and-card-cases': {
          'code': 6010508
        }
      },
      'jewelry-and-watches': {
        'code': 6010600,
        'anklets': {
          'code': 6010601
        },
        'bracelets-and-charms': {
          'code': 6010602
        },
        'earrings': {
          'code': 6010603
        },
        'necklaces': {
          'code': 6010604
        },
        'rings': {
          'code': 6010605
        },
        'watches': {
          'code': 6010606
        }
      }
    },
    'men': {
      'code': 6020000,
      'active-and-workout': {
        'code': 6020100
      },
      'coats-and-jackets': {
        'code': 6020200
      },
      'shirts': {
        'code': 6020300
      },
      'jeans': {
        'code': 6020400
      },
      'pajamas-and-robes': {
        'code': 6020500
      },
      'pants': {
        'code': 6020600
      },
      'shorts': {
        'code': 6020700
      },
      'suits-and-suit-separates': {
        'code': 6020800
      },
      'sweaters': {
        'code': 6020900
      },
      'sweatshirts-and-hoodies': {
        'code': 6021000
      },
      'swimwear-and-boardshorts': {
        'code': 6021100
      },
      't-shirts-and-tank-tops': {
        'code': 6021200
      },
      'underwear-and-socks': {
        'code': 6021300
      }
    },
    'kids-and-baby': {
      'code': 6030000,
      'baby': {
        'code': 6030100,
        'girls-clothing': {
          'code': 6030101
        },
        'boys-clothing': {
          'code': 6030102
        },
        'girls-shoes': {
          'code': 6030103
        },
        'boys-shoes': {
          'code': 6030104
        },
        'girls-accessories': {
          'code': 6030105
        },
        'boys-accessories': {
          'code': 6030106
        }
      },
      'toddler': {
        'code': 6030200,
        'girls-clothing': {
          'code': 6030201
        },
        'boys-clothing': {
          'code': 6030202
        },
        'girls-shoes': {
          'code': 6030203
        },
        'boys-shoes': {
          'code': 6030204
        },
        'girls-accessories': {
          'code': 6030205
        },
        'boys-accessories': {
          'code': 6030206
        }
      },
      'little-kid': {
        'code': 6030300,
        'girls-clothing': {
          'code': 6030301
        },
        'boys-clothing': {
          'code': 6030302
        },
        'girls-shoes': {
          'code': 6030303
        },
        'boys-shoes': {
          'code': 6030304
        },
        'girls-accessories': {
          'code': 6030305
        },
        'boys-accessories': {
          'code': 6030306
        }
      },
      'big-kid': {
        'code': 6030400,
        'girls-clothing': {
          'code': 6030401
        },
        'boys-clothing': {
          'code': 6030402
        },
        'girls-shoes': {
          'code': 6030403
        },
        'boys-shoes': {
          'code': 6030404
        },
        'girls-accessories': {
          'code': 6030405
        },
        'boys-accessories': {
          'code': 6030406
        }
      }
    },
    'travel': {
      'code': 6040000,
      'luggage': {
        'code': 6040100,
        'carry-on': {
          'code': 6040101
        },
        'check-in': {
          'code': 6040102
        },
        'fashion': {
          'code': 6040103
        },
        'hardside': {
          'code': 6040104
        },
        'kids': {
          'code': 6040105
        },
        'luggage-sets': {
          'code': 6040106
        },
        'underseat-luggage': {
          'code': 6040107
        }
      },
      'bags': {
        'code': 6040200,
        'backpacks': {
          'code': 6040201
        },
        'belt-bags': {
          'code': 6040202
        },
        'garment-bags': {
          'code': 6040203
        },
        'laptop-bags-and-briefcases': {
          'code': 6040204
        },
        'weekenders-and-duffels': {
          'code': 6040205
        }
      },
      'travel-accessories': {
        'code': 6040300,
        'eyemasks-pillows-and-blankets': {
          'code': 6040301
        },
        'packing-cubes-and-organization': {
          'code': 6040302
        },
        'passport-cases-and-travel-wallets': {
          'code': 6040303
        },
        'kits-and-cases': {
          'code': 6040304
        }
      }
    }
  }
}
