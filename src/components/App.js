import React from 'react';

import SongList from './SongList';
import SongDetail from './SongDetail';

// Redux store houses the reducers which communicates with the provider
// Provider communicates with App.js providing Store data
// PROVIDER - created by react-redux
const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;