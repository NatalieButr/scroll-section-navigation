const initialState = {
    characters: []
}



export default function reducers(state = initialState, action) {
    switch(action.type)
     {
        case 'GET_CHARACTERS_SUCCESS':
            console.log(action.payload)
            return  {
                ...state,
                characters: action.payload,
            };
        case 'GET_CHARACTERS_ERROR':
            console.log('error', action.payload)
            return state;
        default:
            return state;
    }
}
