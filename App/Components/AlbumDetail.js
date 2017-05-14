
import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import styles from './Styles/AlbumDetailStyles';


const AlbumDetail = ({ album }) => {
  const {
    title, artist, thumbnail_image, image, url
  } = album;

  const {
    thumbnailStyle, textContainerStyle, textStyle, thumbnailContainerStyle, artworkStyle
  } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={textContainerStyle}>
          <Text style={textStyle}>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>
    
      <CardSection>
          <Image
            style={artworkStyle}
            source={{ uri: image }}
          />
      </CardSection>
    
      <CardSection>
          <Button
            onPress={() => Linking.openURL(url)}
          >
            Buy Now
          </Button>
      </CardSection>

    </Card>
  );
};


export default AlbumDetail;
