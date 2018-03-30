import React from 'react'
import {Text, View, Image, ScrollView } from 'react-native'
import {Card, CardSection} from '../common'


class Hayvanlar extends React.Component {

    static navigationOptions = {
        title: 'Hayvan Isırmaları ve Sokmaları'
    }

    render() {

        return(
            <ScrollView>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>HAYVAN ISIRMALARI VE SOKMALARI </Text>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Arı Sokmaları</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>-	Deri üzerinde görülüyorsa arının iğnesi çıkartılır.  </Text>
                            <Text>-	Sokulan vücut bölgesi soğuk su ile yıkanır. </Text>
                            <Text>-	Sokulan bölgeye soğuk uygulama yapılır. </Text>
                            <Text>-	Eğer sokma ağızdan olmuş ve solunum güçlüğü söz konusu ise tıbbi yarıma ulaşıncaya kadar hasta ya da yaralının buz emmesi ya da soğuk su içmesi sağlanır. </Text>
                            <Text>-	Alerji durumu olanlarda derhal tıbbi yarım istenir. </Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Akrep Sokmaları</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>-	Hasta ya da yaralı yatar pozisyonda tutulur ve sakinleştirilmeye çalışılır. </Text>
                            <Text>-	Hasta ya da yaralının yaşam bulguları değerlendirilir. </Text>
                            <Text>-	Zorunlu olmadıkça hasta ya da yaralı (özellikle sokma bölgesi) ya da sokulan organ hareket ettirilmez. </Text>
                            <Text>-	Yaraya soğuk uygulama yapılır. </Text>
                            <Text>-	Yara üzerinde hiçbir girişimde (kesme, çizme, kan emme vs.) bulunulmaz. </Text>
                            <Text>-	Sokulan yerin üst tarafına dolaşımı engellemeyecek şekilde elastik bandaj uygulanır. (Kesinlikle turnike uygulanmaz). </Text>
                            <Text>-	Tıbbi yardım istenir (112). </Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Yılan Sokmaları</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>-	Hasta ya da yaralının yaşam bulguları değerlendirilir.  </Text>
                            <Text>-	Hasta/Yaralı sakinleştirilir ve kendisi için rahat bir pozisyonda hareketsiz olması sağlanır. </Text>
                            <Text>-	Yaraya yakın bölgede baskı yapabilecek eşyalar (takı, aksesuar vs.) çıkartılır. </Text>
                            <Text>-	Isırık kol ve bacaklarda ise zehrin vücuda girdiği yerin üzerine bandaj uygulanır. Eğer ısırık yüz ya da boyun bölgesinde ise yaranın yan taraflarına dolaşımı engellemeyecek şekilde bastırılır. </Text>
                            <Text>-	Yara su ve sabunla temizlenir. </Text>
                            <Text>-	Eğer mümkünse sokulan bölgeye soğuk uygulama yapılır. </Text>
                            <Text>-	Hasta ya da yaralı mümkün olduğunca kımıldatılmadan bir sağlık kuruluşuna götürülür. </Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Deniz Canlılarının Sokmaları</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>-	Sokulan bölgede diken ya da iğne varsa çıkartılır. </Text>
                            <Text>-	Sokulan bölgeye sıcak suyla ıslatılmış bez uygulanır. </Text>
                            <Text>-	Etkilenen organın ya da vücut bölgesinin 15 dakika kadar sıcak su dolu bir kaba sokulması ya da bölgeye sıcak su ile ıslatılmış bezle baskı uygulanması ağrının azalmasına yardımcı olacaktır. </Text>
                            <Text>-	Hasta ya da yaralı bir sağlık kuruluşuna götürülür. </Text>
                        </View>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>Kedi ve Köpek Isırmaları</Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.smallContainer}>
                            <Text>-	Hasta ya da yaralının yaşam bulguları değerlendirilir.  </Text>
                            <Text>-	Hafif yaralanmalarda yara 5 dakika süreyle sabun ve soğuk suyla yıkanır. </Text>
                            <Text>-	Yaranın üstü temiz bir bez ile kapatılır. </Text>
                            <Text>-	Ciddi yaralanma ve kanama varsa yaraya temiz bir bezle basınç uygulanarak kanama durdurulur ve derhal tıbbi yardım istenir. </Text>
                            <Text>-	Hasta ya da yaralı tetanoz aşısı için uyarılır.  </Text>
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

export {Hayvanlar}

