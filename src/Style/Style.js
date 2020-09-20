import HandyStyle from '../Style/handyStyle';

export default function Style(params) {
    let screenWidth = params; 

    if (screenWidth <= 480) {
        let object = {
            container: HandyStyle.container,
            image: HandyStyle.image,
            copyright: HandyStyle.copyright,
            backgroundImage: require('../assets/images/eft_480.png'),
            header: HandyStyle.header,
            content: HandyStyle.content,
            footer: HandyStyle.footer,
            textInput: HandyStyle.textInput,
            button: HandyStyle.textButton,
            activityIndicator: HandyStyle.activityIndicator
        }
        return object;
      } else if (screenWidth <= 1024) {
        
      } else if (screenWidth > 1024) {
        
      } 
    
}