import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMyRecipe} from '../storages/actions/recipe';

const MyRecipeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const my_recipe = useSelector(state => state.my_recipe);
  const token = useSelector(state => state.auth.data.data.token);
  // console.log(my_recipe.data);

  useEffect(() => {
    dispatch(getMyRecipe(token));
  }, [dispatch, token]);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#EFC81A',
            marginBottom: 20,
          }}>
          My Recipe
        </Text>
      </View>
      <FlatList
        style={{flex: 1}}
        data={my_recipe.data}
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

export default MyRecipeScreen;
