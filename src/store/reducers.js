import { combineReducers } from 'redux'
import locationReducer from './location'
import currentUserReducer from '../authentication/reducer'
import adminReducer from '../routes/Admin/Admin/modules/reducer'
import postReducer from '../routes/Admin/Post/modules/reducer'
import homeReducer from '../routes/WebApp/Home/modules/reducer'
import newsReducer from '../routes/WebApp/News/modules/reducer'
import newsDetailReducer from '../routes/WebApp/NewsDetail/modules/reducer'
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    currentUser: currentUserReducer,
    post: postReducer,
    admin: adminReducer,
    home: homeReducer,
    news: newsReducer,
    newsDetail: newsDetailReducer,
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
