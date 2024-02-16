import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Redux/Action/Action';
import { Data } from '../../Data';

const ProductCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer) || [];
  const [addedToCartMap, setAddedToCartMap] = useState({});

  useEffect(() => {
    const newAddedToCartMap = {};
    cartItems.forEach(item => {
      newAddedToCartMap[item.id] = true;
    });
    setAddedToCartMap(newAddedToCartMap);
  }, [cartItems.length]);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
    setAddedToCartMap(prevState => ({ ...prevState, [item.id]: true }));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.id));
    setAddedToCartMap(prevState => ({ ...prevState, [item.id]: false }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Data.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.author}>{item.author}</Text>
          <Image source={{ uri: item.download_url }} style={styles.image} />
          <View style={styles.buttonContainer}>
            {addedToCartMap[item.id] ? (
              <Button
                title="Remove from Cart"
                onPress={() => handleRemoveFromCart(item)}
                color="green"
              />
            ) : (
              <Button
                title="Add to Cart"
                onPress={() => handleAddToCart(item)}
                color="purple"
              />
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  itemContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  author: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductCart;
