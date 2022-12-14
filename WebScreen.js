import React from 'react'
import { StyleSheet, Text , View } from 'react-native'
import { WebView } from 'react-native-webview';
export default class WebScreen extends React.Component{
sitio = this.props.navigation.getParam('sitio')

lugares={
sanandres:"https://www.google.com/maps/place/Sitio+Arqueol%C3%B3gico+San+Andr%C3%A9s/@13.715929,-89.1610655,15z/data=!3m1!4b1",

joyaceren:"https://www.google.com/maps/place/Joya+de+Ceren/@13.8212866,-89.3642815,16z",

casablanca:"https://www.google.com/maps/place/Sitio+Arqueol%C3%B3gico+de+Casa+Blanca/@13.715929,-89.1610655,15z/data=!3m1!4b1"



}

render(){
console.log(this["lugares"][this.sitio])
return(
<WebView style={styles.webSize} source={{ uri: this["lugares"][this.sitio] }}>
</WebView>
)
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
webSize:{
width: "100%",
height: "100%"
}
});
