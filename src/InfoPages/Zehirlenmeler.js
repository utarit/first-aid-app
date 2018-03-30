import React from 'react'
import {Text, View, Image, ScrollView } from 'react-native'
import {Card, CardSection} from '../common'


class Zehirlenmeler extends React.Component {

    static navigationOptions = {
        title: 'Zehirlenmeler'
    }

    render() {

        return(
            <ScrollView>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>ZEHİRLENMELER </Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.smallTitle}>114 Zehir Danışma Hattı </Text>
                    </CardSection>
                </Card>

                <Card>

                    <CardSection>
                        <Text style={styles.bigTitle}>Sindirim Yolu ile Zehirlenme</Text>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Belirtiler</Text>

                        <View style={styles.smallContainer}>
                            <Text>-	Bulantı</Text>
                            <Text>-	Kusma</Text>
                            <Text>-	Karın ağrısı</Text>
                            <Text>-	Şiddetli ishal</Text>
                        </View>

                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>

                        <View style={styles.smallContainer}>
                            <Text>-	Hasta ya da yaralının bilinci kontrol edilir ve yaşam bulguları değerlendirilir. </Text>
                            <Text>-	Hasta ya da yaralının bilinci yerinde ise ağzı su ile çalkalanır, eller zehirli madde ile temas etmişse su ile yıkanır. </Text>
                            <Text>-	Ağızdan herhangi bir şey verilmez ve kusturulmaya çalışılmaz (özellikle yakıcı madde zehirlenmelerinde asla kusturulmamalıdır). </Text>
                            <Text>-	Zehirleyici maddenin tespiti için veri toplanarak tıbbi yardım istenir. </Text>
                            <Text>-	Bilinç kaybı var ise koma pozisyonu verilir. </Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>

                    <CardSection>
                        <Text style={styles.bigTitle}>Solunum Yolu ile Zehirlenmeler</Text>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Belirtiler</Text>

                        <View style={styles.smallContainer}>
                            <Text>-	Solunum güçlüğü</Text>
                            <Text>-	Baş ağrısı </Text>
                            <Text>-	Bulanık görme </Text>
                            <Text>-	Kulak çınlaması</Text>
                            <Text>-	Morarma </Text>
                            <Text>-	Solunum Durması</Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Öncelikle patlama ve yangınlara karşı olay yeri güvenlik önlemleri alınır. </Text>
                            <Text>-	Hasta ya da yaralı temiz havaya çıkartılır ya da cam ve kapılar açılarak ortam havalandırılır.  </Text>
                            <Text>-	Hasta yaralının yaşam bulguları değerlendirilir. Gerekirse temel yaşam desteği sağlanır. </Text>
                            <Text>-	Tıbbi yardım istenir (112). </Text>
                            <Text>-	Hasta yaralının bilinci yerinde ise yarı oturur pozisyonda, bilinci kapalı ise koma pozisyonunda bekletilir. </Text>
                        </View>
                    </CardSection>

                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Deri Yoluyla Zehirlenmeler</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.smallTitle}>Nedenleri</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Zehirli maddenin vücut ile teması </Text>
                            <Text>-	Böcek sokmaları</Text>
                            <Text>-	Zehirli hayvan ısırmaları</Text>
                            <Text>-	İlaç enjeksiyonu </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Ellerin zehirle teması önlenir. </Text>
                            <Text>-	Hasta ya da yaralının yaşam bulguları değerlendirilir. </Text>
                            <Text>-	Zehir bulaşmış giysiler çıkartılır.  </Text>
                            <Text>-	Deri sabun ve bol su ile yaklaşık 15-20 dakika yıkanır. </Text>
                            <Text>-	Tıbbi yardım istenir (112). </Text>
                        </View>
                    </CardSection>

                </Card>
            </ScrollView>
        )
    }
}


const styles = {
    bigTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    smallTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    smallContainer: {
        paddingHorizontal: 5,
        paddingVertical: 5,
    }
}

export {Zehirlenmeler}

