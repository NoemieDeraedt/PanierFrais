import React from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";

export default class InfosScreen extends React.Component {
  static navigationOptions = {
    title: 'Infos',
  };

  render() {
    return(
        <View>
          <ScrollView contentContainerStyle={styles.contentContainer}>
              <Text>Page d'infos</Text>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 30,
  },
});