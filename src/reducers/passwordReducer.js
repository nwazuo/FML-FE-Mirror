import { 
    RECOVER_PASSWORD,
    RESET_PASSWORD,
    PASSWORD_RECOVERY_ERRORS
} from './types';
  
const initialState = {
    recoverPassword:{},
    resetPassword:{},
    passwordError:{}
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
        case PASSWORD_RECOVERY_ERRORS:
            return {
                ...state,
                passwordError:action.payload
        };
        default:
        return state;
    }
}