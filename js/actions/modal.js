
import type { Action } from './types';

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';

export function closeModal(): Action {
    return {
        type: CLOSE_MODAL,
    };
}

export function openModal(): Action {
    return {
        type: OPEN_MODAL,
    };
}
