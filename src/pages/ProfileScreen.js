import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../storages/actions/auth';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function ProfileScreen() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const createTwoButtonAlert = () =>
    Alert.alert('Alert', 'Logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(logout())},
    ]);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EEC302',
        }}>
        <Image
          source={require('../images/profile.jpg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
        <Text style={{color: '#000000', marginTop: 20, fontSize: 20}}>
          {auth.data.data?.fullname ?? 'user'}
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: '#f2f2f2',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -25,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: 25,
            marginTop: 25,
            marginBottom: 10,
          }}>
          <Icon name="create-outline" size={20} color="#000000" />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#000000', marginLeft: 10, fontSize: 15}}>
              Edit Profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: 25,
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Icon name="bookmark-outline" size={20} color="#000000" />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#000000', marginLeft: 10, fontSize: 15}}>
              Saved
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: 25,
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Icon name="heart-outline" size={20} color="#000000" />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#000000', marginLeft: 10, fontSize: 15}}>
              Liked
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={createTwoButtonAlert}
          style={{
            flexDirection: 'row',
            marginHorizontal: 25,
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Icon name="log-out-outline" size={20} color="red" />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'red', marginLeft: 10, fontSize: 15}}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileScreen;
