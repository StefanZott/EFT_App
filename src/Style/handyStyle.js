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
    }
});

export default styles;