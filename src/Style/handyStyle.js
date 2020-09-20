import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      alignItems: 'center',
      justifyContent: 'center'
    },
    activityIndicator: {
      alignSelf: 'center'   
    },
    image: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      alignItems: 'center',
      justifyContent: 'center'
    },
    copyright: {
      position: 'absolute',
      bottom: 50,
      color: 'white'
    },
    header: {
      width: Dimensions.get('screen').width,
      height: '10%',
      alignItems: 'center'
    },
    content: {
      width: Dimensions.get('screen').width,
      height: '80%',
      padding: 10
    },
    footer: {
      width: Dimensions.get('screen').width,
      height: '10%',
      alignItems: 'center'
    },
    textInput: {
      position: 'absolute',
      top: 15,
      height: 30,
      width: '80%',
      backgroundColor: 'white'
    },
    textButton: {
      color: 'red',
      backgroundColor: 'white',
      margin: 3,
      height: 40,
      textAlignVertical: 'center',
      textAlign: 'center',
      borderWidth: 2,
      borderRadius: 25,
      fontSize: 30,
      fontFamily: 'BlackOpsOne-Regular'
    }
});

export default styles;