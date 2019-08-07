import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Other from './Other';

class Details extends React.Component {
    static navigationOptions = {
        title: 'Details',
        headerStyle: {
            backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title='Go Other'
                    onPress={() => this.props.navigation.navigate('Other')}
                />
                <Button
                    color='dimgray'
                    title='Go Back'
                    onPress={() => this.props.navigation.goBack(null)}
                />
            </View>
        );
    }
}

export default StackNavigator({
    Details: {
        screen: Details
    },
    Other: {
        screen: Other
    }
}, {
        headerMode: 'none'
    });