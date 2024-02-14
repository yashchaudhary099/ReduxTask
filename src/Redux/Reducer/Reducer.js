const { ADD_To_Cart, Remove_From_Cart } = require("../ActionTypes");

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_To_Cart:
            return [
                ...state,
                action.payload
            ];
        case Remove_From_Cart:
            const filteredData = state.filter(item => item.id !== action.payload.id);
            return filteredData;
        default:
            return state;
    }
};

module.exports = reducer;
