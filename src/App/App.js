import React from 'react';

import goats from './goats';

import './App.scss';

// similar to the words new promise
// basic structure for component
class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({goats});
  }

  render() {
    return (
      <div className="App">
        <div>Goat Yoga</div>
        {/* <GoatCorral goats={goats}/> */}

      </div>
    );
  }
}

export default App;
