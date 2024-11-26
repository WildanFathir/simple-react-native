import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface CardInsightProps {
  title: string;
  description: string;
}

const CardInsight: React.FC<CardInsightProps> = ({title, description}) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={require('../assets/images/content.jpeg')}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default CardInsight;
