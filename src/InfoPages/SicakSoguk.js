import React from 'react'
import {Text, View, Image, ScrollView } from 'react-native'
import {Card, CardSection} from '../common'


class SicakSoguk extends React.Component {

    static navigationOptions = {
        title: 'Donma & Sıcak Çarpması'
    }

    render() {

        return(
            <ScrollView>
                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>DONMA & SICAK ÇARPMASI</Text>
                    </CardSection>
                </Card>

                <Card>

                    <CardSection>
                        <Text style={styles.bigTitle}>Donma (Hipotermi)</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>1. Derece Donma: Deride solukluk, soğukluk, uyuşukluk ve sonrasında kızarıklık oluşur.</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>2. Derece Donma: Deride şişlik ve içi su dolu kabarcıklarla kendini gösterir. </Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>3. Derece Donma: Canlı ve sağlıklı deriden kesin hatlarla ayrılan siyah bölgenin görülmesiyle oluşur. </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>

                        <View style={styles.smallContainer}>
                            <Text>-	Hasta ya da yaralı ılık bir ortama alınarak soğukla teması kesilir (aniden çok sıcak ortama sokulmamalıdır).  </Text>
                            <Text>-	Hasta ya da yaralı sakinleştirilir ve hareket ettirilmez. </Text>
                            <Text>-	Hasta ya da yaralıya kuru giysiler giydirilir, bilinci yerinde ise sıcak içecekler verilir. </Text>
                            <Text>-	Vücutta oluşan içi su dolu kabarcıklar asla patlatılmaz. </Text>
                            <Text>-	Donmuş el ve ayaklar bulunduğu şekilde kendi doğal pozisyonunda tutulur. </Text>
                            <Text>-	El ve ayaklarda ısıtma işleminden sonra hala hissizlik varsa bezle bandaj yapılır ya da sarılır. </Text>
                            <Text>-	Hasta ya da yaralının alkol almasına ve tütün kullanmasına asla izin verilmez. </Text>
                            <Text>-	Zarar gören bölgeler kesinlikle buz ve soğuk suyla ovulmaz. </Text>
                            <Text>-	Tıbbi yardım istenir (112). </Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>

                    <CardSection>
                        <Text style={styles.bigTitle}>Sıcak Çarpması</Text>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Belirtiler</Text>

                        <View style={styles.smallContainer}>
                            <Text>-	Adale krampları</Text>
                            <Text>-	Güçsüzlük, yorgunluk </Text>
                            <Text>-	Baş dönmesi, davranış bozukluğu </Text>
                            <Text>-	Solgun ve sıcak deri </Text>
                            <Text>-	Aşırı terleme (zamanla azalır) </Text>
                            <Text>-	Mide krampları, bulantı, kusma </Text>
                            <Text>-	Hızlı nabız </Text>
                            <Text>-	Hayal görme, sayıklama </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Hasta serin ve havadar bir yere alınır. </Text>
                            <Text>-	Terli giysiler çıkartılıp, kuru ince giysiler giydirilir. </Text>
                            <Text>-	Sırt üstü yatırarak hasta ya da yaralının kol ve bacakları yükseltilir. </Text>
                            <Text>-	Hasta ya da yaralının bilinci açık ve bulantısı yok ise karbonat tuz karışımı ya da soda içirilir ( 1 litre suya; 1 çay kaşığı karbonat, 1 çay kaşığı tuz karışımı) </Text>
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

export {SicakSoguk}