import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  questionWrapper: {
    flex: 1,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
    backgroundColor: COLORS.secondary,
    marginTop: '30%',
    alignItems: 'center',
  },
  titleText: {
    marginTop: SIZES.margin * 7,
    marginBottom: SIZES.margin * 3,
    color: COLORS.white,
  },
  questionTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: SIZES.title,
    color: COLORS.white,
  },
  highlightedWord: {
    color: COLORS.white,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  traslateTextWrapper: {
    color: COLORS.white,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    flexDirection: 'row',
    marginTop: SIZES.margin * 7,
    justifyContent: 'flex-end',
  },
  wordWrapper: {
    height: 100,
    marginRight: SIZES.margin,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wordText: {
    fontSize: SIZES.title,
    color: COLORS.white,
  },
  wordBlankWrapper: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    width: 100,
    marginRight: SIZES.margin,
    justifyContent: 'flex-end',
  },
  buttonWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 60,
  },
  options: {
    marginLeft: SIZES.margin,
    marginTop: SIZES.margin,
    alignItems: 'center',
  },
  optionsWrapper: {
    width: SIZES.width * 0.8,
    flexDirection: 'row',
    marginTop: SIZES.margin * 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  badgeWrapper: {
    justifyContent: 'flex-end',
    marginRight: SIZES.margin,
  },
  buttonWrapperBack: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    elevation: 1,
  },
  boldText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.smallTitle,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.margin * 2,
    marginHorizontal: '10%',
  },
});
