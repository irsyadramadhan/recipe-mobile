import * as React from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../storages/actions/auth';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function AddScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Add!</Text>
    </View>
  );
}

function MyRecipeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My Recipe!</Text>
    </View>
  );
}

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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{auth.data.data?.fullname ?? 'user'}'s Profile</Text>
      <Icon
        name="log-out-outline"
        size={30}
        color={'red'}
        onPress={createTwoButtonAlert}
      />
    </View>
  );
}

function LoginScreen() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{backgroundColor: '#EEC302'}}
        onPress={() => dispatch(login())}>
        <Text>{auth.isLoading ? 'Please wait...' : 'Touch to login'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#EEC302',
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Recipe"
        component={MyRecipeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="menu" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Router() {
  const auth = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.data ? (
          <Stack.Screen
            name="BottomNav"
            component={BottomNav}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
