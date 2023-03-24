import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { ImageSelector, LocationSelector } from '../../components';
import { savePlace,loadPlaces } from '../../store/place.slice';
import { THEME } from '../../constants/theme';


const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState(null);

  const onHandleSubmit = () => {
    dispatch(savePlace(title, image, location));
    //navigation.navigate("Home");
    alert('Funcionalidad en desarrollo - Envía Mail');
  };


  const onHandleImageSelect = (imageUrl) => {
    setImage(imageUrl);
  };
  const onHandleLocationSelect = (location) => {
    setLocation(location);
  };

  const onHandleChange = (text) => {
    setTitle(text);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>¿Necesitás ayuda?</Text>
        <Text style={styles.title}>Consultá lo que necesites</Text>
        <TextInput
          style={styles.input}
          onChangeText={onHandleChange}
          placeholder="Duda / Consulta"
          value={title}
        />
        <ImageSelector onImage={onHandleImageSelect} />
        <LocationSelector onLocation={onHandleLocationSelect} />

        <Button
          disabled={title.length === 0}
          color={THEME.colors.primary}
          title="Guardar"
          onPress={onHandleSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
