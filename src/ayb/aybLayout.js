import React from 'react'
import {View,Text, Image} from 'react-native'
import { Card, CardSection, Button } from '../common'

import aybData from './aybData.json';

class AYB extends React.Component {

    static navigationOptions = {
        title: "ACİL DURUM",
        
    }

    constructor(props) {
        super(props)

        this.state={
            gifs: {
                "gif1": require("./gifs/guvenlik.gif"),
                "gif2": require("./gifs/bilinc.gif"),
                "gif3": require("./gifs/sikan_giysi.gif"),
                "gif4": require("./gifs/agiz.gif"),
                "gif5": require("./gifs/nefes_kontrol.gif"),
                "gif6": require("./gifs/basi_noktasi.gif"),
                "gif7": require("./gifs/5cm_asagi.gif"),
                "gif8": require("./gifs/nefes.gif"),
                "gif9": require("./gifs/cpr.gif"),
                "gif10": require("./gifs/sample.gif"),
                "gif11": require("./gifs/kafa.gif"),
                "gif12": require("./gifs/gogus.gif"),
                "gif13": require("./gifs/omurga.gif"),
                "gif14": require("./gifs/karin.gif"),
                "gif15": require("./gifs/bacak.gif"),
                "gif16": require("./gifs/kol.gif"),
                "gif17": require("./gifs/it_cek.gif"),
                "gif18": require("./gifs/ambulans.gif")
            }
        }
    }

    renderButton() {
        const {navigate} = this.props.navigation
        const {params} = this.props.navigation.state
        const content = aybData["ayb" + params.id]


        if(content.multiplechoice.isMultiple) {
            return (
                <View style={styles.yesNoButtonContainer}>
                    <Button buttonColor='red' flexButton="on" onPress={()=> navigate('AYB', {id: content.multiplechoice.nextNo})}> HAYIR </Button>
                    <Button buttonColor='green' flexButton="on" onPress={()=> navigate('AYB', {id: content.multiplechoice.nextYes})}> EVET </Button>
                </View>
            )
        } else if (content.next === 0) {
            return (
                <View >
                    <Button buttonColor='black' onPress={()=> navigate('Home')}>Ana Sayfa</Button>
                </View>
                )
        }

        return (
                <View>
                    <Button buttonColor='#007aff' onPress={()=> navigate('AYB', {id: content.next})}>
                        Devam
                    </Button>
                </View>
        )
    }

    render() {

        const {params} = this.props.navigation.state

        const content = aybData["ayb" + params.id]

        const imageLink = './' + content.image

        return (
            <View style={styles.pageContainer}>
                <Card>
                    <Image style={{height: 240, width: '100%'}} source={this.state.gifs["gif" + params.id]} />
                </Card>

                
                <Card>
                    <View style={styles.textBoxStyle}>
                        <Text style={styles.textStyle}>
                        {content.description}
                        </Text>
                    </View>
                </Card>

                {this.renderButton()}
                
            </View>
        )
    }
    
}

const styles = {
    textBoxStyle:{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
    },
    textStyle: {
        fontSize: 16
    },
    yesNoButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    pageContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
    }
}

export default AYB