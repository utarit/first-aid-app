import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const Hmbr = (props) => {

    return(
            <TouchableOpacity onPress={props.onPress}>
                <Image source={require("../../assets/hmbr.png")} style={{height: 24, width: 24, marginLeft: 15}}/> 
            </TouchableOpacity>
    )
}

export {Hmbr}