import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class Profile extends Component {
    static navigationOptions = {
        title: 'Meu Perfil'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>I'm the Profile component</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});