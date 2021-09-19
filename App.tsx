import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

<<<<<<< Updated upstream
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Alert,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Button
             title="DUGME"
             color="#842524"
             accessibilityLabel="Learn more about this purple button"
             onPress={() => Alert.alert('Sad samo probam git ekstenziju')}
             />
          <Button
             title="Ovo je drugo dugme iz drugog brancha"
             color="#842524"
             accessibilityLabel="Learn more about this purple button"
             onPress={() => Alert.alert('drugi branch')}
             />
            <Section title="Probam tekst">
            <ReloadInstructions />
          </Section>
          <Section title="Debug / Greške">
            <DebugInstructions />
          </Section>
          <Section title="Learn More / Uči više">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
=======
let prviPoeni: int = 0
let drugiPoeni: int = 0
const AlignSelfLayout = () => {
  const [alignSelf, setAlignSelf] = useState("stretch");

  return (
    <PreviewLayout
      label="Stoni tenis"
      selectedValue={alignSelf}
      values={["prvi igrač", "drugi igrač"]}
      setSelectedValue={setAlignSelf}>       
      <View style={styles.row}>  
        <View
            style={[styles.box, {
            alignSelf,
            marginHorizontal: "1%",
            minWidth: "48%",
            backgroundColor: "powderblue",
          }]}>
            <Text style={styles.bigBlue}>{prviPoeni}</Text>
        </View>
        <View
            style={[styles.box, {
            alignSelf,
            marginHorizontal: "1%",
            minWidth: "48%",
            backgroundColor: "skyblue" }]}>
            <Text style={styles.bigBlue}>{drugiPoeni}</Text>
        </View>
      </View>

    </PreviewLayout>
>>>>>>> Stashed changes
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{padding: 10, flex: 1, }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
            style={[
            styles.button            
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.container}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
<<<<<<< Updated upstream
  highlight: {
    fontWeight: '700',
=======
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "pink",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "red",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
>>>>>>> Stashed changes
  },
});

export default AlignSelfLayout;