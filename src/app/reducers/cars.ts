import { createReducer, on } from '@ngrx/store';
import { Concessionaire } from '../store';
import { search } from '../actions/cars';

export const initialState = Concessionaire.getInstance().cars;

export const carsReducer = createReducer(
    initialState,
    on(search, (state, val) => state.filter(x => x)),

);