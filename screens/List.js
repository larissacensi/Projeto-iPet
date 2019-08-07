import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ListItem, Avatar } from 'react-native-elements'

class List extends React.Component {
    static navigationOptions = {
        title: 'List',
        headerStyle: {
            backgroundColor: 'deeppink',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };


    render() {
        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },

        ];

        return (
            <View>
                <View>
                    {
                        list.map((l, i) => (

                            <ListItem
                                key={i}
                                avatar={{uri: l.avatar_url }}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))
                    }

                </View>
                <View>
                    <Button
                        color='dimgray'
                        title='Go back'
                        onPress={() => this.props.navigation.goBack(null)}
                    />
                </View>
            </View>
        );
    }
}

export default StackNavigator({
    List: {
        screen: List,
    },
},
    {
        headerMode: 'none'
    });