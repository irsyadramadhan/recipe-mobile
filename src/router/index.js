import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';
import ProfileScreen from '../pages/ProfileScreen';
import MyRecipeScreen from '../pages/MyRecipeScreen';
import DetailRecipeScreen from '../pages/DetailRecipeScreen';
import SearchRecipeScreen from '../pages/SearchRecipeScreen';
import HomeScreen from '../pages/HomeScreen';

function AddScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Add!</Text>
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
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailRecipeScreen"
          component={DetailRecipeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchRecipeScreen"
          component={SearchRecipeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
