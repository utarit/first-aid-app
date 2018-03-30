import React from 'react'
import {Text, View, Image, ScrollView } from 'react-native'
import {Card, CardSection} from '../common'


class Yaniklar extends React.Component {

    static navigationOptions = {
        title: 'Yanıklar'
    }

    render() {

        return(
            <ScrollView>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>YANIKLAR</Text>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>1. Derece Yanıklar</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>-	Derinin sadece en üst tabakası zedelenir.</Text>
                            <Text>-	Kızarıklık, gerginlik ve ağrı görülür. </Text>
                            <Text>Müdahale: En az 10 dakika soğuk suya tutun. Merhem de kullanılabilir. </Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>2. Derece Yanıklar</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>-	Derinin üst ve değişen oranlarda alt kısmı da etkilenir. </Text>
                            <Text>-	Kızarıklık, ağrı ve su toplaması görülür. </Text>
                            <Text>Müdahale: Suya tut. Kuru, yapışmaz, temiz steril bir bezle sar. Merhem kullanma. Bülleri (su kabarcıkları) patlatma. </Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>3. Derece Yanıklar</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>-	Deri altı dokulara hatta kemiğe kadar ulaşır. </Text>
                            <Text>-	Deri kuru olur, renk değiştirir. </Text>
                            <Text>-	Sinir uçları ve kan damarları zedelenir, his kaybı oluşur. </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	ACİLEN SAĞLIK KURULUŞUNA GİTMELİ</Text>
                            <Text>- Steril bez ile kapat (yaranın hava ile teması kesilsin). </Text>
                            <Text>- Hasta kendindeyse su içebilir.</Text>
                            <Text>- Şoka karşı önlem al. </Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Kimyasal Yanıklar</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>-	Toz halinde ise hemen bir bez ya da fırça yardımıyla maddeyi vücuttan uzaklaştır sonra yıka.  </Text>
                            <Text>-	Sıvı halinde ise kıyafetleri çıkar ve basınçlı su ile yıka. </Text>
                            <Text>-	Göz etkilendiyse acilen zarar gören göz aşağıda kalacak şekilde akan musluğun altında temizle.</Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Elektrik Yanıkları</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>Elektrik yanıklarında mümkünse şalteri kapat. Akımı elektriği iletmeyecek bir madde ile kes, hastayı uzaklaştır. Hastayı gözlem altında tut. Bilinçsiz fakat soluk alıyorsa şok durumunu önle. Omurgayı kontrol et. Kırık olup olmadığını kontrol et. </Text>
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

export {Yaniklar}

