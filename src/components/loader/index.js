import React from 'react';
import {ActivityIndicator, Modal, Platform, StyleSheet, View} from 'react-native';
import {colors} from "../../utils/colors";

const Loader = props => {
  const {
    loading,
    ...attributes
  } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          {

              <ActivityIndicator
                size={35}
                color={colors.primary}
                animating={loading} />

          }

        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;
