import React from 'react'
import {Button, Image, View, Text, StyleSheet} from 'react-native'
import {Hmbr} from './common'

export default class Credits extends React.Component {
    static navigationOptions = ({navigation}) =>{

      return {
        title: "Katkıda Bulunanlar",
        drawerLabel: 'Katkıda Bulunanlar',
        headerLeft: <Hmbr onPress={() => navigation.navigate('DrawerToggle')} />,
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/credits.png')}
            style={styles.icon}
          />
        ),
      }
    }
    
    creditsRender() {
      const people = [
        {title: 'Acil Durum Butonu', people: ['Dilara BAŞLİ', 'Burcu KÜNDÜM', 'Cantürk YILMAZ']},
        {title: 'Bilgilendirme Sayfaları', people: ['Özge ÇETİNER']},
        {title: 'Uygulama Geliştirme', people: ['Mert AKÇA']}
      ]

      return people.map((entry, index) => {

           return  (
            <View style={styles.container} key={index}>
              <Text style={styles.title}>{entry.title}</Text>
              {entry.people.map((person, index) => <Text key={index}> {person} </Text>)}
            </View>)
            })
          
    }
  
    render() {
      return (
          <View style={styles.pageContainer}>
            <View>
              {this.creditsRender()}
            </View>

            <View>
              <View style={styles.container}>
                <Text style={styles.title}>ODTÜ Cankurtarma ve İlkyardım Topluluğu</Text>
                <Text style={styles.textStyle}>1992'den beri ilk yardım ve can kurtarma konusunda eğitim veren bir ODTÜ spor topluluğudur. </Text>
              </View>

              <View style={styles.container}>
                <Text style={styles.title}> Bağış </Text>
                <Text style={styles.textStyle}> Uygulamanın geliştirilmesinde katkıda bulunabilirsiniz.</Text>
                <Text style={styles.textStyle}> IBAN: 24 0011 1000 0000 0059 9215 35 </Text>
              </View>

            </View>
          </View>
      );
    }
  }

  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    pageContainer:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    textStyle: {
      textAlign: 'center'
    },

    container: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
    }
  })