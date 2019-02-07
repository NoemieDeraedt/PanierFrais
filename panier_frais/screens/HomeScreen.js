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
          <Image source={require('../assets/images/icon_menu.png')} style={styles.menu} />
          <Image source={require('../assets/images/logo_name.png')} style={styles.logo} />
          <Image source={require('../assets/images/panier.png')} style={styles.panier} />
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
                <Text style={styles.text_title}> Ratatouille </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/chili_con_carne.png')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text_title}> Chili Con Carne </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/gaspacho.jpg')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text_title}> Gaspacho </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/ratatouille.png')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text_title}> Ratatouille </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/chili_con_carne.png')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text_title}> Chili Con Carne </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/gaspacho.jpg')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text_title}> Gaspacho </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/ratatouille.png')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text_title}> Ratatouille </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/chili_con_carne.png')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text_title}> Chili Con Carne </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/gaspacho.jpg')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text_title}> Gaspacho </Text>
                <Text style={styles.text}> Temps de préparation: 15min </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plats}>
              <Image source={require('../assets/images/plats/ratatouille.png')} style={styles.imgPlat} />
              <View>
                <Text style={styles.text_title}> Ratatouille </Text>
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
  panier: {
    width: 40,
    height: 40,
    marginTop: 40,
    marginLeft: 30,
  },
  imageRecettes: {
    width: width,
    height: 50,
    resizeMode: 'stretch',
  },
  logo: {
    marginTop: 40,
    height: 75,
    width: 194,
  },
  containImages: {
    backgroundColor: '#CDCDCD',
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  menu: {
    width: 30,
    height: 30,
    marginTop: 40,
    marginRight: 30,
  },
  text_title: {
    color: '#FFF',
    fontSize: 20,
  },
  text: {
    color: '#A69587',
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
