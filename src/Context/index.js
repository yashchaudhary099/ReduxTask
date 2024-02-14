import React, { useState, createContext } from 'react';

const AuthContext = createContext({ user: null, setUser: () => { } });

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState(0);


  
  return (
    <AuthContext.Provider value={{
      data: [user, setUser], cart: [cart, setCart]
    //   , wishlist: [wishlistdata, setWishlistdata], card: [carddata, setCarddata]
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };