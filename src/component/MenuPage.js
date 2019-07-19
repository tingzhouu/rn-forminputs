import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import { addShow, getForm } from '../redux/actions';

class MenuPage extends Component {
  onPressAddShow = () => {
    const { doAddShow } = this.props;
    doAddShow('This is a show!');
  }

  componentDidMount() {
    const { doGetForm } = this.props;
    doGetForm();
  }

  render() {
    const { shows, isGettingForm } = this.props;
    return (
      <View style={styles.container}>
        {isGettingForm && (
          <View style={{ height: 200, width: 200, backgroundColor: 'red'}} />
        )}
        <Text style={styles.menuTitle}>MenuPage</Text>
        <Text style={styles.showCount}>{`Number of Shows: ${shows.length}`}</Text>
        <Button
          onPress={this.onPressAddShow}
          title="Add Count"
          color="orange"
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 20,
  },
  showCount: {
    fontSize: 20,
    fontWeight: '800',
  },
  button: {
    borderColor: 'red', borderWidth: 2,
  }
});

const mapStateToProps = state => {
  return {
    shows: state.showList.shows,
    form: state.form.form,
    isGettingForm: state.form.isGettingForm,
    getFormError: state.form.getFormError,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    doAddShow: (showName) => dispatch(addShow(showName)),
    doGetForm: () => dispatch(getForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);
