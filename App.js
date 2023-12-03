import React from "react";
import ReactDOM from "react-dom/client";

// first component Header -logo ,nav items (home,about,contact,cart)

const Header=()=>{
    return(
<div className="header">
    <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
    </div>

    <div className="nav-items">
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>CART</li>
        </ul>
    </div>
</div>
    );
};

//body component Body 
//  - search 
//  - RestarantContainer
//     -RestarantCard(img,name,rating,time_of_delivery)  -> we are creating RestarantCard component for reusable(for all cards)


const RestarantCard=(Props)=>{
    const {Rest_data}=Props;
    const {cloudinaryImageId,name,avgRating :rating,sla,cuisines}=Rest_data?.info;
    return (
        <div className="card">
            <img className="image" alt="image loading" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
            +cloudinaryImageId
    }/>
          <div className="content"> 
           <h3 id='rname'>{name}</h3>
             <h4 id='rating'>☆ {rating}</h4>
            <h4 id='time'>. {sla.deliveryTime} Min's</h4>
            <p id='food'>{cuisines.join(", ")}</p>

            </div>
            </div>
    )
}
//restarant object have all cards json data 

const resobj=
    [
        {
          "info": {
            "id": "157695",
            "name": "Varalakshmi Tiffins",
            "cloudinaryImageId": "8523266de1213e8ea57e5df4eedf747e",
            "locality": "Kothapet & Dilsukhnagar",
            "areaName": "Dilsukhnagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "South Indian"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
              "restaurantId": "157695",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4500
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4500
            },
            "parentId": "6482",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "31 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-03 11:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-f3b0c87b-9c38-4611-9943-843f851f0426"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/varalakshmi-tiffins-kothapet-and-dilsukhnagar-hyderabad-157695",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "662646",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "0c958153eeb436db6d515ca36e47e8a4",
            "locality": "Bhola Nagar",
            "areaName": "Banjara Green Colony",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Bakery",
              "Ice Cream"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "662646",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 5600
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 5600
            },
            "parentId": "195515",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 6.8,
              "serviceability": "SERVICEABLE",
              "slaString": "27 mins",
              "lastMileTravelString": "6.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-03 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-f3b0c87b-9c38-4611-9943-843f851f0426"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-bhola-nagar-banjara-green-colony-hyderabad-662646",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "61315",
            "name": "Chai Point",
            "cloudinaryImageId": "roxr7wsrrrwy80binchi",
            "locality": "GVK Mall",
            "areaName": "Banjara Hills",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Bakery",
              "Beverages",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "South Indian",
              "Punjabi",
              "Chaat",
              "Indian",
              "American",
              "North Indian",
              "Fast Food",
              "Desserts",
              "Cafe",
              "Healthy Food",
              "Home Food"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "61315",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 5700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 5700
            },
            "parentId": "1607",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 7.2,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "7.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-03 22:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-f3b0c87b-9c38-4611-9943-843f851f0426"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/chai-point-gvk-mall-banjara-hills-hyderabad-61315",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "11547",
            "name": "Rambharose - Bhattad Ki Idli",
            "cloudinaryImageId": "epmpoc9ubtfuk4zwcwgi",
            "locality": "Kutbi Guda",
            "areaName": "Kachiguda",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "South Indian"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
              "restaurantId": "11547",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2700
            },
            "parentId": "166509",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "slaString": "17 mins",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-03 15:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-f3b0c87b-9c38-4611-9943-843f851f0426"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/rambharose-bhattad-ki-idli-kutbi-guda-kachiguda-hyderabad-11547",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "7203",
            "name": "Taj Mahal-Abids",
            "cloudinaryImageId": "xtxi8kws7lmnwfardw0b",
            "locality": "Abids Road",
            "areaName": "Koti",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "Chinese",
              "South Indian"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
              "restaurantId": "7203",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2700
            },
            "parentId": "924",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-03 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-f3b0c87b-9c38-4611-9943-843f851f0426"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/taj-mahal-abids-abids-road-koti-hyderabad-7203",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "495772",
            "name": "Cafe Niloufer",
            "cloudinaryImageId": "e0c63e989612732c70da6d1bb6984850",
            "locality": "Old Mla Quarters Road",
            "areaName": "Himayath Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Bakery",
              "Beverages",
              "Snacks",
              "Desserts"
            ],
            "avgRating": 4.6,
            "feeDetails": {
              "restaurantId": "495772",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3200
            },
            "parentId": "9152",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-04 00:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-f3b0c87b-9c38-4611-9943-843f851f0426"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/cafe-niloufer-old-mla-quarters-road-himayath-nagar-hyderabad-495772",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "329070",
            "name": "Kamath Hotel",
            "cloudinaryImageId": "wx5qrfddnvfastifgmjy",
            "locality": "Abids & Koti",
            "areaName": "Abids",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "South Indian"
            ],
            "avgRating": 4.3,
            "veg": true,
            "feeDetails": {
              "restaurantId": "329070",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2700
            },
            "parentId": "19012",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-03 21:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-f3b0c87b-9c38-4611-9943-843f851f0426"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kamath-hotel-and-koti-abids-hyderabad-329070",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "8663",
            "name": "Nrs Nandini Sudha",
            "cloudinaryImageId": "v69nznqnbvert2bysocm",
            "locality": "Chikkadpally road",
            "areaName": "Himayatnagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "South Indian",
              "North Indian",
              "Chinese",
              "Juices",
              "Beverages"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
              "restaurantId": "8663",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2700
            },
            "parentId": "19252",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "16 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-03 21:50:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-f3b0c87b-9c38-4611-9943-843f851f0426"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/nrs-nandini-sudha-chikkadpally-road-himayatnagar-hyderabad-8663",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "547809",
            "name": "Theobroma",
            "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
            "locality": "Himayath Nagar",
            "areaName": "Himayath Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Desserts"
            ],
            "avgRating": 4.4,
            "feeDetails": {
              "restaurantId": "547809",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4000
            },
            "parentId": "1040",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "17 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-03 22:45:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-f3b0c87b-9c38-4611-9943-843f851f0426"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/theobroma-himayath-nagar-hyderabad-547809",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
    ];

const Body=()=>{
    return (
        <div className="body">
     <div className="search">Search</div>
     <div className="restrant_container">
        {/* the below given values are Props (properties -name,food)
                        <RestarantCard name='shah gouse' food='biryani />

         <RestarantCard resData={resobj[0]}/> 
         js code we can write inside JSX with use of curley braces { }
         
         below map function getting all data fron resobj(config/json file) for all cards 

         we are passing below Rest_data to RestarantCards functional component(Rest_data name must & shold common for
             RestarantCards
            destructuring also)
         */}
        {
            //when ever we are doing loop/map ,we have always to give key
            resobj.map((v)=>(
                <RestarantCard key={v.info.id} Rest_data={v} />
            ))
        }

     </div>

     </div>
    ) 
}

//APP Layout 

const AppLayout=()=>{
return (
    <div className="applayout">
    <Header />
    <Body />
    </div>

);
};

    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(<AppLayout/>);