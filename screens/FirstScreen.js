import React from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import logo from '../components/logo.png';
import CredentialsScreen from './CredentialsScreen';
import styles from '../config/styles.js';


class FirstScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#ffff33',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffff33' }}>
                <Text>Primeira tela - carregamento</Text>

                <Image
                    style={styles.logoBig}
                    source={require('../components/logo.png')}
                //source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                />

                <ActivityIndicator style={styles.loading}
                    size='large'
                    color=' #ffffff'

                />

                
                <Button
                    backgroundColor= 'red'
                    title='Ir para tela de login'
                    color='red'
                    onPress={() => this.props.navigation.navigate('CredentialsScreen')}
                />


                <Button
                    title='Go back'
                    color='dimgray'
                    onPress={() => this.props.navigation.goBack(null)}
                />
            </View>
        );
    }
}

export default StackNavigator({
    FS: {
        screen: FirstScreen,
    },
    CredentialsScreen: {
        screen: CredentialsScreen,
    },

}, {
        headerMode: 'none'
    });
