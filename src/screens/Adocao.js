import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: null,
    headerLeft: 
      <View style={{margin: 10, flex:1, flexDirection: 'row', justifyContent: 'center'}}>
        <Icon style={{marginTop: 5}}name={'chevron-left'} size={20}  onPress={ () => { navigation.goBack() }} />
        <Text style={{fontSize: 20, marginLeft: 10, /*fontWeight: 'bold'*/}}>Home</Text>
      </View>
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 2, justifyContent: 'flex-start', marginTop: 20}}>
          <Text style={styles.title}>Adotar</Text>
        </View>
        <View style={styles.list} >
          <Text>PUTA QUE PARIU BICHO</Text>
        </View>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    color: '#2fb7a7',
    fontSize: 54,
    fontFamily: 'GROBOLD',
  },
  button: {
    backgroundColor: '#2fb7a7',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImage: {
    flex: 3,
    //padding: 30,
    //marginBottom: 50
  },
  list: {
    flex: 2,
    backgroundColor: 'blue'
  },
});