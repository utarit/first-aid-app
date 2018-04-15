import React from 'react'
import {View,Text, Image, TouchableOpacity} from 'react-native'
import { Card, CardSection, Button } from '../common'

import aybData from './aybData.json';

const HomeButton = (props) => {
    return(
            <TouchableOpacity onPress={props.onPress}>
                <Image source={require("../../assets/home.png")} style={{height: 24, width: 24, marginRight: 15}}/> 
            </TouchableOpacity>
    )
}


class AYB extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "ACİL DURUM",
            headerRight: <HomeButton onPress={()=> navigation.navigate('Home')}> Anasayfa </HomeButton>
        }
        
    }

    constructor(props) {
        super(props)

        this.state={
            gifs: {
                "gif1": require("./gifs/guvenlik.gif"),
                "gif2": require("./gifs/bilinc.gif"),
                "gif3": require("./gifs/sikan_giysi.gif"),
                "gif4": require("./gifs/agiz.gif"),
                "gif5": require("./gifs/nefes_kontrol.gif"),
                "gif6": require("./gifs/basi_noktasi.gif"),
                "gif7": require("./gifs/5cm_asagi.gif"),
                "gif8": require("./gifs/nefes.gif"),
                "gif9": require("./gifs/cpr.gif"),
                "gif10": require("./gifs/sample.gif"),
                "gif11": require("./gifs/kafa.gif"),
                "gif12": require("./gifs/gogus.gif"),
                "gif13": require("./gifs/omurga.gif"),
                "gif14": require("./gifs/karin.gif"),
                "gif15": require("./gifs/bacak.gif"),
                "gif16": require("./gifs/kol.gif"),
                "gif17": require("./gifs/it_cek.gif"),
                "gif18": require("./gifs/ambulans.gif")
            }
        }
    }

    componentDidMount(){
        this.setState({problems: this.props.navigation.state.params.problems })
    }


    renderButton() {
        const {navigate} = this.props.navigation
        const {params} = this.props.navigation.state
        const content = aybData["ayb" + params.id]


        if(content.multiplechoice.isMultiple) {
            return (
                <View style={styles.yesNoButtonContainer}>
                    <Button buttonColor='red' flexButton="on" onPress={()=> {
                        this.setState({loading: true})
                        return navigate('AYB', {id: content.multiplechoice.nextNo, problems: this.state.problems ? this.state.problems : []})}}> HAYIR </Button>
                    <Button buttonColor='green' flexButton="on" onPress={()=> {
                        this.setState({loading: true})
                        return navigate('AYB', {id: content.multiplechoice.nextYes, problems: this.state.problems ? this.state.problems : []})}}> EVET </Button>
                </View>
            )
        } else if (content.next === 0) {
            return (
                <View >
                    <Button buttonColor='black' onPress={()=> navigate('Home')}>Ana Sayfa</Button>
                </View>
                )
        } else if (content.no >= 11 && content.no <= 17) {
            return(
                <View style={styles.yesNoButtonContainer}>
                    <Button buttonColor='red' flexButton="on" onPress={()=> {
                        const array = this.state.problems
                        array.push(content.heading)
                        this.setState({loading: true})
                        return navigate('AYB', {id: content.next, problems: array})
                    } }> SORUN VAR </Button>
                    <Button buttonColor='green' flexButton="on" onPress={()=> {
                        this.setState({loading: true})
                        return navigate('AYB', {id: content.next, problems: this.state.problems ? this.state.problems : []});
                    } }> SORUN YOK </Button>
                </View>
            )
            
        } else {
            return (
                <View>
                    <Button buttonColor='#007aff' onPress={()=> {
                        this.setState({loading: true})
                        return navigate('AYB', {id: content.next, problems: this.state.problems ? this.state.problems : []})}}>
                        Devam
                    </Button>
                </View>
            )
        }

        
    }

    problemsListRender(){
        const {params} = this.props.navigation.state;
        const problemsArray = params.problems;
        if(problemsArray == []) {
            return <Text style={{color: '#ff2807', fontSize: 13}} key={index}> Hiç sorun görünmüyor. </Text>
        }
        return problemsArray.map((problem, index) => <Text style={{color: '#ff2807', fontSize: 13}} key={index}> #{problem} </Text>)
    }

    textRender(){
        const {params} = this.props.navigation.state
        const content = aybData["ayb" + params.id]

        if(content.no == 18) {

            return(
                <Card>
                    <View style={styles.lastPageTextStyle}>
                        <View style={{flex: 1, padding: 5}}>
                            {this.problemsListRender()}
                        </View>
                        <View style={{flex: 2, padding: 5, borderLeftWidth: 1, borderLeftColor: 'gray'}}>
                            <Text>
                            {content.description}
                            </Text>
                        </View>
                    </View>
                </Card>
            )

        } else {
            return (
                <Card>
                    <View style={styles.textBoxStyle}>
                        <Text style={styles.textStyle}>
                        {content.description}
                        </Text>
                    </View>
                </Card>
            )
        }
    }

    render() {

        const {params} = this.props.navigation.state
        const content = aybData["ayb" + params.id]
        const imageLink = './' + content.image

        return (
            <View style={styles.pageContainer}>
                <Card>
                    <Image style={{height: 240, width: '100%'}} source={this.state.gifs["gif" + params.id]} />
                </Card>

                {this.textRender()}
                
                {this.renderButton()}
                
            </View>
        )
    }
    
}

const styles = {
    textBoxStyle:{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
    },
    textStyle: {
        fontSize: 16
    },
    yesNoButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    pageContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    lastPageTextStyle: {
        display: 'flex',
        flexDirection: 'row'
    }
}



export default AYB