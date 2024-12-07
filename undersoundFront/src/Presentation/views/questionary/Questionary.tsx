import React, { useState } from 'react'
import { Dimensions, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import styles from './Styles';
import { MyColors } from '../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { RoundedButton } from '../../components/RoundedButton';

interface Props extends StackScreenProps<RootStackParamList, 'QuestionaryScreen'>{};


export const QuestionaryScreen = ({navigation, route}: Props) => {

  const genres = [
    'Rock', 'Reggaeton', 'Pop', 'Reggae', 'Classica',
    'Rap', 'Popular', 'Metal', 'Electronica',
  ];

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const MAX_SELECTION = 5;

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => {
      if (prev.includes(genre)) {
        // Si el género ya está seleccionado, lo eliminamos
        return prev.filter(item => item !== genre);
      } else {
        // Si no está seleccionado, lo agregamos
        if (prev.length < MAX_SELECTION) {
          return [...prev, genre];
        } else {
          // Si ya hay 5 seleccionados, removemos el primero y agregamos el nuevo
          return [...prev.slice(1), genre];
        }
      }
    });
  };
  
  const buttonWidth = Dimensions.get('window').width / 3 - 18;

  return (    
    <View style = {styles.container}>
      <Text style = {styles.firstText}>¿Que te gusta escuchar?</Text>

      <View style={styles.genresContainer}>
        {genres.map((genre, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.genreButton,
              { width: buttonWidth }, // Asigna el mismo ancho a todos los botones
              selectedGenres.includes(genre) && styles.genreButtonSelected,
            ]}
            onPress={() => toggleGenre(genre)}
          >
            <Text
              style={[
                styles.genreText,
                selectedGenres.includes(genre) && styles.genreTextSelected,
              ]}
            >
              {genre}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.counter}>
        {selectedGenres.length}/{MAX_SELECTION}
      </Text>
      <TouchableOpacity
        style={[
          styles.continueButton,
          selectedGenres.length === 0 && styles.continueButtonDisabled,
        ]}
        disabled={selectedGenres.length === 0}
      >
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  )
}
