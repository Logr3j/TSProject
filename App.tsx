import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


let prviPoeni:number = 0
let drugiPoeni:number = 0

let counter = function(x:number):number{
  return x + 1;
}


const AlignSelfLayout = () => {
  const [alignSelf, setAlignSelf] = useState("stretch");
  
    
 

  return (
    <PreviewLayout
      label="Stoni tenis"
      selectedValue={alignSelf}
      
      setSelectedValue={setAlignSelf}>       
      <View style={styles.row}>  
      <View style={styles.buttonContainer}>
          <Button
            onClick={() => counter(prviPoeni)}
            title="Prvi igrač"
            color="#841584">
            </Button>
            </View>        
        <View style={styles.buttonContainer}>
          <Button
            onClick={() => counter(drugiPoeni)}
            title="drugi igrač"
            color="#841584">
          </Button>
          </View>
          </View>
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
            
            backgroundColor: "skyblue" }]}>
            <Text style={styles.bigBlue}>{drugiPoeni}</Text>
        </View>
      </View>
      
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,

}) => (
  <View style={{padding: 10, flex: 1, }}>
    <Text style={styles.label}>{label}</Text>
    
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
  },
  buttonContainer: {
    margin: 20
  },  
  text: {
    borderWidth: 1,
    padding: 10,
    minWidth: "48%",
    borderColor: 'black',
    backgroundColor: 'pink'
 }
});

export default AlignSelfLayout;