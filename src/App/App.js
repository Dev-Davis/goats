import React from 'react';

import myGoats from './goats';
import GoatCorral from '../components/GoatCorral/GoatCorral';

import './App.scss';

// similar to the words new promise
// basic structure for component
class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({ goats: myGoats });
  }

  render() {
    const { goats } = this.state;
    return (
      <div className="App">
        <div>Goat Yoga</div>
        <GoatCorral goats={goats}/>

      </div>
    );
  }
}

export default App;
