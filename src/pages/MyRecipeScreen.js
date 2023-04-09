import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMyRecipe} from '../storages/actions/recipe';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MyRecipeScreen = () => {
  const dispatch = useDispatch();
  const my_recipe = useSelector(state => state.my_recipe);
  console.log(my_recipe.data);

  useEffect(() => {
    dispatch(getMyRecipe());
  }, [dispatch]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={my_recipe.data}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MyRecipeScreen;
