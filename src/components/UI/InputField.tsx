import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { FONTS } from '../../constant';

type Props = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType: any;
};

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
}: Props) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
    fontFamily: FONTS.ClashDisplay.Bold,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  icon: {
    marginRight: 8,
    color: '#888',
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
    fontFamily: FONTS.LotaGrotesque.Regular,
  },
});

export default InputField;
