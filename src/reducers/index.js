import {combineReducers} from 'redux';
import {carReducer, additionalPriceReducer, additionalFeaturesReducer} from './reducers';

const rootReducer = combineReducers({
  car: carReducer,
  additionalFeatures: additionalFeaturesReducer,
  additionalPrice: additionalPriceReducer
});

export default rootReducer;