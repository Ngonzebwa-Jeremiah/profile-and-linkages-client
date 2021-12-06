
export const initialState = {
    response: []
    // Admin: localStorage.getItem('Admin'),
};
// console.log("context API "+initialState.items);

 function reducer(state,action){
    switch (action.type) {
        case 'SET_RES':
            return {
                ...state,
                response: action.response
            };

            // case 'SET_DATA':
            //     return {
            //         ...state,
            //         userData: action.userData
            //     };

            // case 'ADD_ITEM':
            //     return {
            //       ...state,
            //       items: [action.payload, ...state.items]
            //     };   
       
        default:
            return state;
    }
};

export default reducer;