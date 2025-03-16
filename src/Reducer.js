const initialState = [];

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD":
            console.log(state)
            return [...state, action.payload];
        default:
            return state;
    }
};

export default Reducer;