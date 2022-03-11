import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../constants';

const WordPopUp: React.FC<{
  title: string;
  show: boolean;
}> = ({ title, show }) => {
  return show ? (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.triangle}></View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding / 3,
    borderRadius: SIZES.base * 2,
    marginBottom: SIZES.margin * 2,
  },
  titleText: {
    fontSize: SIZES.title,
    color: COLORS.black,
  },
  triangle: {
    height: 15,
    width: 15,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -7.5,
    transform: [{ rotate: '45deg' }],
  },
});
export default WordPopUp;
