import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../storages/actions/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const postData = text => {
    text.preventDefault();
    let data = {email, password};
    dispatch(login(data));
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Image
        source={require('../images/maincourse.jpg')}
        style={{flex: 2, width: 420}}
      />
      <View
        style={{
          backgroundColor: '#f2f2f2',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -50,
          marginBottom: 50,
          flex: 3,
        }}>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: '#EFC81A',
              marginBottom: 20,
            }}>
            Welcome!
          </Text>
          <Text style={{fontSize: 17}}>Log in with an existing account</Text>
        </View>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          style={{
            backgroundColor: '#f4f4f4',
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 5,
            elevation: 3,
            paddingHorizontal: 20,
          }}
        />
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          placeholder="Password"
          style={{
            backgroundColor: '#f4f4f4',
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 5,
            elevation: 3,
            paddingHorizontal: 20,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#EEC302',
            marginHorizontal: 20,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
            borderRadius: 5,
          }}
          onPress={postData}>
          <Text style={{color: '#ffffff'}}>
            {auth.isLoading ? 'Please wait...' : 'Login'}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 15}}>Don't have account yet?</Text>
          <Text
            style={{color: '#EEC302', marginLeft: 5, fontSize: 15}}
            onPress={() => navigation.navigate('RegisterScreen')}>
            sign up here!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
