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
import {getMyRecipe, deleteRecipe} from '../storages/actions/recipe';
import Icon from 'react-native-vector-icons/Ionicons';

const MyRecipeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const my_recipe = useSelector(state => state.my_recipe);
  const token = useSelector(state => state.auth.data.data.token);
  const delete_recipe = useSelector(state => state.delete_recipe);

  useEffect(() => {
    const reload = navigation.addListener('focus', () => {
      dispatch(getMyRecipe(token));
    });
    return reload;
  }, [dispatch, token, navigation]);

  useEffect(() => {
    dispatch(getMyRecipe(token));
  }, [dispatch, token, delete_recipe.data]);

  const deleteMyRecipe = id => {
    dispatch(deleteRecipe(id, token));
  };

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
          <View
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
            <View>
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 20, color: '#000000'}}>
                  {item.title}
                </Text>
                <Text>{item.category}</Text>
              </View>
              <View
                style={{flexDirection: 'row', marginLeft: 180, marginTop: 20}}>
                <View style={{paddingHorizontal: 10}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('UpdateScreen', {id: `${item.id}`});
                    }}>
                    <Icon name="create" size={25} color="#ADD8E6" />
                  </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal: 10}}>
                  <TouchableOpacity onPress={() => deleteMyRecipe(item.id)}>
                    <Icon name="trash" size={25} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MyRecipeScreen;
