import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Post from './components/Post';

export default class Posts extends Component {
    static navigationOptions = {
        'title': 'Posts'
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{ navigate('Profile') }} 
                    style={styles.profileButton}
                >
                    <Text style={styles.profileButtonText}>Meu Perfil</Text>
                </TouchableOpacity>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingHorizontal:20,
        backgroundColor:'#fff',
        padding:10
    },
    profileButton:{
        flex:1,
        backgroundColor: '#069',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    profileButtonText:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight:'bold'
    }
});