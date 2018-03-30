import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, buttonColor, flexButton }) => {

  let { buttonStyle, textStyle } = styles;

  let multipleChoiceButtonStyle;
  let multipleChoicetextStyle;
 
  if(flexButton) {
     multipleChoiceButtonStyle = {...buttonStyle, flex: 1, borderColor: buttonColor}
     multipleChoicetextStyle  = {...textStyle, color: buttonColor}
  } else {
    multipleChoiceButtonStyle = {...buttonStyle, borderColor: buttonColor}
     multipleChoicetextStyle  = {...textStyle, color: buttonColor}
  }

  return (
    <TouchableOpacity onPress={onPress} style={ multipleChoiceButtonStyle }>
      <Text style={ multipleChoicetextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
