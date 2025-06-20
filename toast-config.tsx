// toastConfig.tsx
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { FONTS } from './src/constant';

const baseStyle = {
  padding: 14,
  paddingVertical: 20,
  borderRadius: 12,
  marginTop: 10,
  marginHorizontal: 12,
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 4 },
  flex: 1,
  width: '80%',
  borderWidth: 2,
};

export const toastConfig = {
  success: ({ text1 }: any) => {
    return (
      <View style={[styles.container]}>
        <View style={[styles.row]}>
          <FontAwesomeIcon icon={faCircleCheck} size={20} color="green" />
          <Text style={[styles.text]}>{text1}</Text>
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    paddingVertical: 20,
    borderRadius: 12,
    marginTop: 10,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    flex: 1,
    width: '90%',
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8, width: '100%' },
  text: {
    fontSize: 15,
    fontFamily: FONTS.ClashDisplay.Medium,
    flexWrap: 'wrap',
  },
  subText: { fontSize: 13, marginTop: 4 },
  actionText: { marginLeft: 10 },

  light: { backgroundColor: '#fff' },
  dark: { backgroundColor: '#1f2937' },

  lightText: { color: '#111827' },
  darkText: { color: '#f9fafb' },

  lightSubText: { color: '#6b7280' },
  darkSubText: { color: '#9ca3af' },
});
