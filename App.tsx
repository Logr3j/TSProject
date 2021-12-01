import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);
  const [lap, setLap] = React.useState(0);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 100);
      }, 100);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <View style={styles.container}>
      <View style={styles.containerClock}>
        <Text style={styles.digits}>
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}
        </Text>
        <Text style={styles.dots}>:</Text>
        <Text style={styles.digits}>
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
        </Text>
        <Text style={styles.dots}>:</Text>
        <Text style={styles.digits}>
          {('0' + ((time / 100) % 100)).slice(-1)}
        </Text>
      </View>
      <View style={styles.containerClock}>
        <Text style={styles.digits}>
          {('0' + Math.floor((lap / 60000) % 60)).slice(-2)}
        </Text>
        <Text style={styles.dots}>:</Text>
        <Text style={styles.digits}>
          {('0' + Math.floor((lap / 1000) % 60)).slice(-2)}
        </Text>
        <Text style={styles.dots}>:</Text>
        <Text style={styles.digits}>
          {('0' + ((lap / 100) % 100)).slice(-1)}
        </Text>
      </View>
      <View style={styles.containerButton}>
        {!timerOn && time === 0 && (
          <Button
            style={styles.button}
            color={'#aeff8c'}
            labelStyle={{color: 'black', fontSize: 15}}
            mode="contained"
            onPress={() => setTimerOn(true)}>
            Start
          </Button>
        )}
        {timerOn && (
          <Button
            style={styles.button}
            color={'#fff197'}
            labelStyle={{color: 'black', fontSize: 15}}
            mode="contained"
            onPress={() => setLap(time)}>
            Lap
          </Button>
        )}
        {timerOn && (
          <Button
            style={styles.button}
            color={'red'}
            labelStyle={{color: 'white', fontSize: 15}}
            mode="contained"
            onPress={() => setTimerOn(false)}>
            Stop
          </Button>
        )}
        {!timerOn && time > 0 && (
          <Button
            style={styles.button}
            color={'#fff197'}
            labelStyle={{color: 'black', fontSize: 15}}
            mode="contained"
            onPress={() => setTimerOn(true)}>
            Resume
          </Button>
        )}
        {!timerOn && time > 0 && (
          <Button
            style={styles.button}
            color={'#fff197'}
            labelStyle={{color: 'black', fontSize: 15}}
            mode="contained"
            onPress={() => {
              setTime(0);
              setLap(0);
            }}>
            Reset
          </Button>
        )}
      </View>
    </View>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#919191',
  },
  containerClock: {
    backgroundColor: '#919191',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    flexDirection: 'row',
    height: 100,
    width: 250,
    justifyContent: 'center',
    elevation: 5,
  },
  containerButton: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  digits: {
    backgroundColor: '#f9f9f9',
    width: 60,
    height: 60,
    fontSize: 40,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    elevation: 10,
  },
  dots: {
    fontSize: 40,
    width: 15,
    textAlign: 'center',
  },
  button: {
    margin: 5,
    width: '30%',
    height: 40,
    elevation: 10,
  },
});
