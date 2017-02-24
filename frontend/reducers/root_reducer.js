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
  session: SessionReducer,
  errors: ErrorReducer,
  tracks: TracksReducer,
  track: TrackReducer,
  user: UserReducer,
  currentTrack: CurrentTrackReducer,
  comments: CommentReducer,
  playlist: PlaylistReducer,
  searchResults: SearchReducer,
  loading: LoadingReducer
});

export default RootReducer;
