import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSearchRecipe} from '../storages/actions/recipe';

const SearchRecipeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const search_recipe = useSelector(state => state.search_recipe);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getSearchRecipe(search));
  }, [dispatch, search]);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{marginVertical: 40, marginHorizontal: 10}}>
        <TextInput
          value={search}
          onChangeText={text => setSearch(text)}
          placeholder="Search"
          style={{
            backgroundColor: '#FFFFFF',
            paddingLeft: 10,
            elevation: 3,
            borderRadius: 10,
          }}
        />
      </View>
      <FlatList
        style={{flex: 1}}
        data={search_recipe.data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailRecipeScreen', {id: `${item.id}`});
            }}
            style={{
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              marginHorizontal: 10,
              marginBottom: 10,
              borderRadius: 10,
              paddingHorizontal: 5,
              paddingVertical: 5,
              elevation: 3,
            }}>
            <Image
              source={{uri: item.image}}
              style={{width: 100, height: 100, borderRadius: 5}}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{fontSize: 20}}>{item.title}</Text>
              <Text>{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchRecipeScreen;
