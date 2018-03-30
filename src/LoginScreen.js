import React from 'react'
import {Text, View, Image } from 'react-native'


export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
      }

      componentDidMount() {
        const {navigate} = this.props.navigation;

        setTimeout(()=> navigate('Home'), 3000)

      }


      render(){

        return(
            <View style={styles.containerStyle}>
                <View></View>
                <View style={{alignItems: 'center'}}>
                    <Image style={styles.imageStyle} source={require('./images/ocit_logo.png')} />
                <Text style={styles.textStyle}> First Aid App v.1.0.2 Beta </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.infoStyle}>Bu uygulama bilgi amaçlı olup olabilecek olumsuzluklar kullanıcının sorumluluğundadır.</Text>
                </View>
            </View>
        )
      }
}


const styles = {
    containerStyle: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    imageStyle: {
        height: 100,
        width: 120,
        marginBottom: 2,
    },
  
    textStyle: {
        fontSize: 16,
    },

    infoStyle: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 3,
    }
  }