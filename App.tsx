import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

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
        <Text style={styles.digits}>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</Text>
        <Text style={styles.dots}>:</Text>
        <Text style={styles.digits}>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</Text>
        <Text style={styles.dots}>:</Text>
        <Text style={styles.digits}>{('0' + ((time / 100) % 100)).slice(-1)}</Text>
        </View>
      <View style={styles.containerButton}>
        {!timerOn && time === 0 && (<Button
          style={styles.button}
          color={'yellow'}
          labelStyle={{ color: 'black', fontSize: 10 }}
          mode="contained"
          onPress={() => setTimerOn(true)}>
          Start
        </Button>)}
        {timerOn && <Button
          style={styles.button}
          color={'yellow'}
          labelStyle={{ color: 'black', fontSize: 10 }}
          mode="contained"
          onPress={() => setTimerOn(false)}>
          Stop
        </Button>}
        {!timerOn && time > 0 && (<Button
          style={styles.button}
          color={'yellow'}
          labelStyle={{ color: 'black', fontSize: 10 }}
          mode="contained"
          onPress={() => setTimerOn(true)}>
          Resume
        </Button>)}
        {!timerOn && time > 0 && (<Button
          style={styles.button}
          color={'yellow'}
          labelStyle={{ color: 'black', fontSize: 10 }}
          mode="contained"
          onPress={() => setTime(0)}>
          Reset
        </Button>)}
      </View>
    </View>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  containerClock: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
  },
  containerButton: {
    flexDirection: 'row',
  },
  digits: {
    backgroundColor: 'lightgray',
    width: 60,
    height: 60,
    fontSize: 40,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: 'darkgray',
    borderWidth: 2,
  },
  dots: {
    fontSize: 40,
    width: 15,
  textAlign: 'center',
  },
  button: {
    width: '20%',
  },
});
