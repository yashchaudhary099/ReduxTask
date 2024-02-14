import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingCart, faCircle} from '@fortawesome/free-solid-svg-icons';
import {removeFromCart, addToCart} from '../../Redux/Action';
import {Data} from '../../Data';

const Cart = () => {
  const cartItems = useSelector(state => state);
  const dispatch = useDispatch();

  const handleRemoveFromCart = itemId => {
    dispatch(removeFromCart(itemId));
  };

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <View style={styles.cartItems}>
        {cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{uri: item.url}} style={styles.image} />
            <Button
              title="Remove"
              onPress={() => handleRemoveFromCart(item.id)}
              color="#007bff"
            />
          </View>
        ))}
      </View>
      <View style={styles.dataItems}>
        {Data.map(item => (
          <View key={item.id} style={styles.dataItem}>
            <Image source={{uri: item.url}} style={styles.image} />
            <Button
              title="Add to Cart"
              onPress={() => handleAddToCart(item)}
              color="#007bff"
            />
          </View>
        ))}
      </View>
      <View style={styles.cartCount}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.cartIcon} />
        <FontAwesomeIcon icon={faCircle} style={styles.circleIcon} />
        <Text style={styles.count}>{cartItems.length}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cartItem: {
    marginHorizontal: 10,
  },
  dataItems: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dataItem: {
    marginHorizontal: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  cartCount: {
    marginTop: 20,
    position: 'relative',
  },
  cartIcon: {
    marginRight: 5,
  },
  circleIcon: {
    position: 'absolute',
    top: -5,
    right: -10,
    color: 'red',
  },
  count: {
    position: 'absolute',
    top: -3,
  },
});

export default Cart;
