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
      backgroundColor: 'black',
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'white',
      color: 'white'
    },
    listSeparator: {
      height: 2,
      backgroundColor: null
    },
    textButton: {
      color: 'white',
      backgroundColor: 'black',
      margin: 3,
      height: 40,
      textAlignVertical: 'center',
      textAlign: 'center',
      borderWidth: 2,
      borderRadius: 25,
      borderColor: 'blue',
      fontSize: 30,
      fontFamily: 'BlackOpsOne-Regular'
    },
    textDetailKey: {
      color: 'white'
    },
    textDetailHeader: {
      width: '100%',
      height: '100%',
      color: 'white',
      backgroundColor: 'black',
      fontFamily: 'BlackOpsOne-Regular',
      fontSize: 20,
      textAlignVertical: 'center',
      textAlign: 'center',
      borderBottomWidth: 5,
      borderBottomColor: 'white'
    },
    textDetailKey: {
      color: 'white'
    },
    textDetailValue: {
      color: 'white'
    },
    contentDetail: {
      width: Dimensions.get('screen').width,
      height: '80%',
      padding: 10,
      flexDirection: 'column',
      display: 'flex'
    },
    contentDetailLeft: {
      display: 'flex',
      flex: 1
    },
    contentDetailRight: {
      display: 'flex',
      flex: 1
    },
    contentDetailTop: {
      display: 'flex',
      
    },
    contentDetailBottom: {
      flexDirection: 'row',
      display: 'flex',
      flex: 2
    },
    imageUnkown: {
      width: 180,
      height: 180,
      borderWidth: 2,
      borderColor: 'white'
    },
    image64x127: {
      width: 64,
      height: 127
    },
    image250x292: {
      width: 250,
      height: 292
    },
    image250x350: {
      width: 250,
      height: 350
    }
});

export default styles;