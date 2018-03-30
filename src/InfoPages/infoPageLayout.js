import React from 'react'
import {Text, View, Image, ScrollView } from 'react-native'
import {Card, CardSection} from '../common'
import infoData from './infoPages.json'


class InfoLayout extends React.Component {

    constructor(props) {
        super(props)
        this.state = infoData[this.props.navigation.state.params.name]
        
    }

    static navigationOptions = {
        title: "Bilgilendirme Sayfası"
    }

    contentRender(textArray) {

        return textArray.map((text, index) => <Text key={index}> {text} </Text>)
    }

    imageRender(imageUrl){
        const images = {
            yanik1: require("../../assets/infoPics/yanik1.png"),
            yanik2: require("../../assets/infoPics/yanik2.png"),
            yanik3: require("../../assets/infoPics/yanik3.png")
        }

        if(imageUrl) {
            return (
                <CardSection>
                        <Image style={styles.imageStyle} source={images[imageUrl]} />
                </CardSection>
            )
        }
    }

    smallTitleRender(title){
        if(title) {
            return <Text style={styles.smallTitle}>{title}</Text>
        }
    }

    renderCardSection(sectionArray) {
        return sectionArray.map((section, index) => {
            return(
                <CardSection key={index}>
                {this.smallTitleRender(section.small_title)}
                <View style={styles.smallContainer}>
                    {this.contentRender(section.text)}
                </View>
                </CardSection>
            )
        })
    }

    cardsRender(){

        return this.state.Cards.map((card, index) => {
            return(
                <Card key={index}>
                    <CardSection>
                        <Text style={styles.bigTitle}>{card.title}</Text>
                    </CardSection>
                        {this.imageRender(card.image)}
                        {this.renderCardSection(card.content)}
                </Card>
            )
        })
    }

    render() {

        return(
            <ScrollView>
                <Card>
                    <CardSection>
                        <Text style={styles.bigTitle}>{this.state.title}</Text>
                    </CardSection>
                </Card>
                {this.cardsRender()}
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
    },
    imageStyle: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    }
}

export default InfoLayout