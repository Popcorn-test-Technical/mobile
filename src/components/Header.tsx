import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
  onPress(): void;
};

const Header: FC<HeaderProps> = ({ onPress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={[styles.buttonBackIconContainer, { borderColor: 'black' }]}
        onPress={onPress}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 16,
    color: 'black',
  },
  buttonBackIconContainer: {
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 50,
  },
  addTripButtonIcon: { width: 12, height: 13 },
});
