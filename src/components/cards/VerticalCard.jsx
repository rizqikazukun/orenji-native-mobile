/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function VerticalCard({title, image, onPress}) {
  const styles = StyleSheet.create({
    recipeCard: {
      alignItems: 'center',

      width: 100,
      margin: 5,

      backgroundColor: 'white',
      borderRadius: 10,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
  });

  let uri = image
    ? image
    : 'https://res.cloudinary.com/dwptyupfa/image/upload/v1702645947/default/qucddjwnmfccdo1wo0jn.jpg';

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.recipeCard}>
        <Image
          width={90}
          height={100}
          style={{borderRadius: 10}}
          source={{uri}}
        />
        <View style={{padding: 4}}>
          <Text
            style={{color: 'black', fontSize: 12, fontFamily: 'Lato-Regular'}}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
