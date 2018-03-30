import React from 'react'
import {Text, View, ScrollView } from 'react-native'

import { AYBButton, Card, CardSection, Button } from './common'



class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'İLK YARDIM ANA SAYFA',
        headerLeft: null,
        headerTitleStyle: {alignSelf: 'center'}
      }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <AYBButton onPress={() => navigate('AYB', {id: 1})}>
                    ACİL BUTON
                </AYBButton>

                <ScrollView>
                    <Button onPress={()=>navigate('KafaOmurga')}>
                        <Text>Kafa ve Omurga Yaralanmaları</Text>
                    </Button>

                    <Button onPress={()=>navigate('Hayvanlar')}>
                        <Text>Hayvan Sokmaları ve Isırmaları</Text>
                    </Button>

                    <Button onPress={()=>navigate('Zehirlenmeler')}>
                        <Text>Zehirlenmeler</Text>
                    </Button>
            </ScrollView>
            </View>
        )
    }
    
}

export default HomeScreen