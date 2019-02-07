import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, } from 'react-native';
import { SearchBar } from 'react-native-elements';

const width = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containImages}>
          <Image source={require('../assets/images/logo_name.png')} style={styles.logo} />
        </View>
        <ScrollView>
          <SearchBar lightTheme
                     round
                     placeholder="Recherche de recette"
                     onChangeText={this.updateSearch}
                     value={search}
          />
          <View style={{backgroundColor: '#B2906D'}}>
            <Image source={require('../assets/images/recettes.jpg')} style={styles.imageRecettes} />
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/ratatouille.png')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text}> Ratatouille </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/chili_con_carne.png')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text}> Chili Con Carne </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/gaspacho.jpg')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text}> Gaspacho </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/ratatouille.png')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text}> Ratatouille </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/chili_con_carne.png')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text}> Chili Con Carne </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/gaspacho.jpg')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text}> Gaspacho </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageRecettes: {
    width: width,
    resizeMode: 'stretch',
  },
  logo: {
    marginTop: 30,
    height: 75,
    width: 194,
  },
  containImages: {
    backgroundColor: '#CDCDCD',
    height: 115,
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
  },
  plats: {
    flex: 1,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 20,
    alignItems: 'center',
    height: 100,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: '#8C6238',
  },
  imgPlat: {
    width: 100,
    resizeMode: 'contain',
  },
});
