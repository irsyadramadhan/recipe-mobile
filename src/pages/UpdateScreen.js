import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  PermissionsAndroid,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateRecipe} from '../storages/actions/recipe';
import * as ImagePicker from 'react-native-image-picker';

const UpdateScreen = ({navigation, route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.data.data.token);
  const update_recipe = useSelector(state => state.update_recipe);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const reset = navigation.addListener('focus', () => {
      setTitle('');
      setCategoryId(null);
      setIngredient('');
      setResponse(null);
    });
    return reset;
  }, [navigation]);

  const postRecipe = async () => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('category_id', categoryId);
    formData.append('ingredient', ingredient);
    formData.append('image', {
      uri: response.assets[0].uri,
      name: response.assets[0].fileName,
      type: response.assets[0].type,
    });
    dispatch(updateRecipe(formData, id, token));
  };

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App Needs Camera Access',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
          buttonNeutral: 'Ask me later',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('access camera success');
        cameraLaunch();
      } else {
        console.log('access camera failed');
        console.log(PermissionsAndroid.RESULTS.GRANTED);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('response = ', res);
      if (res.didCancel) {
        console.log('user cancel image picker');
      } else if (res.error) {
        console.log('image picker error', res.error);
      } else {
        console.log(res);
        setResponse(res);
      }
    });
  };

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, res => {
      console.log('response = ', res);
      if (res.didCancel) {
        console.log('user cancel gallery picker');
      } else if (res.error) {
        console.log('gallery picker error', res.error);
      } else {
        console.log(res);
        setResponse(res);
      }
    });
  };
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState(null);
  const [ingredient, setIngredient] = useState('');
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
          Update your Recipe
        </Text>
      </View>
      <ScrollView style={{marginHorizontal: 20}}>
        {response && (
          <View
            style={{
              backgroundColor: '#f4f4f4',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Image
              resizeMode="cover"
              style={{height: 100, width: 150}}
              source={{uri: response?.assets[0].uri}}
            />
          </View>
        )}
        <TextInput
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder="Title"
          style={{
            backgroundColor: '#f4f4f4',
            marginBottom: 20,
            marginHorizontal: 1,
            borderRadius: 5,
            elevation: 3,
            paddingHorizontal: 20,
            marginTop: 1,
          }}
        />
        <TextInput
          value={categoryId}
          onChangeText={text => setCategoryId(text)}
          placeholder="Category ID"
          style={{
            backgroundColor: '#f4f4f4',
            marginBottom: 20,
            marginHorizontal: 1,
            borderRadius: 5,
            elevation: 3,
            paddingHorizontal: 20,
          }}
        />
        <TextInput
          value={ingredient}
          onChangeText={text => setIngredient(text)}
          multiline={true}
          numberOfLines={5}
          placeholder="Ingredient"
          style={{
            backgroundColor: '#f4f4f4',
            marginBottom: 20,
            marginHorizontal: 1,
            borderRadius: 5,
            elevation: 3,
            paddingHorizontal: 20,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            marginHorizontal: 20,
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
            borderRadius: 5,
          }}
          onPress={() => requestPermission()}>
          <Text style={{color: '#ffffff'}}>Add image from camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            marginHorizontal: 20,
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
            borderRadius: 5,
          }}
          onPress={() => galleryLaunch()}>
          <Text style={{color: '#ffffff'}}>Add image from gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#EEC302',
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
            borderRadius: 5,
          }}
          onPress={() => postRecipe()}>
          <Text style={{color: '#ffffff'}}>
            {update_recipe.isLoading ? 'Updating your recipe..' : 'Update'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default UpdateScreen;
