// LoginForm.js
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string().required('Password is required!'),
});

const Login = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const handleSubmit = async values => {
    const {email} = values;
    try {
      const existingUserData = await AsyncStorage.getItem(email);
      if (existingUserData !== null) {
        Alert.alert('Login Successful');
        await AsyncStorage.setItem('currUser', email);
        setUser(email);
        navigation.navigate('ProductCart');
      } else {
        Alert.alert('User not found, Redirecting to Sign-Up Page');
        navigation.push('SignUp');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm(); // Reset the form fields
          actions.setSubmitting(false);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View>
            <TextInput
              placeholder="Enter your Email"
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {/* {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )} */}

            {touched.email && errors.email !== '' && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              placeholder="Enter your Password"
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {/* {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )} */}

            {touched.password && errors.password !== '' && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={isSubmitting}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <View style={styles.row}>
        <Text style={{fontSize: 16}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: 'rgb(72, 113, 247)', fontSize: 16}}>Signup</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={{color: 'rgb(72, 113, 247)', fontSize: 16, marginTop: 10}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  heading: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(106, 90, 205)',
    marginTop: 10,
    width: 'auto',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Login;
