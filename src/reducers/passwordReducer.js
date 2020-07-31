import { 
    RECOVER_PASSWORD,
    RESET_PASSWORD
} from './types';
  
const initialState = {
    recoverPassword:{},
    resetPassword:{},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECOVER_PASSWORD:
            return {
                ...state,
                recoverPassword:action.payload
            };
        case RESET_PASSWORD:
            return {
                ...state,
                resetPassword:action.payload
        };
        default:
        return state;
    }
}