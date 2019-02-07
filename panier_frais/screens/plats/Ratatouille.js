import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';

export default class Ratatouille extends React.Component {
    static navigationOptions = {
        title: "Ratatouille",
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Image source={require('../../assets/images/plats/ratatouille.png')} style={styles.imgPlat} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});