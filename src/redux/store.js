import { configureStore } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'

import {authReducer} from './reducers/auth.reducer'
import {homeVideosReducer} from './reducers/videos.reducer'
import {selectedVideoReducer} from './reducers/videos.reducer'
import {relatedVideoReducer} from './reducers/videos.reducer'
import {searchedVideosReducer} from './reducers/videos.reducer'
import {subscriptionsChannelReducer} from './reducers/videos.reducer'
import {channelVideosReducer} from './reducers/videos.reducer'
import {channelDetailsReducer} from './reducers/channel.reducer'
import {commentListReducer} from './reducers/comments.reducer'

const store = configureStore({
   reducer: {
      auth: authReducer,
      homeVideos: homeVideosReducer,
      selectedVideo: selectedVideoReducer,
      relatedVideos: relatedVideoReducer,
      searchedVideos: searchedVideosReducer,
      subscriptionsChannel: subscriptionsChannelReducer,
      channelVideos: channelVideosReducer,
      channelDetails: channelDetailsReducer,
      commentList: commentListReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk),
   devTools: process.env.NODE_ENV !== 'production',
})

export default store
