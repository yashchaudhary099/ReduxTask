// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { useSelector } from 'react-redux';

// const Header = () => {
//   const cartData = useSelector(state => state.reducer);
//   const [cartItems, setCartItems] = useState(0);

//   useEffect(() => {
//     if (cartData) { // Check if cartData is defined
//       setCartItems(cartData.length);
//     }
//   }, [cartData]);

//   return (
//     <View style={styles.header}>
//       <Text style={styles.title}>My Shop</Text>
//       <View style={styles.cartContainer}>
//         <FontAwesomeIcon icon={faShoppingCart} style={styles.cartIcon} />
//         <View style={styles.cartBadge}>
//           <Text style={styles.cartItems}>{cartItems}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#007bff',
//     padding: 15,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   cartContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   cartIcon: {
//     color: '#fff',
//     fontSize: 20,
//     marginRight: 5,
//   },
//   cartBadge: {
//     backgroundColor: '#ff4500',
//     borderRadius: 10,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//   },
//   cartItems: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Header;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.reducer);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    if (cartItems) {
      setCartItemsCount(cartItems.length);
    }
  }, [cartItems]);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Shop</Text>
      <View style={styles.cartContainer}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.cartIcon} />
        <View style={styles.cartBadge}>
          <Text style={styles.cartItems}>{cartItemsCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    color: '#fff',
    fontSize: 20,
    marginRight: 5,
  },
  cartBadge: {
    backgroundColor: '#ff4500',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  cartItems: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;

