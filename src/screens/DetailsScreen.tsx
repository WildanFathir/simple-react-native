import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const DetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Detail Information</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('../assets/images/detail.jpeg')}
          style={styles.image}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Modern Detail UI</Text>
          <Text style={styles.subtitle}>Elegant and Functional Design</Text>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            ante id justo tristique vestibulum. Integer vel ultrices elit. Nam
            id nisl a augue pellentesque auctor non in nunc.
          </Text>

          <Text style={styles.description}>
            Sed auctor libero eu nibh egestas, et scelerisque libero aliquam.
            Pellentesque suscipit orci vel mauris volutpat, ac dignissim ipsum
            mollis.
          </Text>

          <View style={styles.highlightBox}>
            <Text style={styles.highlightText}>
              Featured Insight: This is a key point in the details.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#4CAF50',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  backButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  backText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  moreButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  moreText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginBottom: 15,
  },
  highlightBox: {
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  highlightText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
