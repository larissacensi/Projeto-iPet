import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation';
import FormDetail from './FormDetail';

class Form extends Component {
    static navigationOptions = {
        title: 'Simple Form (componente nativo)',
        headerStyle: {
            backgroundColor: 'palevioletred',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    state = {
        email: '',
        password: ''
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }

    back = () => {
        this.props.navigation.goBack(null);
    }

    detail = (email, pass) => {
        this.props.navigation.navigate('FormDetail', {
            'email': email,
            'password': pass
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="blue"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="blue"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.backButton, { backgroundColor: 'yellowgreen' }]}
                    onPress={
                        () => this.detail(this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Go Detail </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={
                        () => this.back()
                    }>
                    <Text style={styles.submitButtonText}> Go Back </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
export default StackNavigator({
    Form: {
        screen: Form,
    },
    FormDetail: {
        screen: FormDetail
    }
},
    {
        headerMode: 'none'
    });

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'blue',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: 'green',
        alignItems: 'center',
        padding: 10,
        margin: 15,
        height: 40,
    },
    backButton: {
        backgroundColor: 'dimgray',
        alignItems: 'center',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})
