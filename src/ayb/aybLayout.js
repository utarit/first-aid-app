import React from 'react'
import {View,Text, Image} from 'react-native'
import { Card, CardSection, Button } from '../common'

import aybData from './aybData.json';

class AYB extends React.Component {

    static navigationOptions = {
        title: "ACİL DURUM",
        
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
                    <Image style={{height: 250, width: '100%'}} source={require(`./example.png`)} />
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