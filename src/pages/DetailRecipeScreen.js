import React, {useEffect} from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailRecipe} from '../storages/actions/recipe';

const DetailRecipeScreen = ({route}) => {
  const dispatch = useDispatch();
  const detail_recipe = useSelector(state => state.detail_recipe);
  console.log('check this', detail_recipe.data[0].title);
  const {id} = route.params;

  useEffect(() => {
    dispatch(getDetailRecipe(id));
  }, [dispatch, id]);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{flex: 3}}>
        <ImageBackground
          source={{uri: detail_recipe.data[0].image}}
          style={{flex: 1, width: '100%', height: '100%'}}>
          <View style={{marginHorizontal: 20, marginTop: 280}}>
            <Text style={{fontSize: 35, fontWeight: 'bold', color: '#FFFFFF'}}>
              {detail_recipe.data[0].title}
            </Text>
            <Text style={{color: '#FFFFFF', fontSize: 20}}>
              {detail_recipe.data[0].creator}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          backgroundColor: '#f2f2f2',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -50,
          marginBottom: 50,
          flex: 2,
        }}>
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <Text style={{fontSize: 25}}>Ingredients</Text>
          <Text style={{fontSize: 15, marginTop: 20}}>
            {detail_recipe.data[0].ingredient}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailRecipeScreen;
