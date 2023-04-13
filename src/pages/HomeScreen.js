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
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000000'}}>
            New Recipe
          </Text>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}
            onPress={() => navigation.navigate('SearchRecipeScreen')}>
            <Text>See all recipe</Text>
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
                    marginTop: 150,
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
