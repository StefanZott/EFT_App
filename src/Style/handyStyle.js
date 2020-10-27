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
    image64x64: {
      width: 64,
      height: 64
    },
    image64x127: {
      width: 64,
      height: 127
    },
    image105x105: {
      width: 105,
      height: 105
    },
    image127x64: {
      width: 127,
      height: 64
    },
    image127x127: {
      width: 127,
      height: 127
    },
    image180x225: {
      width: 180,
      height: 225
    },
    image190x127: {
      width: 190,
      height: 127
    },
    image190x190: {
      width: 190,
      height: 190
    },
    image190x253: {
      width: 190,
      height: 253
    },
    image250x100: {
      width: 250,
      height: 100
    },
    image250x150: {
      width: 250,
      height: 150
    },
    image250x188: {
      width: 250,
      height: 188
    },
    image250x250: {
      width: 250,
      height: 250
    },
    image250x292: {
      width: 250,
      height: 292
    },
    image250x300: {
      width: 250,
      height: 300
    },
    image250x312: {
      width: 250,
      height: 312
    },
    image250x350: {
      width: 250,
      height: 350
    },
    image253x127: {
      width: 253,
      height: 127
    }
});

export default styles;