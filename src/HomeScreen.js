import React from 'react'
import {Text, View, ScrollView, TouchableOpacity } from 'react-native'

import { AYBButton, Card, CardSection } from './common'



class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'İLK YARDIM ANA SAYFA',
        headerLeft: null,
        headerTitleStyle: {alignSelf: 'center'}
      }

      listRender(){
        const {navigate} = this.props.navigation;

          const listNames = [
              {link: 'Hayvanlar', name: 'Hayvan Sokmaları ve Isırmaları' },
              {link: 'KafaOmurga', name: 'Kafatası ve Omurga Yaralanmaları'},
              {link: 'Zehirlenmeler', name: 'Zehirlenmeler' },
              {link: 'Yaniklar', name: 'Yanıklar' },
              {link: 'SicakSoguk', name: 'Sıcak ve Soğuk Çarpması' } 
          ]

          return listNames.map((item)=>{
              return(
                <CardSection key ={item.link}>
                    <TouchableOpacity onPress={()=>navigate('InfoLayout', {name: item.link})}>
                        <Text style={styles.listEntry}>{item.name}</Text>
                    </TouchableOpacity>
                </CardSection>
              )
            
          })
      }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <AYBButton onPress={() => navigate('AYB', {id: 1})}>
                    ACİL BUTON
                </AYBButton>

                <ScrollView>
                    <Card>
                        {this.listRender()}
                    </Card>
            </ScrollView>
            </View>
        )
    }
    
}

const styles = {
    listEntry: {
        fontSize: 16
    }
}

export default HomeScreen