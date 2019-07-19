import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

if (__DEV__) {
  // import('./reactotronconfig').then(() => console.log('Reactotron Configured'))
  import('./reactotronconfig')
}

import store from './src/redux/store';
import MenuPage from "./src/component/MenuPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MenuPage />
      </Provider>
    );
  }
}

export default App;
