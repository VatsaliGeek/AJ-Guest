import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants';

const Button: React.FC<{
  title: string;
  color: string;
  textColor: string;
  enabled: boolean;
  onPress: () => void;
}> = ({ title, color, textColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: color ? color : COLORS.white,
      }}>
      <Text
        style={{
          ...styles.buttonText,
          color: textColor ? textColor : COLORS.black,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.padding,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: COLORS.black,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default Button;
