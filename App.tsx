import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


let prviPoeni:number = 0
let drugiPoeni:number = 0

var counter = function(x:number):number{
  return x + 1;
}



const AlignSelfLayout = () => {
  const [ setAlignSelf ] = useState("stretch");
  

  return (
    <PreviewLayout
      label="Stoni tenis"
      
      
      setSelectedValue={setAlignSelf}>       
      <View style={styles.row}>  
      <View style={styles.buttonContainer}>
        
          <Button
            onPress={() => counter(prviPoeni)}
            title="Prvi igrač"
            color="green">
            </Button>
            </View>        
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => counter(drugiPoeni)}
            title="drugi igrač"
            color="green">
          </Button>
          </View>
          </View>
      <View style={styles.row}>  
        <View
            style={[styles.box, {
            marginHorizontal: "1%",
            minWidth: "48%",
            backgroundColor: "white",
          }]}>
            <Text style={styles.bigBlue}>{prviPoeni}</Text>
        </View>
        <View
            style={[styles.box, {
            backgroundColor: "white" }]}>
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
    backgroundColor: "lightgreen",
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
    textAlign: "center",
  },
  buttonContainer: {
    margin: 10,
    marginHorizontal: "1%",
    minWidth: "48%",
    
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