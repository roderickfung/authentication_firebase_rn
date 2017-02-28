import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { btnStyle, btnText } = styles;

  return (
    <TouchableOpacity onPress={ onPress } style={ btnStyle }>
      <Text style={ btnText }>
        { children }
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  btnStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5
  },
  btnText: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Button };
