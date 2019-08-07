import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import logo from '../components/logo.png';
import styles from '../config/styles.js';
import OptionScreen from './OptionScreen';

class CredentialsScreen extends React.Component {
    static navigationOptions = {
        title: 'Tela de Login',
        headerStyle: {
            backgroundColor: '#ffff33',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };


    state = {
        user: '',
        passwd: ''
    }


    handleUser = (value) => {
        this.setState({ user: value })
    }

    handlePass = (value) => {
        this.setState({ passwd: value })
    }

    optScreen = (user, pass) => {
        this.props.navigation.navigate('OptionScreen', {
            'user': user,
            'password': pass
        });
    }


    render() {
        return (
            <View style={{ flex: 21, backgroundColor: '#ffff33' }}>

                <View style={styles.logoScreens}>
                    <Image
                        source={require('../components/logo.png')}
                    />
                </View>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Usuário"
                    placeholderTextColor='#fff'
                    autoCapitalize="none"
                    onChangeText={this.handleUser} />

                <TextInput style={styles.input}
                    secureTextEntry={true}
                    underlineColorAndroid='#bfbfbf'
                    placeholder="Senha"
                    placeholderTextColor='#fffff'
                    autoCapitalize="none"
                    onChangeText={this.handlePass} />


                <View style={{
                    marginLeft: 90,
                    marginRight: 90,
                    height: 40,
                    marginBottom: 50,
                }}>
                    <Button 
                        title='Login'
                        color='#ff3333'
                        onPress={ 
                            () => this.optScreen(this.state.user, this.state.passwd)}
                    />
                </View>





                <View style={{ flex: 3 }}>
                    <Button
                        title='Go back'
                        color='dimgray'
                        onPress={() => this.props.navigation.goBack(null)}
                    />
                </View>
            </View>
        );
    }
}

export default StackNavigator({
    CredentialsScreen: {
        screen: CredentialsScreen,
    },
    OptionScreen: {
        screen: OptionScreen,
    }
}, {
        headerMode: 'none'
    });