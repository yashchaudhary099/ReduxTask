// actions.js
import {ADD_TO_CART, REMOVE_FROM_CART} from '../ActionTypes';

// Action creators
// Action.js

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = itemId => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});
