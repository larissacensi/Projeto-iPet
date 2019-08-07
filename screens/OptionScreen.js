import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../config/styles.js';


class OptionScreen extends React.Component {
    static navigationOptions = {
        title: 'Tela de opções',
        headerStyle: {
            backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };



    render() {
        const { params } = this.props.navigation.state;
        const user = params ? params.user : null;
        const password = params ? params.passwd : null;
        return (
            <View >
                <Text style={styles.content}>Usuário: {params.user}</Text>
                <Text style={styles.content}>Password: {params.password}</Text>

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
    OptionScreen: {
        screen: OptionScreen,
    },
}, {
        headerMode: 'none'
    });