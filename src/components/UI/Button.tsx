import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { FONTS } from '../../constant';

interface IconButtonProps {
  title: string;
  Icon?: React.ReactNode;
  onPress: () => void;
  isLoading?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  title,
  Icon,
  onPress,
  isLoading,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {isLoading && <ActivityIndicator />}

      {!isLoading && Icon && <View style={styles.iconWrapper}>{Icon}</View>}
      {!isLoading && (
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  iconWrapper: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.ClashDisplay.Regular,
  },
});

export default IconButton;
