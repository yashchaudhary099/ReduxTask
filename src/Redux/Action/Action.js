// actions.js
const { ADD_TO_CART, REMOVE_FROM_CART } = require("./ActionTypes");

// Action creators
const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    };
};

const removeFromCart = (itemId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: { id: itemId }
    };
};

module.exports = {
    addToCart,
    removeFromCart
};
