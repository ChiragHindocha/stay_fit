
import type { Action } from '../actions/types';
import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal';

export type State = {
    modalState: boolean,
}

const initialState = {
    modalState: false,
};

export default function (state: State = initialState, action: Action): State {

    if (action.type === CLOSE_MODAL) {
        return {
            ...state,
            modalState: false,
        };
    }

    if (action.type === OPEN_MODAL) {
        return {
            ...state,
            modalState: true,
        };
    }

    return state;
}
