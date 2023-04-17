import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewRecipe} from '../storages/actions/recipe';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const new_recipe = useSelector(state => state.new_recipe);
  const auth = useSelector(state => state.auth);

  const category = [
    {title: 'Appetizer', image: require('../images/appetizer.jpg')},
    {title: 'Main Course', image: require('../images/maincourse.jpg')},
    {title: 'Dessert', image: require('../images/dessert.jpg')},
  ];

  useEffect(() => {
    dispatch(getNewRecipe());
  }, [dispatch]);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{marginTop: 40, marginHorizontal: 20}}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#EEC302'}}>
            Hello,
          </Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#2E266F'}}>
            {auth.data.data.fullname}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000000'}}>
            New Recipe
          </Text>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}
            onPress={() => navigation.navigate('SearchRecipeScreen')}>
            <Text style={{fontSize: 15, color: '#2E266F'}}>See all recipe</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={new_recipe.data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailRecipeScreen', {id: `${item.id}`});
              }}
              style={{
                marginRight: 20,
                marginBottom: 20,
                elevation: 3,
                width: 300,
                height: 200,
              }}>
              <ImageBackground
                source={{uri: item.image}}
                style={{width: '100%', height: '100%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginTop: 120,
                    marginLeft: 5,
                  }}>
                  {item.title}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
        <View style={{marginBottom: 10}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000000'}}>
            Category
          </Text>
        </View>
        <FlatList
          data={category}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginRight: 20,
                marginBottom: 20,
                elevation: 3,
                width: 300,
                height: 200,
              }}>
              <ImageBackground
                source={item.image}
                style={{width: '100%', height: '100%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>
                  {item.title}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
