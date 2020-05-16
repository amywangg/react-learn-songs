// Action Creator
export const selectSong = (song)=>{ // named export
    // Return an action
    return{
        type: 'SONG_SELECTED',
        payload: song
    };
};