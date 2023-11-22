interface Action {
    type: string;
    payload: any;
}

interface Store {
    token: string | null;
}

const initialState: Store = {
    token: window.localStorage.getItem("token") || null
};

const authReducer = (store = initialState, action: Action) => {
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...store,
                token: action.payload
            };
        default:
            return store;
    }
};

export default authReducer;
