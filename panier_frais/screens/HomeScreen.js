import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Panier Frais",
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.plats}>
            <Image source={require('../assets/images/plats/ratatouille.png')} style={styles.imgPlat} />
            <View>
              <Text> Ratatouille </Text>
              <Text> Pour 2 personnes </Text>
            </View>
          </View>
          <View style={styles.plats}>
            <Image source={require('../assets/images/plats/chili_con_carne.png')} style={styles.imgPlat} />
            <View>
              <Text> Chili Con Carne </Text>
              <Text> Pour 2 personnes </Text>
            </View>
          </View>
          <View style={styles.plats}>
            <Image source={require('../assets/images/plats/gaspacho.jpg')} style={styles.imgPlat} />
            <View>
              <Text> Gaspacho </Text>
              <Text> Pour 2 personnes </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {

  },
  plats: {
    flex: 1,
    alignItems: 'center',
    height: 100,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    flexDirection: 'row',
  },
  imgPlat: {
    width: 140,
    resizeMode: 'contain',
  }
});
