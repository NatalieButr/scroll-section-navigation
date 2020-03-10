const initialState = {
    characters: [],
    activeCharacter: '',
}



export default function reducers(state = initialState, action) {
    switch(action.type)
     {
        case 'GET_CHARACTERS_SUCCESS':
            return  {
                ...state,
                characters: action.payload,
            };
        case 'GET_CHARACTERS_ERROR':
            return state;
        case 'SET_ACTIVE_CHARACTER': 
            return {
                ...state,
                activeCharacter: action.payload,
            }    
        default:
            return state;
    }
}
