import HandyStyle from '../Style/handyStyle';

export default function Style(params) {
    let screenWidth = params; 

    if (screenWidth <= 480) {
        let object = {
            container: HandyStyle.container,
            image: HandyStyle.image,
            copyright: HandyStyle.copyright,
            backgroundImage: require('../assets/images/background/eft_480.png'),
            header: HandyStyle.header,
            content: HandyStyle.content,
            footer: HandyStyle.footer,
            textInput: HandyStyle.textInput,
            button: HandyStyle.textButton,
            activityIndicator: HandyStyle.activityIndicator,
            headerStyle: HandyStyle.headerStyle,
            headerTitleStyle: HandyStyle.headerTitleStyle,
            textDetail: HandyStyle.textDetail,
            textDetailHeader: HandyStyle.textDetailHeader,
            detailheader: HandyStyle.detailheader,
            textDetailKey: HandyStyle.textDetailKey,
            textDetailValue: HandyStyle.textDetailValue,
            contentDetail: HandyStyle.contentDetail,
            contentDetailLeft: HandyStyle.contentDetailLeft,
            contentDetailRight: HandyStyle.contentDetailRight,
            contentDetailTop: HandyStyle.contentDetailTop,
            contentDetailBottom: HandyStyle.contentDetailBottom,
            image64x64: HandyStyle.image64x64,
            image64x127: HandyStyle.image64x127,
            image105x105: HandyStyle.image105x105,
            image127x64: HandyStyle.image127x64,
            image127x127: HandyStyle.image127x127,
            image180x225: HandyStyle.image180x225,
            image190x127: HandyStyle.image190x127,
            image190x190: HandyStyle.image190x190,
            image190x253: HandyStyle.image190x253,
            image250x100: HandyStyle.image250x100,
            image250x150: HandyStyle.image250x150,
            image250x188: HandyStyle.image250x188,
            image250x250: HandyStyle.image250x250,
            image250x292: HandyStyle.image250x292,
            image250x300: HandyStyle.image250x300,
            image250x312: HandyStyle.image250x312,
            image250x350: HandyStyle.image250x350,
            image253x127: HandyStyle.image253x127,
            imageUnkown: HandyStyle.imageUnkown
        }
        return object;
      } else if (screenWidth <= 1024) {
        
      } else if (screenWidth > 1024) {
        
      } 
    
}