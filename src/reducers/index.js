import { combineReducers } from 'redux';
// REDUCERS

// song list reducer
const songsReducer = () => {
    return [
        { title: 'Smells Like Teen Spirit', duration: '4:05' },
        { title: 'You Belong With Me', duration: '3:55' },
        { title: 'All Star', duration: '3:30' },
        { title: 'I Want it That Way', duration: '2:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})