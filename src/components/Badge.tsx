import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants';

const Badge: React.FC<{
  title: string;
  show: boolean;
  color: string;
  textColor: string;
  onPress: () => void;
}> = ({ title, show, onPress, color, textColor }) => {
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
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding / 1.5,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
});
export default Badge;
