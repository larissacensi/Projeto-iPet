import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation';

class FormDetail extends Component {
    static navigationOptions = {
        title: 'Form Details',
        headerStyle: {
            backgroundColor: 'yellowgreen',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };


    back = () => {
        this.props.navigation.goBack(null);
    }

    render() {
        const { params } = this.props.navigation.state;
        const email = params ? params.email : null;
        const password = params ? params.password : null;
        return (
            <View style={styles.container}>
                <Text style={styles.input}>Valores recebidos por parâmetro.</Text>
                <Text style={styles.input}>E-mail: {JSON.stringify(email)}</Text>
                <Text style={styles.input}>Password: {JSON.stringify(password)}</Text>

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
    FormDetail: {
        screen: FormDetail,
    },
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
        fontSize: 20
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
