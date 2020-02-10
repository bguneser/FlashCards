  
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import TouchButton from './TouchButton';
import { resetDecks } from '../utils/api.js';
import { resetStore } from '../actions/index';
import { connect } from 'react-redux';
import { gray, white, red, textGray, green } from '../utils/colors';

export class FlashCardSettings extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    resetStore: PropTypes.func.isRequired
  };
  manageResetDecks = () => {
    const { resetStore, navigation } = this.props;
    resetStore();
    resetDecks();
    navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Settings </Text>
        <View style={styles.block}>
          <View style={styles.blockContainer}>
            <Text style={styles.blockText}>
              This will reset the data back to the original data set.
            </Text>
            <View style={{ height: 18 }} />
            <TouchButton
              btnStyle={{ backgroundColor: red, borderColor: white }}
              onPress={this.manageResetDecks}
            >
              Reset Data
            </TouchButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    color: green
  },
  block: {
    marginBottom: 20
  },
  blockContainer: {
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: white,
    borderRadius: 5,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  blockText: {
    fontSize: 18,
    color: textGray
  }
});

export default connect(
  null,
  { resetStore }
)(FlashCardSettings)