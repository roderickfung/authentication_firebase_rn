// Import Libraries

import React from 'react';
import { Text, View } from 'react-native';

// Make a Component (this is a child component)

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={ viewStyle }>
      <Text style={ textStyle }>{ props.headerText }</Text>
    </View>
  );
};

// styling
const styles = {
  viewStyle: {
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset:{ width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333'
  }
};

// Make the component avaiable to other parts of the app
// use export statements

export { Header };
