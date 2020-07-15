import {ActionTypes as Types} from '../actions';

export const additionalPriceReducer = (state=0, action) => {
  switch(action.type) {
    case Types.ADD_FEATURE: {
      return state + action.payload.price;
    }
    case Types.REMOVE_FEATURE: {
      return state - action.payload.price;
    }
    default: {
      return state;
    }
  }
};

const initialCar = {
  price: 26395,
  name: '2019 Ford Mustang',
  image:
    'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  features: []
};

export const carReducer = (state = initialCar, action) => {
  switch(action.type) {
    case Types.ADD_FEATURE: {
      return {
        ...state,
        features: [...state.features, action.payload]
      }
    }
    case Types.REMOVE_FEATURE: {
      return {
        ...state,
        features: state.features.filter(feature => feature.id !== action.payload.id)
      }
    }
    default: {
      return state;
    }
  }
};

const initialAdditionalFeatures = [
  { id: 1, name: 'V-6 engine', price: 1500 },
  { id: 2, name: 'Racing detail package', price: 1500 },
  { id: 3, name: 'Premium sound system', price: 500 },
  { id: 4, name: 'Rear spoiler', price: 250 }
];

export const additionalFeaturesReducer = (state = initialAdditionalFeatures, action) => {
  switch(action.type){
    case Types.ADD_FEATURE: {
      return state.filter(feature => feature.id !== action.payload.id);
    }
    case Types.REMOVE_FEATURE: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};