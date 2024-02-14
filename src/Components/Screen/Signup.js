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
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(27,27,51,1)',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  para: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .trim()
    .min(3, 'Invalid name!')
    .required('Name is required!'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password does not match!')
    .required('Confirm Password is required!'),
  address: Yup.string().required('Address is required!'),
});

const FormInput = ({placeholder, label, error, ...rest}) => {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
      <TextInput placeholder={placeholder} style={styles.input} {...rest} />
    </>
  );
};

const FormSubmitButton = ({title, submitting, onPress}) => {
  const backgroundColor = submitting
    ? 'rgba(27,27,51,0.4)'
    : 'rgba(27,27,51,1)';
  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.button, {backgroundColor}]}
      disabled={submitting}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const Signup = () => {
  const navigation = useNavigation();

  const storeUserData = async values => {
    const {email} = values;
    const existingUserData = await AsyncStorage.getItem(email);
    if (existingUserData !== null) {
      Alert.alert('User Already Exists');
    } else {
      Alert.alert('User Created Successfully');
      await AsyncStorage.setItem(email, JSON.stringify(values));
      await AsyncStorage.setItem('toPrint', email);
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={[styles.heading, {fontSize: 24, fontWeight: 'bold'}]}>
          Welcome
        </Text>
        <Text
          style={[
            styles.heading,
            {
              fontSize: 20,
              fontWeight: 'bold',
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: {width: 0, height: 2},
              textShadowRadius: 2,
            },
          ]}>
          Signup
        </Text>
        <Formik
          initialValues={{
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            storeUserData(values);
            actions.resetForm();
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
              <FormInput
                label="Full Name"
                placeholder="Enter your Full Name"
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                value={values.fullname}
                error={touched.fullname && errors.fullname}
              />
              <FormInput
                label="Email"
                placeholder="example@email.com"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={touched.email && errors.email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <FormInput
                label="Password"
                placeholder="********"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={touched.password && errors.password}
                secureTextEntry
                autoCapitalize="none"
              />
              <FormInput
                label="Confirm Password"
                placeholder="********"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                secureTextEntry
                autoCapitalize="none"
              />
              <FormInput
                label="Address"
                placeholder="City, Country"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                error={touched.address && errors.address}
              />
              <FormSubmitButton
                title="Sign Up"
                submitting={isSubmitting}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
        <View style={styles.para}>
          <Text style={{fontSize: 16}}>Already have an account </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'rgb(72, 113, 247)', fontSize: 16}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
