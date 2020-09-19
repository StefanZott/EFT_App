import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
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
      top: 50,
      height: 30,
      width: '80%',
      backgroundColor: 'white'
    }
});

export default styles;