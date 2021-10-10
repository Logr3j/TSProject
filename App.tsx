import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';

function index() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.bigBlue}>{count1}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.bigBlue}>{count2}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <View style={styles.box}>
            {(() => {
              if ((count1 + count2) % 4 == 0 || (count1 + count2) % 4 == 1) {
                return <Text style={styles.bigBlue}>{'SERVE'}</Text>;
              }
              return null;
            })()}
          </View>
          <View style={styles.box}>
            {(() => {
              if ((count1 + count2) % 4 == 2 || (count1 + count2) % 4 == 3) {
                return <Text style={styles.bigBlue}>{'SERVE'}</Text>;
              }
              return null;
            })()}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            color="green"
            mode="contained"
            onPress={() => setCount1(count1 + 1)}>
            PLAYER1 +
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="green"
            mode="contained"
            onPress={() => setCount2(count2 + 1)}>
            PLAYER2 +
          </Button>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <Button
            color="orange"
            mode="contained"
            onPress={() => setCount1(count1 - 1)}>
            PLAYER1 -
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="orange"
            mode="contained"
            onPress={() => setCount2(count2 - 1)}>
            PLAYER2 -
          </Button>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <Button
            color="#BF4D28"
            mode="contained"
            onPress={() => {
              setCount1(0);
              setCount2(0);
            }}>
            reset
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const PreviewLayout = ({label, children}) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>

    <View style={styles.container}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: 10,
  },
  box: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'pink',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'red',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 10,
    marginHorizontal: '1%',
    minWidth: '48%',
  },
  text: {
    borderWidth: 1,
    padding: 10,
    minWidth: '48%',
    borderColor: 'black',
    backgroundColor: 'pink',
  },
});

export default index;
