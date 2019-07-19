import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

if (__DEV__) {
  import('./reactotronconfig').then(() => console.log('Reactotron Configured'))
}

import store from './src/redux/store';
import { addShow } from './src/redux/actions';
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



// export default connect(mapStateToProps)(App);
export default App;
