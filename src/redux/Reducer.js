const initialState = {
    kinoNomi: "popular"
};


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            let a = {...state};
            a.kinoNomi = action.payload;
            return a



        default: return state
    }
}

export default Reducer