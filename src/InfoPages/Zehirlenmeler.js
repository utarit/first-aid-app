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
                            <Text>-	Baş ağrısı, baş dönmesi </Text>
                            <Text>-	Ezik, çürük, şişlik ve kesikler </Text>
                            <Text>-	Bulanık görme </Text>
                            <Text>-	Kulak çınlaması </Text>
                            <Text>-	Gürültü ve ışığa karşı duyarlılık </Text>
                            <Text>-	Denge problemleri </Text>
                            <Text>-	Mide bulantısı </Text>
                            <Text>-	Yorgunluk, uyuşukluk </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	İkincil değerlendirme (bulduğun pozisyonda yap)</Text>
                            <Text>-	112 </Text>
                            <Text>-	Kanama varsa bası yapılır</Text>
                            <Text>-	Hareket ettirme! </Text>
                            <Text>-	Telkin </Text>
                            <Text>-	Devamlı bilinç kontrol (ABC kontrol) </Text>
                        </View>
                    </CardSection>

                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Çene ve Yüz Kemiği Yaralanmaları</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.smallTitle}>Belirtileri</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Şekil bozukluğu </Text>
                            <Text>-	Duyu organlarının zarar görmesi  </Text>
                            <Text>-	Solunum zorluğu </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Acı ve şişlik için soğuk uygulama yapılır</Text>
                            <Text>-	Kanama varsa temiz bir bezle bası yapılır </Text>
                            <Text>-	Telkin et ve yüze dokunmasını engelle </Text>
                        </View>
                    </CardSection>

                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Burun Yaralanması</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.smallTitle}>Sebepleri</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Basınç </Text>
                            <Text>-	Sıcaklık  </Text>
                            <Text>-	Cisim Batması </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Yaralının başı öne doğru eğilir</Text>
                            <Text>-	Burun kemiği bitişinde burun kanatlarından 5 dakika süreyle sıkılır </Text>
                            <Text>-	Kan akışı sağlanır.  </Text>
                            <Text>-	Gerekirse soğuk uygulama yapılabilir (bezle birlikte)</Text>
                        </View>
                    </CardSection>
                </Card>


                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Kulak Yaralanması</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.smallTitle}>Sebepleri</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Darbe </Text>
                            <Text>-	Beyinde Hasar  </Text>
                            <Text>-	Hastalık </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Kanayan kulağın üzerine bastırmadan temiz bir kapatıp hastayı kanayan tarafa doğru yatır, kanın akmasını sağla. </Text>
                        </View>
                    </CardSection>
                </Card>


                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Omurga Yaralanması</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.smallTitle}>Belirtiler</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Sırtta ağrı </Text>
                            <Text>-	Hareket zorluğu </Text>
                            <Text>-	Hissizlik </Text>
                            <Text>-	Omurgada şekil bozukluğu </Text>
                            <Text>-	İdrar kaçırma durumu </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>
                    
                        <View style={styles.smallContainer}>
                            <Text>-	Kaza mekanizması kontrol edilir, çevre güvenliği alınır. </Text>
                            <Text>-	İkincil değerlendirme (ellerini sıkamıyor, ayaklarını çekemiyorsa şüphelen)</Text>
                            <Text>-	Acil durumlarda arabadan çıkartılması gerekiyorsa rentek manevrası ile) </Text>
                            <Text>-	Mümkün olduğunca hareket ettirme, varsa boyunluk tak </Text>
                            <Text>-	Hasta / yaralıyı yalnız bırakma</Text>
                            <Text>-	Vücut ısısını dengede tutmaya çalış ve telkin et </Text>
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

