const initState = {
    hits: [],
    terms: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_TERM":
            return {
                    hits: state.hits,
                    terms: [action.payload, ...state.terms]
                    };
                
        case "ADD_HIT": 
       
            return {
                    terms: state.terms,
                    hits: [action.payload, ...state.hits]
                    };
        default:
            return state;
    }
}

export default rootReducer