import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#d1d1d1',
  },
  payWrap: {
    
    height: 200,
    justifyContent: 'center',
  },
  cardMain: {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 20,
  },
  navigationContainer: {
    flex: 1,
    height: height,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    right: 0,
    zIndex:2,
    left: 0,
  },
  cardHolder: {
    height: 200,
   
    width: width - 100,
    zIndex: 0,
  },
  balance: {
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    position: 'relative',
    justifyContent: 'space-around',
  },
  lefticon: {
    position: 'absolute',
    top: -30,
  },
  card: {
    paddingTop: 100,
    justifyContent: 'center',

    borderWidth: 1,
    height: 400,
  },
  payButtonWrap: {
    backgroundColor: '#fff',
    height: 80,
    width: 80,
    alignSelf: 'center',
    borderRadius: 80/2,
    borderColor: '#d1d1d1',
    borderWidth: 5,
    position: 'absolute',
    top: -40,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

 
  payText: {
    fontSize: 15,
    letterSpacing: 1,
    textAlign: 'center',
    color: '#111',
  },
  welcome: {
    position: 'absolute',
    top: 40,

    left: 90,
    fontSize: 22,
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoText: {
    top: -5,
    paddingLeft: 20,
    fontSize: 25,
    flex: 2,
  },
  lng: {
    paddingTop: 13,
    paddingRight: 20,
  },
  content: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  button: {
    marginBottom: 20,
  },
  commercial: {
    width: width - 100,
    height: 200,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 20,
    position: 'relative',
    top: -150,
  },
  commercialText: {
    textAlign: 'center',
  },
  item: {},
  title: {
    fontSize: 20,
    paddingTop: 10,
    textAlign: 'center',
  },
  topMenu: {
    flexDirection: 'row',
  },
  righticon: {
    position: 'absolute',
    right: 10,
    top: -30,
  },
  botMenu: {
    flexDirection: 'row',
  },
  leftBottom: {position: 'absolute', left: 0, top: 0},
  rightBottom: {position: 'absolute', right: 10, top: 0},
});