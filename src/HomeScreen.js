import React from 'react'
import {Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

import { AYBButton, Card, CardSection, Button, Hmbr} from './common'
import { DrawerNavigator } from 'react-navigation'

import Credits from './Credits'


class HomeScreen1 extends React.Component {
    static navigationOptions = ({navigation}) => {

        return {
            title: 'İLK YARDIM ANA SAYFA',
            drawerLabel: 'Home',
            headerLeft: <Hmbr onPress={() => navigation.navigate('DrawerToggle')} />,
            drawerIcon: ({ tintColor }) => (
              <Image
                source={require('../assets/home.png')}
                style={styles.icon}
              />
            )
          }
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

      aybRender(){
        const {navigate} = this.props.navigation;
        let problems = []
        navigate('AYB', {id: 1, problems: []})
      }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <AYBButton onPress={()=> navigate('AYB', {id: 1})}>
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
    },
    icon: {
        width: 24,
        height: 24,
      }
}


  const HomeScreen = DrawerNavigator({
    "İLK YARDIM ANA SAYFA": {
      screen: HomeScreen1,
    },
    'Katkıda Bulunanlar': {
      screen: Credits,
    },
  });

  HomeScreen.navigationOptions = (props) => {
    const { index, routes } = props.navigation.state.routes[0];
    const title = routes[index].routeName;
    return { title };
  }

export default HomeScreen