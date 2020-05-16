import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// CONNECT => communicates with provider via context system
// passes prop (list of songs) and action creator to SongList
// tells provider about changes made to list of songs
class SongList extends Component {
    // helper method
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        // changes state
                        onClick={()=> this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }
    render() {
    return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs }; //shows up as props
}
// connect component passes in params as props
export default connect(mapStateToProps, {selectSong})(SongList);