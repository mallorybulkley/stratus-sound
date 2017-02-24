import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import TracksReducer from './tracks_reducer';
import TrackReducer from './track_reducer';
import UserReducer from './user_reducer';
import CurrentTrackReducer from './current_track_reducer';
import CommentReducer from './comment_reducer';
import PlaylistReducer from './playlist_reducer';
import SearchReducer from './search_reducer';
import LoadingReducer from './loading_reducer';

const RootReducer = combineReducers({
  comments: CommentReducer,
  currentTrack: CurrentTrackReducer,
  errors: ErrorReducer,
  loading: LoadingReducer,
  playlist: PlaylistReducer,
  searchResults: SearchReducer,
  session: SessionReducer,
  track: TrackReducer,
  tracks: TracksReducer,
  user: UserReducer
});

export default RootReducer;
