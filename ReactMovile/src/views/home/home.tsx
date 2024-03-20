import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable,TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../presentation/components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import useViewModel from '../../views/home/viewModel';
import { CustomTextInput } from '../../presentation/components/CusatomTextInput';

export const HomeScreen = () => {
  
    const {email, password, onChange} = useViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleRegisterPress = () => {
        navigation.navigate('RegisterScreen'); // Reemplaza 'Register' con el nombre de tu pantalla de registro en tus rutas de navegación
    };
    return (
        <View style={styles.container}>
        <Image
        source={require('../../../assets/chef.jpg')}
        style={styles.imageBackground}
        />
        <View style={styles.logoContainer}>
        <Image
        source={require('../../../assets/logo.png')}
        style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
        </View>
        <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <CustomTextInput
        image= {require('../../../assets/email.png')}
        placeholder='Correo electrónico'
        keyboardType='email-address'
        property='email'
        onChangeText={onChange}
        value={email}
        />
        <CustomTextInput
        image= {require('../../../assets/password.png')}
        placeholder='Contraseña'
        keyboardType='default'
        property='password'
        onChangeText={onChange}
        value={password}
        secureTextEntry={true}
        />
        <View style={{ marginTop: 30 }}>
        <RoundedButton text='ENTRAR' onPress={() =>{
        console.log('Email: ' + email);
        console.log('Password: ' + password);
        }} />
        </View>

<View style={styles.formRegister}>
      <Text>¿No tienes cuenta?</Text>
      <TouchableOpacity onPress={handleRegisterPress}>
        <Text style={styles.formRegisterText}>Regístrate</Text>
      </TouchableOpacity>
    </View>

</View>

</View>



);
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'black',
    },
    imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
    },
    form: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    },
    formText: {
    fontWeight: 'bold',
    fontSize: 16,
    },
    formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    },
    formRegisterText: {
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontWeight: 'bold',
    marginLeft: 10,
    },
    logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
    },
    logoImage: {
    width: 100,
    height: 100,
    },
    logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    },
    });