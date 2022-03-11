import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import firestore, { firebase } from '@react-native-firebase/firestore';
import styles from './styles';
import { COLORS } from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';

// import all the components
import WordPopUp from '../../components/WordPopUp';
import Button from '../../components/Button';
import Badge from '../../components/Badge';

const HomeScreen: React.FC = () => {
  // set the state
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showWordPopUp, setShowWordPopUp] = useState(false);
  const [popUpTitle, setPopUpTitle] = useState('');
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState({});
  const [splitQue, setSplitQue] = useState([]);
  const [ans, setAns] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setQuestion(data[index]);
      setAns(data[index]?.ger_ans);
    } else {
      setQuestion({});
    }
  }, [index]);

  useEffect(() => {
    setQuestion(data[index]);
  }, [data]);

  // all the functions

  // get the data from the database
  const getData = async () => {
    try {
      const snapshot = await firestore().collection('questions').get();
      const data = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // handle correct answer
  const handleContinue = async () => {
    if (question?.ger_ans?.toLowerCase() === selectedOption.toLowerCase()) {
      try {
        await firebase
          .firestore()
          .collection('questions')
          .doc(question?.id)
          .update({
            isCorrect: true,
          });
        getData();
        setShow(true);
      } catch (error) {
        Toast.show('Something went wrong');
      }
      console.log('correct');
    } else {
      try {
        await firebase
          .firestore()
          .collection('questions')
          .doc(question?.id)
          .update({
            isCorrect: false,
          });
        getData();
        setShow(true);
      } catch (error) {
        Toast.show('Something went wrong');
      }
    }
  };

  const handleNext = () => {
    setAns('');
    setSelectedOption('');
    setShow(false);
    setIndexFun();
    setQuestion(data[index]);
  };
  // handle selected option
  const handleOption = (option: string) => {
    let data = option;
    console.log(option);
    setSelectedOption(data);
  };

  // handle show word pop up
  const handleShowWordPopUp = (word: string) => {
    setPopUpTitle(word);
    setShowWordPopUp(!showWordPopUp);
  };

  const setIndexFun = () => {
    let i = index + 1;
    if (index === data.length) {
      setAns('');
      setSelectedOption('');
      setShow(false);
      setQuestion(data[0]);
      setIndex(0);
    } else {
      setIndex(i);
    }
  };

  // split the question
  const splitQuestion = (question: string) => {
    if (question) {
      const splitQue = question.split(' ');
      return splitQue;
    } else {
      return [];
    }
  };

  const gerQue = splitQuestion(question?.ger_que);
  const engQue = splitQuestion(question?.eng_que);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.questionWrapper}>
        <Text style={styles.titleText}>Fill in the missing word</Text>
        <View style={styles.questionTextWrapper}>
          <Text style={styles.questionText}>
            {engQue &&
              engQue.length > 0 &&
              engQue.map((word, index) => {
                if (word?.toLowerCase() === question?.eng_ans?.toLowerCase()) {
                  return (
                    <Text key={index} style={styles.highlightedWord}>
                      {word}{' '}
                    </Text>
                  );
                } else {
                  return (
                    <Text key={index} style={styles.questionText}>
                      {word}{' '}
                    </Text>
                  );
                }
              })}
          </Text>
        </View>
        <View style={styles.traslateTextWrapper}>
          {gerQue &&
            gerQue.length > 0 &&
            gerQue.map((word, index) => {
              if (word?.toLowerCase() === question?.ger_ans?.toLowerCase()) {
                return !selectedOption ? (
                  <TouchableOpacity key={index} style={styles.wordBlankWrapper}>
                    <Text />
                  </TouchableOpacity>
                ) : (
                  <View key={index} style={styles.badgeWrapper}>
                    <Badge
                      title={selectedOption}
                      show={true}
                      textColor={
                        show
                          ? ans.toLowerCase() === selectedOption.toLowerCase()
                            ? COLORS.white
                            : COLORS.white
                          : COLORS.black
                      }
                      color={
                        show
                          ? question?.ger_ans?.toLowerCase() ===
                            selectedOption?.toLowerCase()
                            ? COLORS.blue
                            : COLORS.red
                          : COLORS.white
                      }
                    />
                  </View>
                );
              } else if (
                word?.toLowerCase() === selectedOption?.toLowerCase()
              ) {
                return (
                  <View key={index} style={styles.badgeWrapper}>
                    <Badge title={selectedOption} show={true} />
                  </View>
                );
              } else {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleShowWordPopUp(word)}
                    style={styles.wordWrapper}>
                    {/* <WordPopUp title={popUpTitle} show={showWordPopUp} /> */}
                    <Text style={styles.wordText}>{word}</Text>
                  </TouchableOpacity>
                );
              }
            })}
        </View>
        <View style={styles.optionsWrapper}>
          {question &&
            question?.options?.length > 0 &&
            question.options.map((option, index) => {
              return (
                <View key={index} style={styles.options}>
                  <Badge title={option} onPress={() => handleOption(option)} />
                </View>
              );
            })}
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="continue"
            onPress={handleContinue}
            textColor={COLORS.white}
            color={selectedOption.length > 0 ? COLORS.blue : COLORS.lightBlue}
            enabled={!(selectedOption.length > 0)}
          />
        </View>
        {show ? (
          question?.ger_ans?.toLowerCase() === selectedOption?.toLowerCase() ? (
            <View style={styles.buttonWrapperBack}>
              <View style={styles.buttonWrapper}>
                <Button
                  title="continue"
                  onPress={handleNext}
                  textColor={COLORS.blue}
                  color={COLORS.white}
                  enabled={!selectedOption}
                />
              </View>
              <View style={styles.headerWrapper}>
                <Text style={styles.boldText}>Greate Job!</Text>
                <FontAwesome name="flag" size={20} color={COLORS.white} />
              </View>
            </View>
          ) : (
            <View
              style={{
                ...styles.buttonWrapperBack,
                backgroundColor: COLORS.red,
              }}>
              <View style={styles.buttonWrapper}>
                <Button
                  title="continue"
                  onPress={handleNext}
                  textColor={COLORS.red}
                  color={COLORS.white}
                  enabled={!(selectedOption === ans)}
                />
              </View>
              <View style={styles.headerWrapper}>
                <Text style={styles.boldText}>Answer: {question?.ger_ans}</Text>
                <FontAwesome name="flag" size={20} color={COLORS.white} />
              </View>
            </View>
          )
        ) : null}
      </View>
    </View>
  );
};

export default HomeScreen;
