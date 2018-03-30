import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const AYBButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          {children}
        </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#f42e0c',
    marginTop: 50,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
    
  }
};

export { AYBButton };
