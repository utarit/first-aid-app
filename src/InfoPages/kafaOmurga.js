import React from 'react'
import {Text, View, Image, ScrollView } from 'react-native'
import {Card, CardSection} from '../common'


class KafaOmurga extends React.Component {

    static navigationOptions = {
        title: 'Kafatası & Omurga Yaralanmaları'
    }

    render() {

        return(
            <ScrollView>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>KAFATASI ve OMURGA YARALANMALARI </Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.smallTitle}> Sebepleri </Text>

                        <View style={styles.smallContainer}>
                            <Text> -	Otomobil ya da motosiklet kazaları </Text>
                            <Text> -	Yüksek bir yerden düşme </Text>
                            <Text> -	Spor ve iş kazaları </Text>
                            <Text> -	Baş ve gövde yaralanmaları </Text>
                            <Text> -	Yıkıntı altında kalma </Text>
                        </View>
                    </CardSection>

                    <CardSection>

                    <Text style={styles.smallTitle}>Belirtiler</Text>

                    <View style={styles.smallContainer}>
                        <Text>-	Bilinç düzeyinde değişmeler, bulanık hafıza ya da hafıza kaybı </Text>
                        <Text>-	Sarsıntı ve denge kaybı </Text>
                        <Text>-	Başta, boyunda ve sırtta ağrı ya da dış kanama </Text>
                        <Text>-	Elde ve parmaklarda karıncalanma ve his kaybı </Text>
                        <Text>-	Vücudun herhangi bir yerinde tam ya da kısmi hareket kaybı </Text>
                        <Text>-	Baş ya da bel kemiğinde şekil bozukluğu </Text>
                        <Text>-	Burun ve kulaktan beyin omurilik sıvısı veya kan gelmesi </Text>
                        <Text>-	Kulak ve göz çevresinde morluk </Text>
                        <Text>-	Düzensiz nefes, bulanık görüş </Text>
                        <Text>-	Kusma </Text>
                    </View>

                    <Text> Ancak hastada hiçbir belirti yoksa bile </Text>

                    <View style={styles.smallContainer}>
                        <Text> -   Yüz ve köprücük kemiği yaralanmalarında  </Text>
                        <Text> -	Tüm düşme vakalarında </Text>
                        <Text> -	Trafik kazalarında  </Text>
                        <Text> -	Bilinci kapalı tüm hasta / yaralılara kafatası omurga yaralanması var gibi müdahale edilmelidir.   </Text>
                    </View>

                    </CardSection>

                </Card>

                <Card>

                    <CardSection>
                        <Text style={styles.bigTitle}>Beyin Travması</Text>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Belirtiler</Text>

                        <View style={styles.smallContainer}>
                            <Text>-	Göz altı ve kulak arkası morluğu </Text>
                            <Text>-	Ruhsal dalgalanma</Text>
                            <Text>-	Baş dönmesi ve ağrısı </Text>
                            <Text>-	Hafıza problemleri</Text>
                            <Text>-	Konuşmada bozukluk </Text>
                            <Text>-	Denge kaybı </Text>
                            <Text> ** Belirtiler darbeden birkaç saat sonra da gözlemlenebileceği için h/y gözlem altında tutulmalıdır. </Text>
                        </View>

                    </CardSection>

                    <CardSection>
                        <Text style={styles.smallTitle}>Müdahale</Text>

                        <View style={styles.smallContainer}>
                            <Text>-	İkincil değerlendirme (bulduğun pozisyonda yap)</Text>
                            <Text>112</Text>
                            <Text>-	Hareket ettirme! </Text>
                            <Text>-	Kusmaya karşı hazırlıklı ol </Text>
                            <Text>-	Bilinci yerindeyse hasta telkin edilmeli ve uyutulmamalıdır</Text>
                            <Text>-	Bilincin gitmesine karşı önlem olarak h/y bilgileri alınmalıdır. </Text>
                        </View>
                    </CardSection>

                </Card>

                <Card>

                    <CardSection>
                        <Text style={styles.bigTitle}>Kafatası Yaralanması</Text>
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

export {KafaOmurga}

