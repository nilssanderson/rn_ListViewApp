
import React from 'react';
import { View } from 'react-native';
import styles from './Styles/CardSectionStyles';


const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      { props.children }
    </View>
  );
};


export default CardSection;
