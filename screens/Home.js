import React from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Details from './Details';
import List from './List';
import Form from './Form';
import FirstScreen from './FirstScreen';

class Home extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        visible: true,
        headerTitle: () => (<View style={styles.headerWrapper}>

            <Text
                adjustsFontSizeToFit
                style={styles.headerText}>[ My App ]</Text>
        </View>),


        headerStyle: {
            backgroundColor: '#f4511e',
            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center'
        },
        headerRight: (
            <Button
                onPress={() => navigation.navigate('List')}
                color='gray'
                title='List >'
            />
        ),
        headerLeft: (
            <Button
                onPress={() => alert('This is a left button!')}
                color='gray'
                title='< Left'
            />
        ),
    });

    render() {
        return (
            <View style={{
                flex: 1, justifyContent: 'space-between',
                flexDirection: 'column'
            }}>
                <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }} >
                    <Text>Home Screen</Text>
                </View>
                <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: 150, height: 150 }} source={require('../static/images/react.png')} />
                </View>
                <View style={{ flex: 4 }}>
                    <Button
                        color='green'
                        title='Go to Details'
                        onPress={() => this.props.navigation.navigate('Details')}
                    />
                    <Button
                        title='Go to List'
                        onPress={() => this.props.navigation.navigate('List')}
                    />
                    <Button
                        title='Go to Form'
                        onPress={() => this.props.navigation.navigate('Form')}
                    />

                    
                    <Button
                        title='Go to First Screen'
                        onPress={() => this.props.navigation.navigate('FS')}
                    />
                </View>



            </View>
        );
    }
}

export default StackNavigator({
    Home: {
        screen: Home
    },
    Details: {
        screen: Details
    },
    List: {
        screen: List,
    },
    Form: {
        screen: Form,
    },

    
    FS: {
        screen: FirstScreen,
    },
},
    {
        initialRouteName: 'Home',
        mode: 'modal',
        headerMode: 'none',
    }
);

const styles = StyleSheet.create({
    headerWrapper: {
        flex: 1
    },
    headerText: {
        textAlign: 'center',
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
    }
})