import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Other extends React.Component {
    static navigationOptions = {
        title: 'Other',
        headerStyle: {
            backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Other Screen</Text>
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
    Other: {
        screen: Other,
    },
}, {
        headerMode: 'none'
    });