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
            listSeparator: HandyStyle.listSeparator,
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
            image64x127: HandyStyle.image64x127,
            image250x292: HandyStyle.image250x292,
            image250x350: HandyStyle.image250x350,
            imageUnkown: HandyStyle.imageUnkown
        }
        return object;
      } else if (screenWidth <= 1024) {
        
      } else if (screenWidth > 1024) {
        
      } 
    
}